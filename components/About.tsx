"use client";

import { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

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

  return ref;
}

export default function About() {
  const col1Ref = useReveal();
  const col2Ref = useReveal();
  const quoteRef = useReveal();

  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-20">
          <div className="w-8 h-px bg-sage" />
          <span className="section-label">Our philosophy</span>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column */}
          <div
            ref={col1Ref}
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight text-charcoal mb-8">
              Healing is not a
              <br />
              <em className="text-sage not-italic font-normal">
                destination —
              </em>
              <br />
              it&apos;s a practice.
            </h2>
            <p className="text-stone font-light leading-loose mb-6">
              Wavekind was born from a belief that the body already knows how to
              heal. Our role is simply to create the conditions — through breath,
              presence, and intentional guidance — for that healing to unfold
              naturally.
            </p>
            <p className="text-stone font-light leading-loose">
              We work with the nervous system, not against it. Sessions are held
              with deep respect for each person&apos;s unique journey, pace, and
              capacity.
            </p>
          </div>

          {/* Right column */}
          <div
            ref={col2Ref}
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "opacity 0.8s ease 200ms, transform 0.8s ease 200ms",
            }}
            className="flex flex-col justify-between gap-12"
          >
            {/* Values list */}
            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "Safety first",
                  desc: "Every session begins and ends with grounding. You are never alone in the process.",
                },
                {
                  number: "02",
                  title: "Somatic wisdom",
                  desc: "We listen to the body's signals, allowing the session to unfold at its own pace.",
                },
                {
                  number: "03",
                  title: "Integration support",
                  desc: "What surfaces in a session deserves time and care. We offer tools to help it land.",
                },
              ].map((item) => (
                <div key={item.number} className="flex gap-6">
                  <span className="font-mono text-xs text-stone/50 pt-1 shrink-0">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-charcoal mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-stone font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Accent line */}
            <div className="border-t border-stone/15 pt-8">
              <p className="font-mono text-xs text-stone/60 tracking-widest uppercase">
                Based in · Toronto, CA
              </p>
            </div>
          </div>
        </div>

        {/* Pull quote */}
        <div
          ref={quoteRef}
          style={{
            opacity: 0,
            transform: "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
          className="mt-28 border-t border-stone/15 pt-16"
        >
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="font-serif text-2xl md:text-3xl font-light text-charcoal leading-relaxed italic">
              &ldquo;The breath is always here, waiting — a faithful bridge
              between where you are and where you long to be.&rdquo;
            </p>
            <footer className="mt-6 section-label">— Wavekind, founding principle</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
