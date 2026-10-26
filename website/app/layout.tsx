import { ClerkProvider, UserButton } from "@clerk/nextjs";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import ReviewToggle from "./review-toggle";

export const metadata: Metadata = {
  title: {
    default: "212 Maintenance | Residential & Commercial Cleaning",
    template: "%s | 212 Maintenance",
  },
  description: "Residential and commercial cleaning and floor care for NYC and Long Island homes and businesses. Explore cleaning, carpet care, carpet tile maintenance, and post-construction services.",
};

import { authConfigured } from "./auth-config";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="topbar">RESIDENTIAL & COMMERCIAL · NYC & LONG ISLAND <a href="tel:+16315327534">Call (631) 532-7534 ↗</a></div>
          <header className="wrap nav">
          <Link className="brand" href="/"><Image src="/212-maintenance.webp" alt="" width={150} height={115} priority /><span className="brand-name">212 Maintenance</span></Link>
          <address className="header-contact" aria-label="Contact 212 Maintenance">
            <a className="header-phone" href="tel:+16315327534"><span className="header-call-label">Call for a quote</span>(631) 532-7534</a>
          </address>
          <nav className="links" aria-label="Main navigation">
          <Link href="/services">Services</Link>
          <Link href="/#approach">Our approach</Link>
          <Link href="/#areas">Service areas</Link>
          <Link className="nav-quote" href="/contact">Request a quote</Link>
          {authConfigured() && <UserButton />}</nav>
          </header>
          {children}
          <ReviewToggle />
          <footer>
          <div className="wrap footer-inner">
          <Link className="brand" href="/"><Image src="/212-maintenance.webp" alt="" width={150} height={115} priority /><span className="brand-name">212 Maintenance</span></Link>
          <p>Residential & commercial cleaning.<br />Floor care for homes and businesses.<br />NYC and Long Island.</p>
          <address style={{ fontStyle: "normal", fontSize: 14, lineHeight: 2 }}>
          <a href="tel:+16315327534">(631) 532-7534</a><br />
          </address>
          </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
function AuthProvider({children}:{children:React.ReactNode}) { return authConfigured() ? <ClerkProvider signInUrl="/sign-in" signUpUrl="/sign-up" signInFallbackRedirectUrl="/" signUpFallbackRedirectUrl="/">{children}</ClerkProvider> : <>{children}</>; }
