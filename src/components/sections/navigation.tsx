"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";

const navLinks = [
  { name: "AI Catalog", href: "/products" },
  { name: "Retail Genie", href: "/retailgenie" },
  { name: "Thought Leadership", href: "/blog" },
  { name: "About Us", href: "/team" },
  { name: "Lets UnAbandon", href: "/contact" },
];
const Logo = () => (
  <Link href="/" className="flex items-center gap-2" aria-label="UnAbandon AI Home">
    <span className="inline-flex items-center justify-center rounded-md bg-white dark:bg-white p-1 shadow-sm ring-1 ring-black/5 dark:ring-white/10">
      <img 
        src="/LOGO.png" 
        alt="UnAbandon AI Logo" 
        className="h-9 w-auto"
      />
    </span>
  </Link>
);

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // Initialize theme on mount based on localStorage or system preference
  useEffect(() => {
    setHasMounted(true);
    try {
      const stored = localStorage.getItem("theme");
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const shouldBeDark = stored ? stored === "dark" : prefersDark;
      const root = document.documentElement.classList;
      root[shouldBeDark ? "add" : "remove"]("dark");
      setIsDark(shouldBeDark);
    } catch {
      // no-op
    }
  }, []);

  const toggleTheme = () => {
    try {
      const root = document.documentElement.classList;
      const next = !root.contains("dark");
      root[next ? "add" : "remove"]("dark");
      localStorage.setItem("theme", next ? "dark" : "light");
      setIsDark(next);
    } catch {
      // no-op
    }
  };

  return (
  <header className="sticky top-0 z-50 w-full border-b bg-elevate-token shadow-sm">
      <div className="container mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-10">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 md:flex">
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
          <button
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-transparent text-base-token hover:bg-surface-token focus:outline-none focus:ring-2 focus:ring-offset-2 ring-brand-token"
            aria-label="Toggle dark mode"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {hasMounted && isDark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
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

            <button
              onClick={() => {
                toggleTheme();
                setIsMenuOpen(false);
              }}
              className="mt-2 flex w-full items-center justify-between rounded-lg bg-surface-token px-3 py-2 text-base font-medium text-muted-token hover:text-base-token"
              aria-label="Toggle dark mode"
            >
              <span>{isDark ? "Light mode" : "Dark mode"}</span>
              {isDark ? (
                <Sun className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}