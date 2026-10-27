import "server-only";
import { publicSiteEnabled } from "./launch-config";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { authConfigured } from "./auth-config";
export async function requireSignIn() {
 if (publicSiteEnabled) return;
 if (!authConfigured()) redirect("/sign-in");
 await auth.protect();
}
