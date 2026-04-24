import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SEO Services in Gujarat | SEO Company in Vadodara & Ahmedabad – Veyber',
  description: 'Veyber offers result-driven SEO services in Vadodara, Ahmedabad, Surat & across Gujarat. Get higher Google rankings, more organic traffic, and consistent leads with our on-page, technical & local SEO strategies.',
  keywords: 'SEO services in Vadodara, SEO company in Gujarat, SEO agency in Ahmedabad, local SEO services Gujarat, SEO services for small business Gujarat',
  openGraph: {
    title: 'SEO Services in Gujarat | SEO Company in Vadodara & Ahmedabad – Veyber',
    description: 'Veyber offers result-driven SEO services in Vadodara, Ahmedabad, Surat & across Gujarat. Get higher Google rankings, more organic traffic, and consistent leads with our on-page, technical & local SEO strategies.',
    url: 'https://veyber.co.in/seo',
    type: 'website',
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "SEO Services",
  "provider": {
    "@type": "Organization",
    "name": "Veyber",
    "url": "https://veyber.co.in"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Gujarat, India"
  },
  "description": "Professional search engine optimization services in Gujarat including on-page SEO, technical SEO, local SEO, and link building for businesses in Vadodara, Ahmedabad, Surat, and across Gujarat."
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
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/25 bg-primary/[0.08] text-primary font-bold text-xs tracking-widest uppercase mb-6">SEO Services in Gujarat</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold tracking-tight text-white mb-6 leading-tight">
              Get your business to the top of Google — and stay there.
            </h1>
            <p className="text-lg sm:text-xl text-on-surface-variant font-body leading-relaxed max-w-2xl mx-auto">
              When someone in Vadodara, Ahmedabad, or Surat searches for a product or service you sell, your website needs to show up before your competitor's does. We build SEO strategies that are built around how your actual customers search.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 sm:px-8 max-w-5xl mx-auto space-y-16">
          
      <div className="bg-surface-container rounded-3xl p-8 sm:p-12 border border-outline-variant/10">
        <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white mb-6">What is SEO and Why Does It Matter for Your Business?</h2>
        <p className="text-on-surface-variant leading-relaxed mb-4">SEO (Search Engine Optimization) is the process of improving your website so it ranks higher on Google for searches that are directly relevant to your business. Unlike paid ads that stop the moment your budget runs out, SEO builds long-term visibility that keeps working month after month.</p>
        <p className="text-on-surface-variant leading-relaxed">For businesses in Gujarat — whether you are a local retailer, an eCommerce brand, a manufacturer, or a service provider — ranking on the first page of Google means more website visits, more inquiries, and more sales without paying per click.</p>
      </div>
      <div>
        <h2 className="text-3xl font-headline font-bold text-white mb-8">Our SEO Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/5">
            <h3 className="text-lg font-bold text-white mb-2">Keyword Research & Strategy</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">We identify the exact terms your potential customers are typing into Google — including high-volume searches, local searches, and long-tail queries with strong buying intent.</p>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/5">
            <h3 className="text-lg font-bold text-white mb-2">On-Page SEO</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">We optimize every element on your website that Google reads — title tags, meta descriptions, header structure, URL format, image alt text, and internal linking.</p>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/5">
            <h3 className="text-lg font-bold text-white mb-2">Technical SEO</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">We audit and fix Core Web Vitals, page speed, mobile-friendliness, crawlability, indexation, structured data (Schema), and site architecture.</p>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/5">
            <h3 className="text-lg font-bold text-white mb-2">Local SEO</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">We optimize your Google Business Profile, build local citations, manage reviews, and create location-specific landing pages for Gujarat cities.</p>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/5">
            <h3 className="text-lg font-bold text-white mb-2">Off-Page SEO & Link Building</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">We build high-quality, relevant backlinks from industry directories, local platforms, and authority sites to strengthen your domain authority.</p>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/5">
            <h3 className="text-lg font-bold text-white mb-2">SEO Audits</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">We run a complete SEO audit covering technical health, content gaps, keyword performance, backlink profile, and competitor benchmarking.</p>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        <div className="bg-surface-container rounded-3xl p-8 border border-outline-variant/10">
          <h2 className="text-2xl font-headline font-bold text-white mb-6">Who Is SEO For?</h2>
          <ul className="space-y-3">
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> eCommerce stores looking to reduce dependence on paid ads</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Local businesses in Vadodara, Ahmedabad, Surat wanting walk-ins</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Manufacturers and B2B companies targeting buyers</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Startups building long-term organic traffic</li>
          </ul>
        </div>
        <div className="bg-surface-container rounded-3xl p-8 border border-outline-variant/10">
          <h2 className="text-2xl font-headline font-bold text-white mb-6">How Long Does It Take?</h2>
          <p className="text-on-surface-variant text-sm leading-relaxed">Most businesses see meaningful movement in 3 to 6 months, with strong results building from month 4 onwards. The timeline depends on your industry, website condition, and competition.</p>
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
