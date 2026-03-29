"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-cream">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-dark/30 via-transparent to-cream" />
        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Breathing circles — concentric rings that inhale/exhale */}
      <div
        className="absolute top-1/2 right-[15%] hidden lg:block pointer-events-none"
        style={{ transform: "translateY(-50%)" }}
        aria-hidden="true"
      >
        {/* Outer glow */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-sage/[0.04] animate-breathe-glow"
          style={{ left: "-300px", top: "-300px", animationDelay: "0s" }}
        />
        {/* Outermost ring */}
        <div
          className="absolute w-[520px] h-[520px] rounded-full border border-stone/[0.08] animate-breathe-slow"
          style={{ left: "-260px", top: "-260px", animationDelay: "0.4s" }}
        />
        {/* Middle ring */}
        <div
          className="absolute w-[360px] h-[360px] rounded-full border border-sage/[0.15] animate-breathe"
          style={{ left: "-180px", top: "-180px", animationDelay: "0.2s" }}
        />
        {/* Inner ring */}
        <div
          className="absolute w-[200px] h-[200px] rounded-full border border-sage/[0.2] animate-breathe"
          style={{ left: "-100px", top: "-100px", animationDelay: "0s" }}
        />
        {/* Core fill */}
        <div
          className="absolute w-[80px] h-[80px] rounded-full bg-sage/[0.08] animate-breathe"
          style={{ left: "-40px", top: "-40px", animationDelay: "0.1s" }}
        />
      </div>

      {/* Vertical label — left side */}
      <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-3">
        <span className="writing-vertical section-label rotate-180">Est. 2019 · Breathwork</span>
        <div className="w-px h-16 bg-stone/20" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Pre-headline */}
          <div
            className="flex items-center gap-4 mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            <div className="w-8 h-px bg-sage" />
            <span className="section-label">Breathe. Feel. Return.</span>
          </div>

          {/* Main headline */}
          <h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-charcoal opacity-0 animate-fade-up"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          >
            Guided back
            <br />
            <span className="italic text-sage">to yourself,</span>
            <br />
            one breath
            <br />
            at a time.
          </h1>

          {/* Subheadline */}
          <p
            className="mt-8 max-w-md text-stone font-light leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            Wavekind offers transformative breathwork experiences — online and
            in-person — rooted in the belief that healing begins with the breath
            you already have.
          </p>

          {/* CTAs */}
          <div
            className="mt-12 flex flex-col sm:flex-row gap-4 sm:items-center opacity-0 animate-fade-up"
            style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
          >
            <Link href="#offerings" className="btn-primary">
              Explore sessions
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
              href="#about"
              className="text-xs tracking-widest uppercase text-charcoal/60 hover:text-charcoal transition-colors duration-300 flex items-center gap-2"
            >
              Our story
            </Link>
          </div>

          {/* Stats */}
          <div
            className="mt-20 flex flex-wrap gap-x-12 gap-y-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
          >
            {[
              { value: "500+", label: "Sessions held" },
              { value: "6+", label: "Years of practice" },
              { value: "1:1", label: "Personalized care" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-2xl font-serif font-light text-charcoal">
                  {stat.value}
                </span>
                <span className="text-xs tracking-widest uppercase text-stone">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="relative z-10 flex flex-col items-center gap-2 pb-10 opacity-0 animate-fade-in"
        style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}
      >
        <span className="section-label">Scroll</span>
        <div className="w-px h-10 bg-stone/30 overflow-hidden">
          <div className="w-full h-full bg-stone/60 animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
