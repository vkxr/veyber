"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import VeyberLogo from './VeyberLogo';

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('veyber-theme');
    const dark = stored !== 'light';
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('veyber-theme', next ? 'dark' : 'light');
  };

  const getLinkClass = (path: string) =>
    pathname === path
      ? 'nav-link text-primary font-bold border-b-2 border-primary pb-1'
      : 'nav-link text-slate-300 font-medium hover:text-white transition-colors duration-200 pb-1 border-b-2 border-transparent';

  const getMobileLinkClass = (path: string) =>
    pathname === path
      ? 'text-primary font-bold text-lg'
      : 'text-white/80 font-medium text-lg hover:text-white transition-colors';

  const navLinks = [
    { label: 'Home',     href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About',    href: '/about' },
    { label: 'Contact',  href: '/contact' },
  ];

  const servicesDropdown = [
    { title: 'Ecommerce Development', href: '/ecommerce-development', icon: 'shopping_cart', desc: 'Shopify, WooCommerce & custom sites' },
    { title: 'Account Management', href: '/account-management', icon: 'storefront', desc: 'Amazon, Flipkart, Meesho handling' },
    { title: 'Social Media Handling', href: '/social-media-handling', icon: 'share', desc: 'Instagram & Facebook marketing' },
    { title: 'Content Marketing', href: '/content-marketing', icon: 'edit_note', desc: 'SEO blog writing & strategy' },
    { title: 'Business Consulting', href: '/business-consulting', icon: 'psychology', desc: 'Growth strategy & market research' },
  ];

  return (
    <>
      <nav className="site-nav fixed top-0 w-full z-50 bg-slate-900/60 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-[background-color,box-shadow] duration-300">
        <div className="flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 max-w-7xl mx-auto">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <VeyberLogo height={26} />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map(({ label, href }) => {
              if (label === 'Services') {
                return (
                  <div key={href} className="relative group">
                    <Link href={href} className={`flex items-center gap-1 ${getLinkClass(href)}`}>
                      {label}
                      <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:rotate-180">expand_more</span>
                    </Link>
                    
                    <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 w-[320px]">
                      <div className="bg-surface-container border border-outline-variant/20 rounded-2xl shadow-2xl overflow-hidden p-2 backdrop-blur-xl">
                        {servicesDropdown.map((service) => (
                          <Link key={service.href} href={service.href} className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-container-high transition-colors group/item">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary/20 transition-colors">
                              <span className="material-symbols-outlined text-primary text-[20px]">{service.icon}</span>
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-white mb-0.5 group-hover/item:text-primary transition-colors">{service.title}</h4>
                              <p className="text-xs text-on-surface-variant line-clamp-1">{service.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link key={href} className={getLinkClass(href)} href={href}>{label}</Link>
              );
            })}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Login Link */}
            <a
              href="https://workflow.veyber.co.in/index.php/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-slate-300 hover:text-white transition-colors px-1 sm:px-2"
            >
              Login
            </a>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-outline-variant/25 bg-surface-container/60 hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-all duration-200 active:scale-90"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '17px', fontVariationSettings: "'FILL' 1" }}>
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            {/* CTA — hidden on very small screens */}
            <Link
              href="/contact"
              className="hidden sm:inline-block bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm hover:shadow-[0_0_20px_rgba(174,198,255,0.4)] transition-all active:scale-95 whitespace-nowrap"
            >
              Get Consultation
            </Link>

            {/* Hamburger — visible on mobile only */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-xl border border-outline-variant/20 bg-surface-container/60 hover:bg-surface-container transition-all active:scale-90 shrink-0"
            >
              <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`}/>
              <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}/>
              <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`}/>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"/>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 md:hidden bg-[#0d0e21] border-l border-white/10 flex flex-col transition-transform duration-300 ease-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <VeyberLogo height={24} />
          <button
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>close</span>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-4 pt-6 flex-1 overflow-y-auto">
          {navLinks.map(({ label, href }) => {
            if (label === 'Services') {
              return (
                <div key={href} className="flex flex-col gap-1">
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-xl transition-all ${getMobileLinkClass(href)} ${pathname.startsWith('/services') || pathname === href ? 'bg-primary/10' : 'hover:bg-white/5'}`}
                  >
                    {label}
                  </Link>
                  <div className="flex flex-col gap-1 pl-4 mb-2 border-l-2 border-primary/20 ml-6">
                    {servicesDropdown.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setMobileOpen(false)}
                        className={`px-4 py-2 rounded-xl transition-all text-sm font-medium flex items-center gap-2 ${pathname === service.href ? 'text-primary bg-primary/10' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                      >
                        <span className="material-symbols-outlined text-[16px]">{service.icon}</span>
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl transition-all ${getMobileLinkClass(href)} ${pathname === href ? 'bg-primary/10' : 'hover:bg-white/5'}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTA */}
        <div className="px-4 pb-8">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-6 py-3.5 rounded-full font-bold text-sm hover:shadow-[0_0_20px_rgba(174,198,255,0.4)] transition-all active:scale-95"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
