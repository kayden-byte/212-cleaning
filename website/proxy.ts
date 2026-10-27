import { publicSiteEnabled, isMarketingPath } from "./app/launch-config";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
const publicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/robots.txt", "/sitemap.xml"]);
const middleware = clerkMiddleware(async (auth, request) => {
 if (!publicRoute(request) && !(publicSiteEnabled && isMarketingPath(request.nextUrl.pathname))) await auth.protect();
});
export default function proxy(request: NextRequest, event: Parameters<typeof middleware>[1]) {
 if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || !process.env.CLERK_SECRET_KEY) {
  if (publicRoute(request) || (publicSiteEnabled && isMarketingPath(request.nextUrl.pathname))) return NextResponse.next();
  return NextResponse.redirect(new URL("/sign-in", request.url));
 }
 return middleware(request, event);
}
export const config = {
 matcher: ["/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)", "/(api|trpc)(.*)"],
};
