import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const VARIANTS = {
  primary: "bg-gold text-white hover:bg-gold-dark",
  secondary: "bg-forest text-white hover:bg-forest-dark",
  outline: "border-2 border-forest text-forest hover:bg-forest hover:text-white",
  ghost: "border-2 border-white text-white hover:bg-white hover:text-forest",
} as const;

type Variant = keyof typeof VARIANTS;

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-colors";

export function LinkButton({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: { href: string; variant?: Variant } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link href={href} className={`${BASE} ${VARIANTS[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: { variant?: Variant } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${BASE} ${VARIANTS[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
