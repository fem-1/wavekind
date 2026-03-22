"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const aboutRef = useRef<HTMLLIElement>(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const aboutLinks = [
    { label: "Meet The Founder", href: "/about/meet-the-founder" },
    { label: "FAQs", href: "/about/faqs" },
  ];

  const navLinks = [
    { label: "Offerings", href: "#offerings" },
    { label: "Journal", href: "#journal" },
  ];

  const navLinksAfterAbout = [
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

            {/* About dropdown */}
            <li
              ref={aboutRef}
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                className="nav-link flex items-center gap-1.5"
                onClick={() => setAboutOpen((o) => !o)}
                aria-expanded={aboutOpen}
              >
                About
                <svg
                  className={`w-2.5 h-2.5 transition-transform duration-300 ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 10 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M1 1l4 4 4-4" />
                </svg>
              </button>

              {/* Dropdown panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 ${
                  aboutOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                {/* Arrow */}
                <div className="flex justify-center mb-1">
                  <div className="w-2 h-2 bg-cream border-l border-t border-stone/20 rotate-45" />
                </div>

                <div className="bg-cream border border-stone/15 shadow-sm min-w-[160px] py-2">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setAboutOpen(false)}
                      className="block px-5 py-3 text-xs tracking-widest uppercase text-charcoal/60 hover:text-charcoal hover:bg-cream-dark transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {navLinksAfterAbout.map((link) => (
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

            {/* About expandable on mobile */}
            <li
              className={`transition-all duration-500 ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: menuOpen ? `${navLinks.length * 80}ms` : "0ms" }}
            >
              <button
                onClick={() => setMobileAboutOpen((o) => !o)}
                className="text-3xl font-serif font-light text-charcoal hover:text-sage transition-colors duration-300 flex items-center gap-3"
              >
                About
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    mobileAboutOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 10 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M1 1l4 4 4-4" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-400 ${
                  mobileAboutOpen ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <ul className="flex flex-col gap-4 pl-4 border-l border-stone/20">
                  {aboutLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={() => {
                          setMenuOpen(false);
                          setMobileAboutOpen(false);
                        }}
                        className="text-lg font-sans font-light text-stone hover:text-charcoal transition-colors duration-300 tracking-wide"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {navLinksAfterAbout.map((link, i) => (
              <li
                key={link.label}
                className={`transition-all duration-500 ${
                  menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: menuOpen ? `${(navLinks.length + 1 + i) * 80}ms` : "0ms" }}
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
