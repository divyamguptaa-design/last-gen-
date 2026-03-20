import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-brand-red-dark"
    >
      {children}
      <ArrowRightIcon className="h-4 w-4" />
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-bold text-brand-charcoal shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-brand-red/35 hover:text-brand-red"
    >
      {children}
    </Link>
  );
}
