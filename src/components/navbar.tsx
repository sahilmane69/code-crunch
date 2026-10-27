"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#activities", label: "Opportunities" },
  { href: "#initiatives", label: "Initiatives" },
  { href: "#impact", label: "Impact" },
];

const whatsappUrl = "https://chat.whatsapp.com/IYPgE60zCrt3O7h5z0CPzN?mode=gi_t";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[90] px-6 sm:px-8">
      <div className="pointer-events-auto relative mx-auto max-w-[1120px]">
        <div className="flex h-[4.65rem] items-center rounded-b-[1.65rem] bg-black px-5 shadow-[0_12px_34px_rgba(0,0,0,0.22)] sm:px-7 lg:rounded-b-[2rem]">
          <Link href="#top" aria-label="Code Crunch home" className="flex h-10 items-center rounded-md bg-[#f5f3fa] px-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            <Image src="/images/code-crunch-horizontal-logo.png" alt="Code Crunch" width={2535} height={496} priority className="h-7 w-auto" />
          </Link>

          <nav aria-label="Primary navigation" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-5 sm:flex">
            <a href="https://www.linkedin.com/company/code-crunch-28/" target="_blank" rel="noreferrer" className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">LinkedIn</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center gap-3 rounded-xl bg-primary-bright px-4 text-sm font-medium text-[#100b18] transition-colors hover:bg-primary-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-soft">Join community <span aria-hidden="true">↗</span></a>
          </div>

          <button type="button" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((open) => !open)} className="ml-auto grid h-10 w-10 place-items-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:hidden">
            <span className="grid w-6 gap-1.5" aria-hidden="true"><span className={`h-px bg-current transition-transform ${isOpen ? "translate-y-[3.5px] rotate-45" : ""}`} /><span className={`h-px bg-current transition-transform ${isOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} /></span>
          </button>
        </div>

        <div id="mobile-navigation" className={`pointer-events-auto overflow-hidden rounded-b-[1.65rem] bg-black shadow-2xl transition-[max-height,opacity] duration-300 motion-reduce:transition-none lg:hidden ${isOpen ? "max-h-[28rem] opacity-100" : "pointer-events-none max-h-0 opacity-0"}`}>
          <nav aria-label="Mobile navigation" className="grid px-5 pb-5 pt-2">
            {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="border-t border-white/10 py-4 text-sm text-white/85 focus-visible:outline-2 focus-visible:outline-primary">{item.label}</Link>)}
            <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)} className="mt-3 rounded-xl bg-primary-bright px-4 py-3 text-center text-sm font-medium text-[#100b18] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-soft">Join community ↗</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
