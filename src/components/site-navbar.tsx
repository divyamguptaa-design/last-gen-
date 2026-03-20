"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from "@/components/icons";
import { Container, PrimaryButton } from "@/components/ui";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export function SiteNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-white shadow-[0_10px_30px_rgba(17,17,17,0.04)]">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center" aria-label="Gen-5 home">
          <Image
            src="/gen-5-logo-cropped.png"
            alt="Gen-5 Wires and Cables logo"
            width={220}
            height={100}
            priority
            className="h-auto w-[150px] sm:w-[180px] lg:w-[220px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-brand-charcoal transition hover:text-brand-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <PrimaryButton href="/contact">Get Quote</PrimaryButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-brand-charcoal lg:hidden"
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      </Container>

      {open ? (
        <div className="border-t border-black/6 bg-white lg:hidden">
          <Container className="flex flex-col gap-4 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-brand-charcoal"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <PrimaryButton href="/contact">Contact Now</PrimaryButton>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
