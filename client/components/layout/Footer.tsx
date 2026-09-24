"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail , Phone, MapPin, ArrowRight } from "lucide-react";

const QUICK_LINKS = [
  { label: "Search Profiles", href: "/search" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Membership Plans", href: "/plans" },
];

const MEMBER_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Safety Tips", href: "/safety" },
  { label: "Help Centre", href: "/help" },
];

const SOCIALS = [
  { icon: Mail, href: "https://facebook.com", label: "Facebook" },
  { icon: Mail, href: "https://instagram.com", label: "Instagram" },
  { icon: Mail, href: "https://twitter.com", label: "X" },
  { icon: Mail, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="bg-plum text-black">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:px-8">
          <div className="text-center lg:text-left">
            <p className="font-display text-xl font-semibold">New matches, every week</p>
            <p className="mt-1 text-sm text-black /70">
              Get hand-picked profiles delivered to your inbox — no spam, unsubscribe anytime.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-2">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-pill border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold"
            />
            <button
              type="submit"
              className="flex shrink-0 items-center gap-1.5 rounded-pill bg-gold px-4 py-2.5 text-sm font-semibold text-plum transition-opacity hover:opacity-90"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
          {subscribed && (
            <p className="text-xs text-gold-light lg:absolute" role="status">
              Subscribed — welcome aboard!
            </p>
          )}
        </div>
      </div>

      {/* Link columns */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/logo.jpeg" alt="" width={36} height={36} className="h-9 w-9" />
              <span className="font-display text-lg font-semibold">MyWedding.Lk</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-black/70">
              Helping Sri Lankan families find a trusted match, built on verified profiles
              and a respectful search.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-plum"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-black/60">
              Quick Links
            </p>
            <ul className="space-y-2 text-sm text-black/80">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-gold-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-black/60">
              For Members
            </p>
            <ul className="space-y-2 text-sm text-black/80">
              {MEMBER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-gold-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-black/60">
              Get in Touch
            </p>
            <ul className="space-y-3 text-sm text-black/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-light" />
                <span>142 Lotus Road, Colombo 01, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-gold-light" />
                <a href="tel:+94112345678" className="hover:text-gold-light">
                  +94 11 234 5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-gold-light" />
                <a href="mailto:hello@mywedding.lk" className="hover:text-gold-light">
                  hello@mywedding.lk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-black/50 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} MyWedding.Lk. All rights reserved.</p>
          <p>Made with care in Sri Lanka 🇱🇰</p>
        </div>
      </div>
    </footer>
  );
}
