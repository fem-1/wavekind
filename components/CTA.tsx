"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(30px)",
        transition: "opacity 0.9s ease, transform 0.9s ease",
      }}
      className="py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-charcoal text-cream px-8 md:px-20 py-16 md:py-24 overflow-hidden">
          {/* Background decorative circles */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-cream/5" />
          <div className="absolute -right-8 top-8 w-52 h-52 rounded-full border border-sage/10" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-sage/5" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-sage" />
                <span className="section-label text-stone-light/50">Ready to begin?</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight">
                Your next breath
                <br />
                <em className="text-sage">could change everything.</em>
              </h2>
            </div>

            <div className="flex flex-col gap-8">
              <p className="text-stone-light/60 font-light leading-relaxed">
                Reach out to start a conversation. We&apos;ll find the session
                that fits where you are and where you want to go. No experience
                necessary — only a willingness to breathe.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about/get-in-touch"
                  className="inline-flex items-center gap-3 bg-cream text-charcoal px-8 py-4 text-xs tracking-widest uppercase hover:bg-cream-dark transition-colors duration-300"
                >
                  Get in touch
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6H11M6 1L11 6L6 11"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  href="#offerings"
                  className="inline-flex items-center gap-3 border border-cream/20 text-cream px-8 py-4 text-xs tracking-widest uppercase hover:border-cream/50 transition-colors duration-300"
                >
                  View sessions
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4 border-t border-cream/10">
                <p className="text-xs text-stone-light/30 font-mono">
                  Typically responds within 24 hrs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
