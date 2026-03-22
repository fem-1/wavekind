"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Yasmin is a fantastic facilitator who created a kind, loving and open environment for breathwork. Her sessions have helped me find more peace in my life, let go of negative thought patterns, release trauma and relax. I can’t recommend it enough! Everyone in the world should experience the power of breathwork, we need more Yasmins!",
    name: "Alex Kubbinga",
  },
  {
    quote:
      "Une magnifique rencontre avec Yasmin qui m’a accompagné à plusieurs sessions de breathwork indescriptibles et si puissantes. J’ai une entière confiance en Yasmin pour son énergie et sa bienveillance. Merci infiniment ❤️",
    name: "Mathilde Mériguet",
  },
  {
    quote:
      "Ethereally inspiring and much needed to manage the stresses life throws at us!",
    name: "Callum Thomas",
    location: "Online session",
  },
  {
    quote:
      "I had a private breathwork session with Yasmin last October and it was truly powerful and transformative. I came in with no expectations and no previous experience, yet I left feeling deeply grounded and renewed. Yasmin created such a safe and supportive space that allowed me to fully relax and explore the process as a first-timer. I would recommend her to anyone looking for a meaningful and healing breathwork experience. Thank you so much Yas!",
    name: "laura croonenberghs",
  },
  {
    quote:
      "Yasmin is a wonderful facilitator! Every session is magic.",
    name: "Pimara Soongswang",
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
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-sage" />
            <span className="section-label">What people say</span>
          </div>
          <a
            href="https://www.trustindex.io/the-trustindex-verified-badge/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-stone/50 hover:text-sage transition-colors duration-300 border border-stone/20 hover:border-sage/40 px-2.5 py-1"
          >
            <svg className="w-3 h-3 text-sage" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 0L7.5 4.5H12L8.25 7.25L9.75 12L6 9.25L2.25 12L3.75 7.25L0 4.5H4.5L6 0Z" />
            </svg>
            Verified by TrustIndex
          </a>
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
