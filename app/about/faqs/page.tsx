"use client";

import { useState, useEffect, useRef } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const faqs: { category: string; items: { q: string; a: string; list?: string[] }[] }[] = [
  {
    category: "About Breathwork",
    items: [
      {
        q: "Is breathwork suitable for beginners?",
        a: "Absolutely! If you can breathe, then this is for you! In fact, many who find meditation difficult are surprised by how they are able to breathe to states of tranquility. I’ll guide you gently at your own pace.",
      },
      {
        q: "How do I know if breathwork is right for me?",
        a: "Book a free 30 minute Connection Call with me where we'll explore your current context, what you're seeking, and map your way forward.  I will also share more about my practice and answer any questions you may have.  You'll leave with genuine insights about yourself and your next steps.",
      },
      {
        q: "Is breathwork safe?",
        a: "TODO",
      },
      {
        q: "What might I experience during a session?",
        a: "TODO",
      },
    ],
  },
  {
    category: "Preparing for a Session",
    items: [
      {
        q: "How should I prepare for my first session?",
        a: "Once you've filled out the intake form there is nothing else to prepare, but there are some things you can do to ensure you have a super experience:",
        list: [
          "Come on an empty or light stomach (have your last main meal 2 hours before the session)",
          "Be well hydrated before the session",
          "Come with no expectations other than to be open to the experience of breathing"
        ]
      },
      {
        q: "Can I attend if I've never done anything like this before?",
        a: "Absolutely. Many people arrive with no prior experience of breathwork, meditation, or somatic work. There are no expectations to hold, no technique to perfect, and no way to do it wrong. The breath knows what it's doing. Your only job is to show up and breathe.",
      },
    ],
  },
  {
    category: "After a Session",
    items: [
      {
        q: "How many sessions will I need?",
        a: "There is no fixed answer. Some people experience profound shifts in a single session; others build a regular practice over months or years. One session is always a complete experience in itself.",
      },
    ],
  },
  {
    category: "Booking & Logistics",
    items: [
      {
        q: "Where do in-person 1:1 sessions take place?",
        a: "Sessions can take place in your home/space or at one of the following therapeutic spaces which I am affiliated with:",
        list: [
          "Vibrant Health Victoria — 1 Lower Grosvenor Pl, London SW1W 0EJ",
          "Bodywise Natural Health Bethnal Green — 21 Old Ford Rd., London E2 9PL",
          "Move Well Bow — Dane Place, Bow, London E3 5EJ",
        ],
      },
      {
        q: "What is the price of your sessions?",
        a: "In London, workshops cost £40 per person (£33 supported ticket). The cost of workshops in other cities will vary according to context. In order to make breathwork more accessible, I am able to offer a number of supported spots upon request. Bundles are available for both workshops and private sessions — please reach out via email at yasmin@wavekind.com. Please enquire for costs associated with 1:1 private sessions."
      },
      {
        q: "Do you offer online sessions?",
        a: "Yes. Online sessions are available and fully supported. While in-person work has a particular quality of presence, online breathwork is deeply effective and many clients prefer it for the comfort and privacy of their own space.",
      },
      {
        q: "What is your cancellation policy?",
        a: "We ask for at least 48 hours' notice for cancellations or rescheduling. Cancellations within 48 hours may be charged 50% of the session fee. We understand that life happens — if something unexpected arises, please reach out and we'll do our best to work with you.",
      },
      {
        q: "I have a question that isn't answered here.",
        a: "Please reach out. We're always happy to talk through any questions or concerns before you book — no question is too small. You can contact us via the form on the website or directly by email. We aim to respond within one business day.",
      },
    ],
  },
];

function AccordionItem({ q, a, list }: { q: string; a: string; list?: string[] }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-stone/15 last:border-b-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        aria-expanded={open}
      >
        <span className="font-serif text-lg font-light text-charcoal group-hover:text-sage transition-colors duration-300 leading-snug">
          {q}
        </span>
        <span
          className={`shrink-0 mt-1 w-5 h-5 flex items-center justify-center border border-stone/30 rounded-full transition-all duration-300 ${
            open ? "bg-charcoal border-charcoal" : "group-hover:border-sage"
          }`}
        >
          <svg
            className={`w-2.5 h-2.5 transition-transform duration-300 ${
              open ? "rotate-45 text-cream" : "text-stone"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 12 12"
          >
            <path d="M6 1v10M1 6h10" />
          </svg>
        </span>
      </button>

      <div
        ref={bodyRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: open ? "600px" : "0px" }}
      >
        <p className="text-stone font-light leading-loose pr-10">{a}</p>
        {list && (
          <ul className="mt-3 mb-6 space-y-2 pr-10">
            {list.map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone font-light leading-loose">
                <span className="mt-2.5 shrink-0 w-1 h-1 rounded-full bg-sage" />
                {item}
              </li>
            ))}
          </ul>
        )}
        {!list && <div className="pb-6" />}
      </div>
    </div>
  );
}

export default function FaqsPage() {
  const heroRef = useReveal();
  const cat0Ref = useReveal();
  const cat1Ref = useReveal();
  const cat2Ref = useReveal();
  const cat3Ref = useReveal();
  const categoryRefs = [cat0Ref, cat1Ref, cat2Ref, cat3Ref];

  return (
    <>
      <Nav />

      <main className="bg-cream min-h-screen">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="pt-36 pb-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
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
                <span className="section-label">Questions & answers</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-charcoal">
                  Everything
                  <br />
                  you want to{" "}
                  <em className="text-sage not-italic">know.</em>
                </h1>
                <p className="text-stone font-light leading-loose text-lg max-w-md self-end pb-2">
                  These are the
                  questions we hear most. Answered honestly, so you can
                  arrive with clarity and ease.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ Categories ───────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl mx-auto space-y-20">
            {faqs.map((category, i) => (
              <div
                key={category.category}
                ref={categoryRefs[i]}
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: "opacity 0.8s ease, transform 0.8s ease",
                }}
              >
                <div className="flex items-center gap-4 mb-10">
                  <span className="font-mono text-xs text-stone/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-6 h-px bg-stone/30" />
                  <span className="section-label">{category.category}</span>
                </div>

                <div className="border-t border-stone/15">
                  {category.items.map((item) => (
                    <AccordionItem key={item.q} q={item.q} a={item.a} list={item.list} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Still have questions CTA ─────────────────────── */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-charcoal">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label text-stone mb-6 block">
              Still curious?
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-cream leading-snug mb-6">
              Every question is welcome here.
            </h2>
            <p className="text-stone font-light leading-loose mb-10 max-w-xl mx-auto">
              If something isn&apos;t answered above, we&apos;d love to hear
              from you. Reach out before you book! There are no silly
              questions.
            </p>
            <a href="/about/get-in-touch" className="btn-primary bg-cream text-charcoal hover:bg-cream-dark">
              Get in touch
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
