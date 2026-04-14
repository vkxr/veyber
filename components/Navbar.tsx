"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import VeyberLogo from './VeyberLogo';

export default function Navbar() {
  const pathname = usePathname();
  // Start dark (matches server render). useEffect syncs with localStorage.
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('veyber-theme');
    const dark = stored !== 'light';
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('veyber-theme', next ? 'dark' : 'light');
  };

  const getLinkClass = (path: string) => {
    if (pathname === path) {
      return "text-blue-400 font-bold border-b-2 border-blue-400 pb-1";
    }
    return "text-slate-300 font-medium hover:text-white transition-colors duration-300 pb-1 border-b-2 border-transparent";
  };

  return (
    <nav className="site-nav fixed top-0 w-full z-50 bg-slate-900/60 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex justify-between items-center px-8 py-4 max-w-full mx-auto transition-[background-color,box-shadow] duration-300">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center">
          <VeyberLogo height={28} />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Link className={`nav-link ${getLinkClass('/')}`} href="/">Home</Link>
        <Link className={`nav-link ${getLinkClass('/services')}`} href="/services">Services</Link>
        <Link className={`nav-link ${getLinkClass('/about')}`} href="/about">About</Link>
        <Link className={`nav-link ${getLinkClass('/contact')}`} href="/contact">Contact</Link>
      </div>

      <div className="flex items-center gap-3">
        {/* Theme toggle — single icon swaps on click */}
        <button
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="w-9 h-9 rounded-full border border-outline-variant/25 bg-surface-container/60 hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-all duration-200 active:scale-90"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}
          >
            {isDark ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        <Link
          href="/contact"
          className="inline-block bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-[0_0_20px_rgba(174,198,255,0.4)] transition-all active:scale-95"
        >
          Get Consultation
        </Link>
      </div>
    </nav>
  );
}
