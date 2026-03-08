"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: "Offerings", href: "#offerings" },
    { label: "About", href: "#about" },
    { label: "Journal", href: "#journal" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md border-b border-stone/10"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 py-5">
          {/* Logo */}
          <Link
            href="/"
            className="text-sm tracking-ultra-wide uppercase font-light text-charcoal hover:text-sage transition-colors duration-300"
          >
            Wavekind
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-6">
            <Link
              href="#offerings"
              className="hidden md:inline-flex btn-primary py-2.5 px-6"
            >
              Book a session
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 w-6 h-5 justify-center"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-px bg-charcoal transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[5px]" : ""
                }`}
              />
              <span
                className={`block h-px bg-charcoal transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-charcoal transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream flex flex-col transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex-1 flex flex-col justify-center px-10">
          <ul className="flex flex-col gap-8">
            {navLinks.map((link, i) => (
              <li
                key={link.label}
                className={`transition-all duration-500 ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 80}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-serif font-light text-charcoal hover:text-sage transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-16">
            <Link
              href="#offerings"
              onClick={() => setMenuOpen(false)}
              className="btn-primary"
            >
              Book a session
            </Link>
          </div>
        </div>

        <div className="px-10 pb-10 flex items-center gap-6">
          <span className="section-label">Follow along</span>
          <div className="flex gap-4">
            {["Instagram", "Spotify"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs tracking-widest text-stone hover:text-charcoal transition-colors duration-300 uppercase"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
