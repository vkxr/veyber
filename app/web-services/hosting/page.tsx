import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Website Hosting Services in Gujarat | Managed Hosting in Vadodara – Veyber',
  description: 'Veyber offers fast, secure, and managed website hosting for businesses in Vadodara, Ahmedabad, Surat & Gujarat. SSL, speed optimization, uptime monitoring, and domain management included.',
  keywords: 'website hosting services Vadodara, web hosting company Gujarat, managed hosting Ahmedabad, domain and hosting Gujarat',
  openGraph: {
    title: 'Website Hosting Services in Gujarat | Managed Hosting in Vadodara – Veyber',
    description: 'Veyber offers fast, secure, and managed website hosting for businesses in Vadodara, Ahmedabad, Surat & Gujarat. SSL, speed optimization, uptime monitoring, and domain management included.',
    url: 'https://veyber.co.in/web-services/hosting',
    type: 'website',
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Website Hosting",
  "provider": {
    "@type": "Organization",
    "name": "Veyber",
    "url": "https://veyber.co.in"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Gujarat, India"
  },
  "description": "Managed website hosting services in Gujarat including SSL setup, speed optimization, uptime monitoring."
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      
      <main className="pt-[120px] pb-24">
        {/* Hero */}
        <section className="px-4 sm:px-8 pt-12 sm:pt-20 md:pt-28 mb-16 max-w-7xl mx-auto text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"/>
          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/25 bg-primary/[0.08] text-primary font-bold text-xs tracking-widest uppercase mb-6">Website Hosting Services in Gujarat</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold tracking-tight text-white mb-6 leading-tight">
              Fast, reliable hosting that keeps your website online — always.
            </h1>
            <p className="text-lg sm:text-xl text-on-surface-variant font-body leading-relaxed max-w-2xl mx-auto">
              The best-designed website in the world fails if it is slow to load or goes down frequently. At Veyber, we offer managed website hosting for businesses in Vadodara, Ahmedabad, Surat, and across Gujarat.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 sm:px-8 max-w-5xl mx-auto space-y-16">
          
      <div className="bg-surface-container rounded-3xl p-8 sm:p-12 border border-outline-variant/10">
        <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white mb-6">What Our Hosting Service Includes</h2>
        <div className="space-y-6">
          <div><h3 className="text-lg font-bold text-white mb-1">Managed Web Hosting Setup</h3><p className="text-sm text-on-surface-variant">We handle the full setup — server selection, domain connection, nameserver configuration. You don't deal with technical configurations.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">SSL Certificate Installation</h3><p className="text-sm text-on-surface-variant">Every website gets an SSL certificate installed — so your site runs on HTTPS and meets Google's security requirements.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">Speed Optimization & Caching</h3><p className="text-sm text-on-surface-variant">We configure caching, image compression, CDN, and server-side settings to keep your site fast and Google-friendly.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">Uptime Monitoring</h3><p className="text-sm text-on-surface-variant">We monitor your website uptime so any downtime is detected and resolved quickly. We track it so you don't have to.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">Regular Backups</h3><p className="text-sm text-on-surface-variant">We set up automatic backups of your website files and database so your data is never at risk.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">Domain Registration & Renewal</h3><p className="text-sm text-on-surface-variant">We handle domain registration and renewals, subdomain setup, email hosting configuration, and DNS management.</p></div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        <div className="bg-surface-container rounded-3xl p-8 border border-outline-variant/10">
          <h2 className="text-2xl font-headline font-bold text-white mb-6">Why Choose Veyber?</h2>
          <ul className="space-y-3">
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Managed setup — no technical headaches</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Speed-optimized configuration</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> SSL included — no 'Not Secure' warnings</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Transparent pricing — no hidden charges</li>
          </ul>
        </div>
        <div className="bg-surface-container rounded-3xl p-8 border border-outline-variant/10">
          <h2 className="text-2xl font-headline font-bold text-white mb-6">Who Is This For?</h2>
          <ul className="space-y-3">
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Businesses launching a new website</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Businesses on bad hosting causing downtime</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> SMEs wanting managed hosting</li>
          </ul>
        </div>
      </div>
    
        </section>

        {/* CTA */}
        <section className="mt-16 px-4 sm:px-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-primary/20 to-primary-container/20 rounded-3xl p-8 sm:p-12 text-center border border-primary/20">
            <h2 className="text-2xl sm:text-4xl font-headline font-bold text-white mb-4">Ready to Grow Your Business?</h2>
            <p className="text-on-surface-variant mb-8 max-w-xl mx-auto">Contact us today to discuss how we can help your business succeed with expert digital solutions.</p>
            <Link href="/contact" className="inline-block bg-primary text-on-primary px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors">
              Get a Free Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
