"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const offerings = [
  {
    id: "01",
    title: "1:1 Breathwork Sessions",
    category: "Private",
    duration: "90 min",
    description:
      "A deeply personal session tailored entirely to where you are right now. We begin with a conversation, then move through a guided breathwork journey designed for your nervous system.",
    highlights: ["Nervous system regulation", "Emotional release", "Somatic integration"],
    accent: "sage",
  },
  {
    id: "02",
    title: "Group Breathwork Circles",
    category: "Community",
    duration: "2 hrs",
    description:
      "There is a unique power in breathing together. These monthly circles create a container of safety and collective intention, where transformation happens in community.",
    highlights: ["Monthly gatherings", "Shared intention", "Post-session sharing"],
    accent: "mint",
  },
  {
    id: "03",
    title: "Online Immersive",
    category: "Digital",
    duration: "60 min",
    description:
      "Access the transformative power of breathwork from anywhere in the world. Our virtual sessions maintain the same depth and care as in-person, with the comfort of your own space.",
    highlights: ["Worldwide access", "Recorded for review", "Follow-up support"],
    accent: "warm",
  },
  {
    id: "04",
    title: "Corporate Wellness",
    category: "Teams",
    duration: "Custom",
    description:
      "Bring intentional breathing into your workplace culture. Sessions designed for teams that want to cultivate presence, resilience, and authentic connection at work.",
    highlights: ["Team sessions", "Custom programs", "Workshop formats"],
    accent: "stone-light",
  },
];

export default function Offerings() {
  const [hovered, setHovered] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll("[data-reveal]");
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="offerings"
      ref={sectionRef}
      className="py-24 md:py-36 bg-charcoal text-cream"
    >
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Header */}
        <div
          data-reveal
          style={{
            opacity: 0,
            transform: "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-sage" />
              <span className="section-label text-stone-light/60">What we offer</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight text-cream">
              Sessions designed
              <br />
              <em className="text-sage">for your journey</em>
            </h2>
          </div>
          <p className="max-w-xs text-stone-light/60 font-light text-sm leading-relaxed">
            Each offering is crafted with intention, held with care, and designed
            to meet you exactly where you are.
          </p>
        </div>

        {/* Offerings list */}
        <div className="divide-y divide-cream/10">
          {offerings.map((offering, i) => (
            <div
              key={offering.id}
              data-reveal
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: `opacity 0.8s ease ${i * 100}ms, transform 0.8s ease ${i * 100}ms`,
              }}
              onMouseEnter={() => setHovered(offering.id)}
              onMouseLeave={() => setHovered(null)}
              className={`group py-10 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-16 items-start cursor-pointer transition-all duration-300 ${
                hovered === offering.id ? "pl-4" : "pl-0"
              }`}
            >
              {/* Number + category */}
              <div className="flex md:flex-col gap-4 md:gap-2 items-center md:items-start">
                <span className="font-mono text-xs text-stone-light/30">
                  {offering.id}
                </span>
                <span className="text-xs tracking-widest uppercase text-stone-light/50 font-mono">
                  {offering.category}
                </span>
              </div>

              {/* Main content */}
              <div>
                <div className="flex flex-wrap items-baseline gap-4 mb-4">
                  <h3
                    className={`font-serif text-2xl md:text-3xl font-light transition-colors duration-300 ${
                      hovered === offering.id ? "text-sage" : "text-cream"
                    }`}
                  >
                    {offering.title}
                  </h3>
                  <span className="text-xs tracking-widest text-stone-light/40 uppercase font-mono">
                    {offering.duration}
                  </span>
                </div>
                <p className="text-stone-light/60 font-light text-sm leading-relaxed max-w-xl mb-6">
                  {offering.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {offering.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs tracking-wide text-stone-light/50 border border-cream/10 px-3 py-1.5"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow CTA */}
              <div
                className={`flex items-center gap-2 text-xs tracking-widest uppercase transition-all duration-300 ${
                  hovered === offering.id
                    ? "text-sage translate-x-0 opacity-100"
                    : "text-stone-light/30 -translate-x-2 opacity-0 md:opacity-100 md:translate-x-0"
                }`}
              >
                <Link href="#contact" className="flex items-center gap-2">
                  Book
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8H13M8 3L13 8L8 13"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
