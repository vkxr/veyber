import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Website Development Company in Gujarat | Web Design in Vadodara & Ahmedabad – Veyber',
  description: 'Veyber builds fast, professional, and SEO-ready websites for businesses in Vadodara, Ahmedabad, Surat & Gujarat. Business websites, landing pages, and custom web applications.',
  keywords: 'website development company in Vadodara, web design company Gujarat, website design Ahmedabad, professional website development Gujarat',
  openGraph: {
    title: 'Website Development Company in Gujarat | Web Design in Vadodara & Ahmedabad – Veyber',
    description: 'Veyber builds fast, professional, and SEO-ready websites for businesses in Vadodara, Ahmedabad, Surat & Gujarat. Business websites, landing pages, and custom web applications.',
    url: 'https://veyber.co.in/web-services/development',
    type: 'website',
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Website Development",
  "provider": {
    "@type": "Organization",
    "name": "Veyber",
    "url": "https://veyber.co.in"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Gujarat, India"
  },
  "description": "Business website design and development services in Gujarat including landing pages, portfolio sites, and custom web applications."
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
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/25 bg-primary/[0.08] text-primary font-bold text-xs tracking-widest uppercase mb-6">Website Development Services in Gujarat</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold tracking-tight text-white mb-6 leading-tight">
              Your website is the first thing your customer judges you by. Make it count.
            </h1>
            <p className="text-lg sm:text-xl text-on-surface-variant font-body leading-relaxed max-w-2xl mx-auto">
              A slow, outdated, or poorly designed website loses you business every day. At Veyber, we build fast, professional, and SEO-ready websites for businesses across Vadodara, Ahmedabad, Surat, and Gujarat.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 sm:px-8 max-w-5xl mx-auto space-y-16">
          
      <div className="bg-surface-container rounded-3xl p-8 sm:p-12 border border-outline-variant/10">
        <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white mb-6">Types of Websites We Build</h2>
        <div className="space-y-6">
          <div><h3 className="text-lg font-bold text-white mb-1">Business Websites</h3><p className="text-sm text-on-surface-variant">A clean, professional website that represents your business, explains what you do, builds trust, and drives inquiries. Every site we build is mobile-first, fast-loading, and optimized for Google.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">Landing Pages</h3><p className="text-sm text-on-surface-variant">Single-page websites built for a specific goal — generating leads for your Google Ads or Meta Ads campaigns. We design landing pages with clear calls to action and built-in conversion tracking.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">Portfolio & Personal Websites</h3><p className="text-sm text-on-surface-variant">For freelancers, consultants, artists, and professionals who need a strong personal online presence. We build portfolio websites that showcase your work.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">Custom Web Applications</h3><p className="text-sm text-on-surface-variant">Beyond standard websites — if your business needs a custom dashboard, booking system, CRM integration, or any web-based tool, we build it using modern tech stacks like MERN.</p></div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        <div className="bg-surface-container rounded-3xl p-8 border border-outline-variant/10">
          <h2 className="text-2xl font-headline font-bold text-white mb-6">What Every Website Includes</h2>
          <ul className="space-y-3">
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Mobile-responsive design</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Fast load speed & optimized images</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> SEO-ready structure (Meta tags, sitemap)</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> SSL certificate & security setup</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Contact forms & WhatsApp integration</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Google Analytics setup</li>
          </ul>
        </div>
        <div className="bg-surface-container rounded-3xl p-8 border border-outline-variant/10">
          <h2 className="text-2xl font-headline font-bold text-white mb-6">Who Is This For?</h2>
          <ul className="space-y-3">
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Startups that need a professional presence quickly</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Local businesses with no website or an outdated one</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Manufacturers wanting to appear on Google</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Service businesses needing an inquiry-generating site</li>
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
