"use client";

import { useState } from "react";

const footerNav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribing(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubscribed(true);
        setEmail("");
      }
    } catch {
      // silent fail
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <footer className="relative pt-20 pb-8 border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-dark-950 font-bold text-sm">
                S
              </div>
              <span className="text-lg font-semibold">
                Subject<span className="text-gold-400">spot</span>
              </span>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed max-w-xs">
              Cinematic storytelling for NGOs, nonprofits, and humanitarian
              organizations across Cameroon and beyond.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-300 mb-4">
              Navigation
            </h4>
            <div className="space-y-3">
              {footerNav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-dark-400 hover:text-gold-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter + Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-300 mb-4">
              Stay Updated
            </h4>
            {subscribed ? (
              <p className="text-sm text-gold-400">Thanks for subscribing! 🎬</p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2 mb-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email for occasional film drops"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-dark-500 focus:outline-none focus:border-gold-500/50"
                  required
                />
                <button
                  type="submit"
                  disabled={subscribing}
                  className="px-4 py-2.5 bg-gold-500 text-dark-950 rounded-lg text-sm font-semibold hover:bg-gold-400 transition-colors disabled:opacity-50"
                >
                  →
                </button>
              </form>
            )}

            <div className="space-y-2 text-sm text-dark-400">
              <a href="mailto:subjectspot@gmail.com" className="block hover:text-gold-400 transition-colors">
                subjectspot@gmail.com
              </a>
              <a
                href="https://wa.me/237673589999"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gold-400 transition-colors"
              >
                WhatsApp
              </a>
              <span className="block">Bamenda, Cameroon</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-500">
            © 2026 Subjectspot. Crafted in Cameroon.
          </p>
          <p className="text-sm text-dark-500 italic">
            Stories worth telling. Films worth funding.
          </p>
        </div>
      </div>
    </footer>
  );
}
