"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "I've tried many healing modalities over the years, but breathwork with Wavekind unlocked something I didn't know was stuck. The gentleness, the safety, the depth — I left feeling lighter than I had in years.",
    name: "M. Okafor",
    location: "Toronto, ON",
  },
  {
    quote:
      "What struck me most was how held I felt throughout the session. There was no pressure, no agenda — just a beautifully guided space to breathe, feel, and release. I'll be back.",
    name: "S. Brennan",
    location: "Vancouver, BC",
  },
  {
    quote:
      "I was skeptical at first — breathing as a healing tool seemed too simple. But something profound happened that afternoon. I now practice breathwork every day, and it has changed my life.",
    name: "T. Nakamura",
    location: "Online session",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ opacity: 0, transition: "opacity 1s ease" }}
      className="py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-cream-dark"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-px bg-sage" />
          <span className="section-label">What people say</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-end">
          {/* Quote */}
          <div className="max-w-2xl">
            <div className="relative overflow-hidden">
              {testimonials.map((t, i) => (
                <blockquote
                  key={i}
                  className={`transition-all duration-700 ${
                    i === active
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 absolute inset-0"
                  }`}
                >
                  <p className="font-serif text-2xl md:text-3xl font-light text-charcoal leading-relaxed mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="flex items-center gap-4">
                    <div className="w-6 h-px bg-stone/30" />
                    <div>
                      <p className="text-sm font-medium text-charcoal">{t.name}</p>
                      <p className="text-xs text-stone tracking-wide">{t.location}</p>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex lg:flex-col gap-3 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 ${
                  i === active
                    ? "w-8 h-px bg-charcoal"
                    : "w-4 h-px bg-stone/30 hover:bg-stone/60"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
