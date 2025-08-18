"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Products", href: "/products" },
  { name: "Retail Genie", href: "/retailgenie" },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const Logo = () => (
  <Link href="/" className="flex items-center gap-2" aria-label="UnAbandon AI Home">
    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-[#4CAF50] p-1">
      <span className="text-lg font-bold text-white">Un</span>
    </div>
    <span className="text-xl font-semibold text-text-primary">Abandon AI</span>
  </Link>
);

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
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
                  className="text-sm font-normal text-text-secondary transition-colors hover:text-text-primary"
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
            className="inline-flex items-center justify-center rounded-md p-2 text-text-primary"
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
        <div className="border-t bg-background md:hidden" id="mobile-menu">
          <nav className="space-y-1 px-4 pb-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-text-secondary hover:bg-accent hover:text-text-primary"
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