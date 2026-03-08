import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream border-t border-stone/10 px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-24">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-sm tracking-ultra-wide uppercase font-light text-charcoal hover:text-sage transition-colors duration-300"
            >
              Wavekind
            </Link>
            <p className="mt-4 text-stone text-sm font-light leading-relaxed max-w-xs">
              Breathwork and conscious living practices rooted in the body&apos;s
              innate wisdom.
            </p>
            <div className="mt-6 flex gap-4">
              {["Instagram", "Spotify", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs tracking-widest uppercase text-stone/60 hover:text-charcoal transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-5">Navigate</p>
            <ul className="space-y-3">
              {[
                { label: "Offerings", href: "#offerings" },
                { label: "About", href: "#about" },
                { label: "Journal", href: "#journal" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone font-light hover:text-charcoal transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-5">Connect</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@wavekind.com"
                  className="text-sm text-stone font-light hover:text-charcoal transition-colors duration-300"
                >
                  hello@wavekind.com
                </a>
              </li>
              <li className="text-sm text-stone/50 font-light">Toronto, Canada</li>
              <li className="text-sm text-stone/50 font-light">& Online, Worldwide</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-stone/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-mono text-xs text-stone/40">
            © {currentYear} Wavekind. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms"].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-mono text-xs text-stone/40 hover:text-stone/70 transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
