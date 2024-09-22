"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-10">
      <Link
        href="/"
        className={`font-roboto text-base tracking-widest hover:text-primary-green hover:italic transition-colors ${
          pathname === "/" ? "text-primary-green" : "text-text-light"
        }`}
      >
        Reel
      </Link>
      <Link
        href="/galery"
        className={`font-roboto text-base tracking-widest hover:text-primary-green hover:italic transition-colors ${
          pathname === "/galery" ? "text-primary-green" : "text-text-light"
        }`}
      >
        Galery
      </Link>
      <Link
        href="/contact"
        className={`font-roboto text-base tracking-widest hover:text-primary-green hover:italic transition-colors ${
          pathname === "/contact" ? "text-primary-green" : "text-text-light"
        }`}
      >
        Contact
      </Link>
    </nav>
  );
}
