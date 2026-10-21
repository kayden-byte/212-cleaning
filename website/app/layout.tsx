import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "212 Maintenance | Commercial Cleaning & Floor Care",
    template: "%s | 212 Maintenance",
  },
  description: "Commercial cleaning and floor care for NYC and Long Island businesses. Explore cleaning, carpet care, carpet tile maintenance, and post-construction services.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="topbar">COMMERCIAL PROPERTIES ONLY · NYC & LONG ISLAND</div>
        <header className="wrap nav">
          <Link className="brand" href="/"><Image src="/212-maintenance.webp" alt="212 Maintenance" width={150} height={115} priority /></Link>
          <nav className="links" aria-label="Main navigation">
            <Link href="/#services">Services</Link>
            <Link href="/#approach">Our approach</Link>
            <Link href="/#areas">Service areas</Link>
            <Link className="nav-quote" href="/contact">Request a quote ↗</Link>
          </nav>
        </header>
        {children}
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
      </body>
    </html>
  );
}
