"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const [activePos, setActivePos] = useState({ left: 0, width: 0 });
  const [open, setOpen] = useState(false);

  const measureLink = useCallback((el: HTMLElement | null) => {
    if (!navRef.current || !el) return { left: 0, width: 0 };
    const navRect = navRef.current.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    return { left: rect.left - navRect.left, width: rect.width };
  }, []);

  const updateActive = useCallback(() => {
    if (!navRef.current) return;
    const activeLink = navRef.current.querySelector<HTMLAnchorElement>(
      `a[href="${pathname}"]`
    );
    const pos = measureLink(activeLink);
    setActivePos(pos);
    setIndicator(pos);
  }, [pathname, measureLink]);

  useEffect(() => {
    updateActive();
  }, [updateActive]);

  useEffect(() => {
    window.addEventListener("resize", updateActive);
    return () => window.removeEventListener("resize", updateActive);
  }, [updateActive]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const pos = measureLink(e.currentTarget);
    setIndicator(pos);
  };

  const handleMouseLeave = () => {
    setIndicator(activePos);
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/mentoring", label: "Mentoring" },
    { href: "/practice", label: "Practice" },
    { href: "/bootcamp", label: "Bootcamp" },
  ];

  return (
    <header className="sticky z-50 top-4 flex justify-between items-center md:w-5/6 w-11/12 h-16 px-2.5 rounded-full bg-white shadow-[0px_0px_40px_0px_rgba(0,_0,_0,_0.1)] text-[#21356e] hover:text-[#1f273d]">
      {/* LOGO */}
      <div className="h-1/2 min-w-[75px] ml-3 md:ml-6">
        <Link href="/">
          <img className="h-full" src="./images/logo.png" alt="Logo" />
        </Link>
      </div>
      {/* NAV */}
      <nav
        ref={navRef}
        onMouseLeave={handleMouseLeave}
        className="relative hidden md:flex-1 md:flex justify-center"
      >
        <ul className="flex gap-6 px-4 py-2">
          {links.map(({ href, label }) => {
            return (
              <Link
                key={href}
                href={href}
                onMouseEnter={handleMouseEnter}
                className="relative z-10 px-2 py-1 text-[#21356e] hover:text-[#1f273d] transition-colors"
              >
                {label}
              </Link>
            );
          })}
        </ul>
        <span
          className="absolute bottom-0 h-1 shadow bg-[#63b594]/90 rounded-full transition-all duration-300"
          style={{
            left: indicator.left,
            width: indicator.width,
          }}
        />
      </nav>
      <div className="relative w-full md:w-fit flex justify-center items-center">
        {/* MOBILE */}
        <button
          className="md:hidden p-2 text-[#21356e]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        {open && (
          <ul className="absolute left-1/2 -translate-x-1/2 w-full top-14 flex flex-col justify-center max-w-5/6 md:hidden bg-white shadow-lg rounded-xl">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 text-[#21356e] hover:bg-gray-100 ${
                    pathname === href ? "font-semibold" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* CART */}
      <button className="hover:cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-cart2"
          viewBox="0 0 16 16"
        >
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
        </svg>
      </button>
      <Link
        className="bg-[#1f273d] ml-4 md:ml-6 rounded-full px-6 py-3 text-white shadow-[0px_0px_40px_0px_rgba(0,_0,_0,_0.1)]"
        href={"/login"}
      >
        Login
      </Link>
    </header>
  );
}
