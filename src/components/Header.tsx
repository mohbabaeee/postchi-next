"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "خانه",
  },
  {
    href: "/posts",
    label: "پست‌ها",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex flex-row px-7 py-4 justify-between border-b items-center text-xl">
      <nav>
        <ul className="flex gap-x-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={
                  pathname === link.href ? "text-zinc-900" : "text-zinc-400"
                }
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link href="/">
        <p className="text-white bg-gray-900 px-3 pb-2 rounded-full text-4xl font-semibold">
          پـ
        </p>
      </Link>
    </header>
  );
}
