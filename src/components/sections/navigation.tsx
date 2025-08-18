"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "AI Catalog", href: "/products" },
  { name: "Retail Genie", href: "/retailgenie" },
  { name: "Thought Leadership", href: "/blog" },
  { name: "About Us", href: "/team" },
  { name: "Lets UnAbandon", href: "/contact" },
];

const Logo = () => (
  <Link href="/" className="flex items-center gap-2" aria-label="UnAbandon AI Home">
    <img 
      src="/LOGO.png" 
      alt="UnAbandon AI Logo" 
      className="h-9 w-auto"
    />
  </Link>
);

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
  <header className="sticky top-0 z-50 w-full border-b bg-elevate-token shadow-sm">
      <div className="container mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-10">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-normal text-muted-token transition-colors hover:text-base-token"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-base-token"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
  <div className="border-t bg-elevate-token md:hidden" id="mobile-menu">
          <nav className="space-y-1 px-4 pb-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
    className="block rounded-lg px-3 py-2 text-base font-medium text-muted-token hover:bg-surface-token hover:text-base-token"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}