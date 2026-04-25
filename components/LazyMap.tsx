"use client";

import { useState, useEffect, useRef } from 'react';

export default function LazyMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShow(true); obs.disconnect(); } },
      { rootMargin: '200px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/10 relative" style={{height:'240px'}}>
      {show ? (
        <iframe
          title="Veyber location — Vadodara, Gujarat"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.288131823084!2d73.23085737518437!3d22.30494024272751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf720bfa9e3f%3A0x6a19fd666f82fc50!2sVeyber%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1777100125013!5m2!1sen!2sin" 
          width="100%"
          height="100%"
          style={{border:0, filter:'saturate(0.85) brightness(0.92)'}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="w-full h-full bg-surface-container-high flex items-center justify-center">
          <span className="text-on-surface-variant text-sm">Loading map…</span>
        </div>
      )}
      {/* Branded pin overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-[0_0_24px_rgba(79,142,255,0.7)]">
          <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/>
            <circle cx="12" cy="10" r="3" fill="#001a42"/>
          </svg>
        </div>
      </div>
      {/* Bottom label */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent flex items-end px-4 pt-8 pb-3">
        <span className="text-white text-xs font-semibold drop-shadow leading-tight">📍 310, Maa Darshan Flats, near Panchvati,<br/>Ajwa Road, Vadodara - 390019</span>
      </div>
      {/* ════════════════════════ FLOATING WHATSAPP ════════════════════════ */}
      <a
        href="https://wa.me/916355183655?text=Hi%20Veyber%2C%20I%27m%20interested%20in%20your%20digital%20services.%20Can%20we%20discuss%3F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-10 right-5 sm:bottom-12 sm:right-7 z-50 group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <span
          className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-active:scale-95"
          style={{ background: "#25D366", boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}
        >
          <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 sm:w-10 sm:h-10">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </span>
      </a>
    </div>

    
  );
}
