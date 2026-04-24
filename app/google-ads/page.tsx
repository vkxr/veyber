import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Google Ads Services in Gujarat | PPC Agency in Vadodara & Ahmedabad – Veyber',
  description: 'Veyber runs high-ROI Google Ads campaigns for businesses in Vadodara, Ahmedabad, Surat & Gujarat. Search, Display, Shopping & Remarketing ads managed by certified experts. Pay only for results.',
  keywords: 'Google Ads services in Vadodara, Google Ads agency in Gujarat, PPC services Ahmedabad, Google AdWords management Gujarat',
  openGraph: {
    title: 'Google Ads Services in Gujarat | PPC Agency in Vadodara & Ahmedabad – Veyber',
    description: 'Veyber runs high-ROI Google Ads campaigns for businesses in Vadodara, Ahmedabad, Surat & Gujarat. Search, Display, Shopping & Remarketing ads managed by certified experts. Pay only for results.',
    url: 'https://veyber.co.in/google-ads',
    type: 'website',
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Google Ads Management",
  "provider": {
    "@type": "Organization",
    "name": "Veyber",
    "url": "https://veyber.co.in"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Gujarat, India"
  },
  "description": "Google Ads PPC management services in Gujarat including Search Ads, Display Ads, Google Shopping, and Remarketing campaigns."
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
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/25 bg-primary/[0.08] text-primary font-bold text-xs tracking-widest uppercase mb-6">Google Ads Services in Gujarat</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold tracking-tight text-white mb-6 leading-tight">
              Show up exactly when your customers are searching. Pay only when they click.
            </h1>
            <p className="text-lg sm:text-xl text-on-surface-variant font-body leading-relaxed max-w-2xl mx-auto">
              Google Ads puts your business at the top of Google search results instantly. If you are a business in Gujarat and you need leads, sales, or inquiries right now, Google Ads is the fastest way to get there.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 sm:px-8 max-w-5xl mx-auto space-y-16">
          
      <div className="bg-surface-container rounded-3xl p-8 sm:p-12 border border-outline-variant/10">
        <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white mb-6">Types of Google Ads We Run</h2>
        <div className="space-y-6">
          <div><h3 className="text-lg font-bold text-white mb-1">Search Ads</h3><p className="text-sm text-on-surface-variant">Text-based ads that appear when someone searches for your exact product or service on Google. These target high-intent buyers actively searching for what you sell.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">Display Ads</h3><p className="text-sm text-on-surface-variant">Image and banner ads that appear across millions of websites. Ideal for brand awareness and retargeting past visitors.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">Google Shopping Ads</h3><p className="text-sm text-on-surface-variant">Product-based ads that show your item's image, name, price, and store directly in Google search results. Built for eCommerce businesses.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">Remarketing Campaigns</h3><p className="text-sm text-on-surface-variant">Re-engage people who visited your website but did not convert. Keep your brand in front of them until they are ready to buy.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">Performance Max Campaigns</h3><p className="text-sm text-on-surface-variant">Google's AI-driven campaign type that runs across Search, Display, YouTube, Gmail, and Maps simultaneously.</p></div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        <div className="bg-surface-container rounded-3xl p-8 border border-outline-variant/10">
          <h2 className="text-2xl font-headline font-bold text-white mb-6">What We Handle End to End</h2>
          <ul className="space-y-3">
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Keyword research and match-type strategy</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Campaign setup and account structure</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Ad copy writing and A/B testing</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Bid strategy and budget management</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Conversion tracking setup</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Weekly monitoring and optimization</li>
          </ul>
        </div>
        <div className="bg-surface-container rounded-3xl p-8 border border-outline-variant/10">
          <h2 className="text-2xl font-headline font-bold text-white mb-6">Who Should Run Google Ads?</h2>
          <ul className="space-y-3">
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Businesses that need leads or sales immediately</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> eCommerce brands running Shopify or WooCommerce</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Local service businesses in Gujarat</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Manufacturers targeting B2B buyers across India</li>
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
