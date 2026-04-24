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
          src="https://maps.google.com/maps?q=310,+Maa+Darshan+Flats,+near+Panchvati,+Ajwa+Road,+Vadodara+-+390019&z=15&output=embed"
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
    </div>
  );
}
