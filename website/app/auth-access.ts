import "server-only";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { authConfigured } from "./auth-config";
export async function requireSignIn() {
 if (!authConfigured()) redirect("/sign-in");
 await auth.protect();
}
