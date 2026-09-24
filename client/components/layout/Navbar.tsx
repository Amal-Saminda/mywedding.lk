"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, MessageCircle, Bell, Menu, X } from "lucide-react";
import { PROFESSION_GROUPS } from "@/shared/constants/professions";

type NavbarProps = {
  unreadNotifications?: number;
};

const NAV_LINKS = [
  { label: "Contact Us", href: "/contact" },
  { label: "About", href: "/about" },
];

export default function Navbar({ unreadNotifications = 0 }: NavbarProps) {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCategoryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-rose-100 bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpeg"
            alt="MyWedding.Lk"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="font-display text-xl font-semibold tracking-tight text-plum">
            MyWedding<span className="text-rose-500">.Lk</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setCategoryOpen((v) => !v)}
              aria-expanded={categoryOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 text-sm font-medium text-ink-soft transition-colors hover:text-rose-600"
            >
              Category
              <ChevronDown
                size={16}
                className={`transition-transform ${categoryOpen ? "rotate-180" : ""}`}
              />
            </button>

            {categoryOpen && (
              <div className="absolute left-1/2 top-full mt-3 w-[560px] -translate-x-1/2 rounded-card border border-rose-100 bg-surface p-6 shadow-lift bg-white">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-rose-500"> 
                  Search by profession
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                  {PROFESSION_GROUPS.map((group) => (
                    <div key={group.label}>
                      <p className="mb-2 text-sm font-semibold text-plum">{group.label}</p>
                      <ul className="space-y-1.5">
                        {group.items.map((item) => (
                          <li key={item}>
                            <Link
                              href={`/search?profession=${encodeURIComponent(item)}`}
                              className="text-sm text-ink-soft transition-colors hover:text-rose-600"
                              onClick={() => setCategoryOpen(false)}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-rose-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Messages"
            className="hidden h-10 w-10 items-center justify-center rounded-full bg-blush text-rose-600 transition-colors hover:bg-rose-100 sm:flex"
          >
            <MessageCircle size={18} />
          </button>
          <button
            aria-label={`Notifications${unreadNotifications ? `, ${unreadNotifications} unread` : ""}`}
            className="relative hidden h-10 w-10 items-center justify-center rounded-full bg-plum text-black transition-colors hover:bg-plum-light sm:flex"
          >
            <Bell size={18} />
            {unreadNotifications > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-plum ring-2 ring-surface">
                {unreadNotifications > 9 ? "9+" : unreadNotifications}
              </span>
            )}
          </button>
          <Link
            href="/login"
            className="hidden text-sm font-medium text-ink-soft transition-colors hover:text-rose-600 sm:inline-block"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="hidden rounded-pill bg-rose-plum px-5 py-2 text-sm font-semibold text-black shadow-card transition-opacity hover:opacity-90 sm:inline-block"
          >
            Create Account
          </Link>
          <button
            aria-label="Open menu"
            className="text-plum md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-rose-100 bg-surface px-4 py-4 md:hidden">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-rose-500">
            Search by profession
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            {PROFESSION_GROUPS.flatMap((g) => g.items).map((item) => (
              <Link
                key={item}
                href={`/search?profession=${encodeURIComponent(item)}`}
                className="rounded-pill bg-blush px-3 py-1 text-xs font-medium text-rose-600"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 border-t border-rose-100 pt-4">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-ink-soft">
                {link.label}
              </Link>
            ))}
            <Link href="/login" className="text-sm font-medium text-ink-soft">
              Login
            </Link>
            <Link
              href="/register"
              className="mt-1 rounded-pill bg-rose-plum px-5 py-2 text-center text-sm font-semibold text-white"
            >
              Create Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
