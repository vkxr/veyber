import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-[120px] pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">

        {/* ── Header ── */}
        <header className="pt-12 sm:pt-20 md:pt-28 mb-12 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/[0.08] text-primary font-bold text-xs tracking-widest uppercase mb-5">Let's Work Together</span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-5 max-w-[650px] mx-auto leading-tight">
            Get in Touch with Veyber
          </h1>
          <p className="text-on-surface-variant text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Whether you're looking to scale your digital presence or build something entirely new, our team is ready to transform your vision into reality.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">

          {/* ── Contact Form ── */}
          <section className="lg:col-span-7 bg-surface-container-low rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none"/>
            <form className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-primary/70 block px-1">Name</label>
                  <input className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="John Doe" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-primary/70 block px-1">Email</label>
                  <input className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="john@example.com" type="email"/>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-primary/70 block px-1">Phone</label>
                  <input className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="+91 98765 43210" type="tel"/>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-primary/70 block px-1">Service Interested</label>
                  <select className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none">
                    <option>eCommerce Development</option>
                    <option>Account Management</option>
                    <option>Social Media Handling</option>
                    <option>Content Marketing</option>
                    <option>Business Consulting</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-widest uppercase text-primary/70 block px-1">Message</label>
                <textarea className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none" placeholder="Tell us about your project..." rows={4}/>
              </div>
              <button className="w-full py-5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-bold text-base tracking-wide hover:shadow-[0_10px_30px_rgba(79,142,255,0.4)] transition-all active:scale-95" type="submit">
                Get Free Consultation
              </button>
            </form>
          </section>

          {/* ── Contact Info + Map ── */}
          <section className="lg:col-span-5 space-y-4 sm:space-y-8">

            {/* Contact cards */}
            <div className="space-y-4">

              {/* Email */}
              <div className="flex items-center gap-5 p-5 bg-surface-container-low rounded-2xl border border-outline-variant/10 group hover:border-primary/25 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-0.5">Email Us</p>
                  <a href="mailto:hello@veyber.in" className="text-sm font-medium text-on-surface hover:text-primary transition-colors">hello@veyber.in</a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5 p-5 bg-surface-container-low rounded-2xl border border-outline-variant/10 group hover:border-primary/25 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-0.5">Call Us</p>
                  <a href="tel:+919876543210" className="text-sm font-medium text-on-surface hover:text-primary transition-colors">+91 98765 43210</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-5 p-5 bg-surface-container-low rounded-2xl border border-outline-variant/10 group hover:border-primary/25 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-0.5">Visit Us</p>
                  <p className="text-sm font-medium text-on-surface leading-snug">Vadodara, Gujarat, India</p>
                </div>
              </div>

            </div>

            {/* ── Real Vadodara Map (Google Maps embed) ── */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/10 relative" style={{height:'240px'}}>
              <iframe
                title="Veyber location — Vadodara, Gujarat"
                src="https://maps.google.com/maps?q=Vadodara,Gujarat,India&z=13&output=embed"
                width="100%"
                height="100%"
                style={{border:0, filter:'saturate(0.85) brightness(0.92)'}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Branded pin overlay */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-[0_0_24px_rgba(79,142,255,0.7)] animate-pulse">
                  <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/>
                    <circle cx="12" cy="10" r="3" fill="#001a42"/>
                  </svg>
                </div>
              </div>
              {/* Bottom label */}
              <div className="pointer-events-none absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black/40 to-transparent flex items-end px-4 pb-3">
                <span className="text-white text-xs font-semibold drop-shadow">📍 Vadodara, Gujarat, India</span>
              </div>
            </div>

          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
