"use client";

import { useEffect, useRef } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

function useReveal(delay = 0) {
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function OurFounderPage() {
  const heroRef = useReveal();
  const originRef = useReveal();
  const journeyRef = useReveal();
  const missionRef = useReveal();
  const valuesRef = useReveal();
  const quoteRef = useReveal();

  return (
    <>
      <Nav />

      <main className="bg-cream min-h-screen">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="pt-36 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div
            ref={heroRef}
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
            }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-8 h-px bg-sage" />
              <span className="section-label">Meet the founder</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">
              <div>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-charcoal mb-6">
                  Breathing life
                  <br />
                  into <em className="text-sage not-italic">presence.</em>
                </h1>
                <p className="text-stone font-light leading-loose text-lg max-w-md">
                  Breathwork facilitator, somatic guide, and lifelong student of
                  the body&apos;s wisdom.
                </p>
              </div>

              {/* Photo placeholder */}
              <div className="relative aspect-[3/4] bg-cream-dark overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-stone/40">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="font-mono text-xs tracking-widest uppercase">
                    Founder photo
                  </span>
                </div>
                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-sage/30" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Origin Story ─────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-cream-dark">
          <div className="max-w-7xl mx-auto">
            <div
              ref={originRef}
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
            >
              <div className="lg:col-span-4">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-xs text-stone/50">01</span>
                  <div className="w-6 h-px bg-stone/30" />
                  <span className="section-label">The beginning</span>
                </div>
                {/* Small image placeholder */}
                <div className="aspect-square bg-cream overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-stone/30">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="1" />
                      <path d="M3 9l4-4 4 4 4-6 4 6" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 lg:pt-16">
                <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-snug mb-8">
                  I didn&apos;t find breathwork.
                  <br />
                  <em>It found me — at the exact moment I needed it.</em>
                </h2>
                <div className="space-y-5 text-stone font-light leading-loose">
                  <p>
                    For most of my life, I lived in my head. I was the person
                    who planned everything, optimised everything, and still
                    somehow felt like something essential was missing. On the
                    outside, things looked fine. On the inside, I was running on
                    empty.
                  </p>
                  <p>
                    It wasn&apos;t until a particularly difficult season — one
                    that brought me to my knees — that I stumbled into my first
                    breathwork session. I remember lying on the floor, not quite
                    sure what was happening, and then something softened. Not
                    fixed. Not solved. Just… softened.
                  </p>
                  <p>
                    That single hour changed the entire direction of my life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Journey ──────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div
              ref={journeyRef}
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            >
              <div className="flex items-center gap-4 mb-16">
                <span className="font-mono text-xs text-stone/50">02</span>
                <div className="w-6 h-px bg-stone/30" />
                <span className="section-label">The journey</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
                <div className="space-y-6 text-stone font-light leading-loose">
                  <p>
                    Over the years that followed, I trained deeply — in
                    connected breathwork, somatic experiencing, trauma-informed
                    facilitation, and nervous system regulation. I studied under
                    teachers across Europe and North America, sitting in ceremony
                    and in classroom, learning how breath becomes a language the
                    body already speaks.
                  </p>
                  <p>
                    What I discovered is that the breath is not a technique. It
                    is a relationship. And like any relationship, it asks for
                    presence, patience, and a willingness to listen.
                  </p>
                </div>

                <div className="space-y-6 text-stone font-light leading-loose">
                  <p>
                    I also discovered — through my own healing — that so much of
                    what we carry is not failure. It is memory. Stored in tissue
                    and muscle and bone. Breathwork offered me a way in: not
                    through analysis, but through experience. Not through
                    willpower, but through surrender.
                  </p>
                  <p>
                    Wavekind grew from that realisation. It is the practice I
                    wish had existed for me earlier. A space where you
                    don&apos;t have to have it figured out to begin.
                  </p>
                </div>
              </div>

              {/* Image strip placeholder */}
              <div className="mt-16 grid grid-cols-3 gap-4">
                {["Training", "Practice", "Community"].map((label) => (
                  <div
                    key={label}
                    className="aspect-[4/3] bg-cream-dark flex flex-col items-center justify-center gap-2 text-stone/30"
                  >
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="1" />
                      <path d="M3 9l4-4 4 4 4-6 4 6" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                    </svg>
                    <span className="font-mono text-xs tracking-widest uppercase">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Pull Quote ───────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-charcoal">
          <div
            ref={quoteRef}
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
            className="max-w-4xl mx-auto text-center"
          >
            <blockquote>
              <p className="font-serif text-3xl md:text-4xl font-light text-cream leading-relaxed italic">
                &ldquo;I believe every body holds wisdom it has never been given
                permission to speak. My work is to create that permission.&rdquo;
              </p>
              <footer className="mt-8 font-mono text-xs tracking-ultra-wide uppercase text-stone">
                — Wavekind Founder
              </footer>
            </blockquote>
          </div>
        </section>

        {/* ── Mission & Approach ───────────────────────────── */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div
              ref={missionRef}
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            >
              <div className="flex items-center gap-4 mb-16">
                <span className="font-mono text-xs text-stone/50">03</span>
                <div className="w-6 h-px bg-stone/30" />
                <span className="section-label">The approach</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5">
                  <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-snug">
                    Nervous system first.
                    <br />
                    <em className="text-sage not-italic">Always.</em>
                  </h2>
                </div>
                <div className="lg:col-span-7 space-y-5 text-stone font-light leading-loose">
                  <p>
                    Every session at Wavekind is held with one foundational
                    principle: safety before depth. There is no rush here. No
                    performance. No expectation that you will arrive broken and
                    leave transformed in ninety minutes.
                  </p>
                  <p>
                    What I offer is slower, and more honest than that. A space
                    where your body gets to set the pace. Where breath becomes a
                    compass rather than a command.
                  </p>
                  <p>
                    I am trauma-informed, somatically trained, and endlessly
                    curious about what it means to be human in a world that
                    rarely gives us space to exhale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ───────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-cream-dark">
          <div className="max-w-7xl mx-auto">
            <div
              ref={valuesRef}
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            >
              <div className="flex items-center gap-4 mb-16">
                <div className="w-8 h-px bg-sage" />
                <span className="section-label">Trained in</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone/10">
                {[
                  {
                    label: "Breathwork",
                    detail:
                      "Connected Breathwork, Holotropic principles, conscious connected breathing",
                  },
                  {
                    label: "Somatic Work",
                    detail:
                      "Somatic Experiencing®, body-based trauma resolution, nervous system mapping",
                  },
                  {
                    label: "Facilitation",
                    detail:
                      "Trauma-informed holding, group container work, integration support",
                  },
                  {
                    label: "Ongoing Study",
                    detail:
                      "Polyvagal theory, attachment science, embodied mindfulness",
                  },
                ].map((item) => (
                  <div key={item.label} className="bg-cream-dark p-8 space-y-4">
                    <h3 className="font-serif text-lg font-light text-charcoal">
                      {item.label}
                    </h3>
                    <p className="text-sm text-stone font-light leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto border-t border-stone/15 pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-charcoal mb-3">
                Ready to begin?
              </h2>
              <p className="text-stone font-light">
                Explore sessions and find the right offering for where you are
                right now.
              </p>
            </div>
            <a href="/#offerings" className="btn-primary shrink-0">
              View offerings
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
