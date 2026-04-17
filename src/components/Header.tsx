"use client";

import { useState, useEffect } from "react";
import { navItems } from "@/data/navItems";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dark/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="w-full px-12 md:px-16 lg:px-20 flex items-center justify-between h-[80px]">
        {/* Logo */}
        <a href="#hero" className="font-heading text-2xl text-white tracking-wider">
          STALY<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-text-2 text-sm font-medium uppercase tracking-[2px] px-4 py-2 hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden relative w-7 h-5 flex flex-col justify-between z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴"
        >
          <span className={`block w-full h-[2px] bg-white transition-all origin-left ${menuOpen ? "rotate-45" : ""}`} />
          <span className={`block w-full h-[2px] bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-full h-[2px] bg-white transition-all origin-left ${menuOpen ? "-rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-dark-2/98 z-40 flex items-center justify-center transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl font-light uppercase tracking-[4px] hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
