"use server";

import { auth } from "@clerk/nextjs/server";
import { authConfigured } from "./auth-config";

type ContactState = { ok: boolean; message: string };
export async function sendContact(_previous: ContactState, data: FormData): Promise<ContactState> {
  const failure = { ok: false, message: "Your inquiry wasn’t sent. Please call (212) 537-9219." };
  if (!authConfigured()) return failure;
  const { userId } = await auth();
  if (!userId) return { ok: false, message: "Please sign in again before sending your inquiry." };
  if (data.get("website")) return failure;
  const fields: Record<string, string> = {};
  for (const [name, limit] of [["name",100],["business",150],["email",254],["phone",40],["location",250],["service",150],["message",4000]] as const) {
    const value = data.get(name);
    if (value !== null && typeof value !== "string") return failure;
    fields[name] = (value || "").trim();
    if (fields[name].length > limit) return failure;
  }
  if (!fields.name || fields.phone.replace(/\D/g, "").length < 10 || !fields.location || !fields.service || (fields.email && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) || /[\r\n]/.test(fields.email))))
    return { ok: false, message: "Please enter your name, a valid phone number, your location, and a service. Check your email if you added one." };
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL) return failure;
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL, to: ["kayden@212carpet.com"], ...(fields.email ? { reply_to: fields.email } : {}),
        subject: "212 Maintenance — new website inquiry",
        text: Object.entries(fields).map(([key,value]) => `${key}: ${value}`).join("\n\n") }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return failure;
    const result = await response.json();
    if (!result.id) return failure;
    return { ok: true, message: "Your inquiry has been sent. Thank you—we’ll contact you about your quote." };
  } catch { return failure; }
}
