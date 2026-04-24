import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Meta Ads Services in Gujarat | Facebook & Instagram Advertising – Veyber',
  description: 'Veyber runs Facebook and Instagram ad campaigns for businesses in Vadodara, Ahmedabad, Surat & Gujarat. Lead generation, eCommerce sales, retargeting & brand awareness.',
  keywords: 'Meta Ads services Gujarat, Facebook ads agency Vadodara, Instagram ads management Ahmedabad, Facebook advertising company Gujarat',
  openGraph: {
    title: 'Meta Ads Services in Gujarat | Facebook & Instagram Advertising – Veyber',
    description: 'Veyber runs Facebook and Instagram ad campaigns for businesses in Vadodara, Ahmedabad, Surat & Gujarat. Lead generation, eCommerce sales, retargeting & brand awareness.',
    url: 'https://veyber.co.in/meta-ads',
    type: 'website',
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Meta Ads Management",
  "provider": {
    "@type": "Organization",
    "name": "Veyber",
    "url": "https://veyber.co.in"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Gujarat, India"
  },
  "description": "Facebook and Instagram advertising services in Gujarat including lead generation ads, conversion campaigns, retargeting."
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
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/25 bg-primary/[0.08] text-primary font-bold text-xs tracking-widest uppercase mb-6">Meta Ads Services in Gujarat</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold tracking-tight text-white mb-6 leading-tight">
              Reach the right people on Facebook and Instagram. Turn scrolls into sales.
            </h1>
            <p className="text-lg sm:text-xl text-on-surface-variant font-body leading-relaxed max-w-2xl mx-auto">
              Whether you want more inquiries, product sales, or brand awareness, Meta Ads deliver results at a fraction of the cost of traditional advertising. We manage campaigns across Vadodara, Ahmedabad, Surat, and all of Gujarat.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 sm:px-8 max-w-5xl mx-auto space-y-16">
          
      <div className="bg-surface-container rounded-3xl p-8 sm:p-12 border border-outline-variant/10">
        <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white mb-6">Types of Meta Ads We Run</h2>
        <div className="space-y-6">
          <div><h3 className="text-lg font-bold text-white mb-1">Lead Generation Ads</h3><p className="text-sm text-on-surface-variant">Collect customer names, phone numbers, and emails directly inside Facebook and Instagram — without the user needing to visit your website.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">Conversion Ads</h3><p className="text-sm text-on-surface-variant">Drive traffic to your website and optimize for actual purchases, form fills, or app installs. We install the Meta Pixel to track and scale.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">Catalog & Dynamic Product Ads</h3><p className="text-sm text-on-surface-variant">For eCommerce businesses, dynamic ads automatically show the right products to the right users based on their browsing behavior.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">Brand Awareness & Reach Campaigns</h3><p className="text-sm text-on-surface-variant">Get your brand in front of a large, targeted audience. Ideal for new businesses launching in Gujarat or seasonal promotions.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">Retargeting Campaigns</h3><p className="text-sm text-on-surface-variant">Re-engage people who visited your website or social pages. Retargeting is the highest-ROI campaign type in Meta Ads.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">Instagram Reels & Story Ads</h3><p className="text-sm text-on-surface-variant">Short-form vertical video ads inside Reels and Stories. We create ad briefs optimized for reach, engagement, and conversion.</p></div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        <div className="bg-surface-container rounded-3xl p-8 border border-outline-variant/10">
          <h2 className="text-2xl font-headline font-bold text-white mb-6">What We Handle</h2>
          <ul className="space-y-3">
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Meta Business Manager setup</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Facebook Pixel installation & tracking</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Audience research (custom, lookalike, interests)</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Ad creative strategy and copy direction</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> A/B testing of creatives & audiences</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Weekly performance monitoring</li>
          </ul>
        </div>
        <div className="bg-surface-container rounded-3xl p-8 border border-outline-variant/10">
          <h2 className="text-2xl font-headline font-bold text-white mb-6">Who Should Run Meta Ads?</h2>
          <ul className="space-y-3">
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Local businesses wanting to grow their customer base fast</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> eCommerce brands on Shopify looking to scale sales</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Real estate developers targeting buyers</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Service businesses needing WhatsApp/call leads</li>
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
