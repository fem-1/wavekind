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

type FormState = "idle" | "sending" | "sent" | "error";

export default function GetInTouchPage() {
  const heroRef = useReveal();
  const formRef = useReveal();
  const infoRef = useReveal();

  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (res.ok) {
        setFormState("sent");
      } else {
        const data = await res.json();
        console.error(data.error);
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      <Nav />

      <main className="bg-cream min-h-screen">
        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="pt-36 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
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
              <span className="section-label">Get in touch</span>
            </div>

            <div className="max-w-2xl">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-charcoal mb-6">
                <em className="italic text-sage">Breathe</em>
                {" "} with me
              </h1>
              <p className="text-stone font-light leading-relaxed text-lg">
                Whether you&apos;re curious about breathwork, want to book a session,
                or simply have a question.
              </p>
            </div>
          </div>
        </section>

        {/* ── Divider ───────────────────────────────────────── */}
        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="w-full h-px bg-stone/15" />
        </div>

        {/* ── Form + Info ───────────────────────────────────── */}
        <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-24">

            {/* Form */}
            <div
              ref={formRef}
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
              }}
            >
              {formState === "sent" ? (
                <div className="flex flex-col gap-6 py-12">
                  <div className="w-8 h-px bg-sage" />
                  <h2 className="font-serif text-3xl font-light text-charcoal">
                    Thank you.
                  </h2>
                  <p className="text-stone font-light leading-relaxed max-w-sm">
                    Your message is on its way. We typically respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormState("idle");
                      setFields({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="self-start text-xs tracking-widest uppercase text-charcoal/60 hover:text-charcoal transition-colors duration-300 underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <Field
                      label="Name"
                      name="name"
                      type="text"
                      value={fields.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      value={fields.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <SelectField
                    label="What's this about?"
                    name="subject"
                    value={fields.subject}
                    onChange={handleChange}
                    required
                    options={[
                      "1:1 Breathwork Session",
                      "Group / Corporate Session",
                      "Retreat Enquiry",
                      "Collaboration",
                      "General Question",
                      "Something else",
                    ]}
                  />

                  <div className="flex flex-col gap-2">
                    <label className="section-label">Message</label>
                    <textarea
                      name="message"
                      value={fields.message}
                      onChange={handleChange}
                      required
                      rows={7}
                      placeholder="Tell us a little about yourself and what you're looking for…"
                      className="w-full bg-transparent border border-stone/25 px-5 py-4 text-sm font-light text-charcoal placeholder:text-stone/50 focus:outline-none focus:border-sage transition-colors duration-300 resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-6">
                    <button
                      type="submit"
                      disabled={formState === "sending"}
                      className="inline-flex items-center gap-3 bg-charcoal text-cream px-10 py-4 text-xs tracking-widest uppercase hover:bg-charcoal-soft transition-colors duration-300 disabled:opacity-50"
                    >
                      {formState === "sending" ? "Sending…" : "Send message"}
                      {formState !== "sending" && (
                        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M1 6H11M6 1L11 6L6 11"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </button>
                    {formState === "error" && (
                      <p className="text-xs font-mono text-red-500">
                        Something went wrong. Please try again.
                      </p>
                    )}
                    {formState !== "error" && (
                      <p className="text-xs font-mono text-stone/40">
                        Replies within 24 hrs
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div
              ref={infoRef}
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
              }}
              className="flex flex-col gap-12 lg:pt-2"
            >

              {/* Book a call */}
              <InfoBlock label="Free connection call">
                <p className="text-stone text-sm font-light leading-relaxed mb-4">
                  Not sure where to start? Book a free 30-minute call and we&apos;ll
                  figure out the right path for you together.
                </p>
                <a
                  href="https://calendly.com/wavekind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase text-charcoal/70 hover:text-sage transition-colors duration-300 underline underline-offset-4"
                >
                  Request a call
                </a>
              </InfoBlock>

              {/* Social */}
              <InfoBlock label="Follow along">
                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.instagram.com/wavekind_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-light text-charcoal/70 hover:text-charcoal transition-colors duration-300 group"
                  >
                    <span className="w-4 h-px bg-stone/30 group-hover:bg-sage group-hover:w-6 transition-all duration-300" />
                    Instagram
                  </a>
                  <a
                    href="https://www.youtube.com/@wavekind"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-light text-charcoal/70 hover:text-charcoal transition-colors duration-300 group"
                  >
                    <span className="w-4 h-px bg-stone/30 group-hover:bg-sage group-hover:w-6 transition-all duration-300" />
                    YouTube
                  </a>
                  <a
                    href="https://chat.whatsapp.com/FtK9rFu5RTU3BCZPsaRVRs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-light text-charcoal/70 hover:text-charcoal transition-colors duration-300 group"
                  >
                    <span className="w-4 h-px bg-stone/30 group-hover:bg-sage group-hover:w-6 transition-all duration-300" />
                    WhatsApp Community
                  </a>
                </div>
              </InfoBlock>

              {/* Response note */}
              <div className="border-t border-stone/15 pt-8">
                <p className="text-xs font-mono text-stone/40 leading-relaxed">
                  We read every message personally and aim to respond within one
                  business day.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ── Helpers ──────────────────────────────────────────────────── */

function Field({
  label,
  name,
  type,
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="section-label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-stone/25 pb-3 text-sm font-light text-charcoal placeholder:text-stone/40 focus:outline-none focus:border-sage transition-colors duration-300"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  required,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  options: string[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="section-label">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-transparent border-b border-stone/25 pb-3 text-sm font-light text-charcoal focus:outline-none focus:border-sage transition-colors duration-300 appearance-none cursor-pointer"
      >
        <option value="" disabled>
          Select a topic…
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function InfoBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-4 h-px bg-sage" />
        <span className="section-label">{label}</span>
      </div>
      {children}
    </div>
  );
}
