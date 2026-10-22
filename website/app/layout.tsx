import { ClerkProvider, UserButton } from "@clerk/nextjs";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import ReviewToggle from "./review-toggle";

export const metadata: Metadata = {
  title: {
    default: "212 Maintenance | Commercial Cleaning & Floor Care",
    template: "%s | 212 Maintenance",
  },
  description: "Commercial cleaning and floor care for NYC and Long Island businesses. Explore cleaning, carpet care, carpet tile maintenance, and post-construction services.",
};

import { authConfigured } from "./auth-config";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="topbar">COMMERCIAL PROPERTIES ONLY · NYC & LONG ISLAND <a href="tel:+16315327534">Call (631) 532-7534 ↗</a></div>
          <header className="wrap nav">
          <Link className="brand" href="/"><Image src="/212-maintenance.webp" alt="212 Maintenance" width={150} height={115} priority /></Link>
          <address className="header-contact" aria-label="Contact 212 Maintenance">
            <a className="header-phone" href="tel:+16315327534">(631) 532-7534</a>
            <a className="header-email" href="mailto:kayden@212carpet.com">kayden@212carpet.com</a>
          </address>
          <nav className="links" aria-label="Main navigation">
          <Link href="/services">Services</Link>
          <Link href="/#approach">Our approach</Link>
          <Link href="/#areas">Service areas</Link>
          <Link className="nav-quote" href="/contact">Request a quote ↗</Link>
          {authConfigured() && <UserButton />}</nav>
          </header>
          {children}
          <ReviewToggle />
          <footer>
          <div className="wrap footer-inner">
          <Link className="brand" href="/"><Image src="/212-maintenance.webp" alt="212 Maintenance" width={150} height={115} priority /></Link>
          <p>Commercial cleaning & floor care.<br />NYC and Long Island.</p>
          <address style={{ fontStyle: "normal", fontSize: 14, lineHeight: 2 }}>
          <a href="tel:+16315327534">(631) 532-7534</a><br />
          <a style={{ overflowWrap: "anywhere" }}
          href="mailto:kayden@212carpet.com">kayden@212carpet.com</a>
          </address>
          </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
function AuthProvider({children}:{children:React.ReactNode}) { return authConfigured() ? <ClerkProvider signInUrl="/sign-in" signUpUrl="/sign-up" signInFallbackRedirectUrl="/" signUpFallbackRedirectUrl="/">{children}</ClerkProvider> : <>{children}</>; }
