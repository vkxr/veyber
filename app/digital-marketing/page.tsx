import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Gujarat | Veyber',
  description: 'Comprehensive digital marketing services including SEO, Google Ads, and Meta Ads for businesses in Vadodara, Ahmedabad, Surat, and across Gujarat.',
  keywords: 'digital marketing services Gujarat, digital marketing agency Vadodara, SEO Google Ads Meta Ads Gujarat',
  openGraph: {
    title: 'Digital Marketing Services in Gujarat | Veyber',
    description: 'Comprehensive digital marketing services including SEO, Google Ads, and Meta Ads for businesses in Vadodara, Ahmedabad, Surat, and across Gujarat.',
    url: 'https://veyber.co.in/digital-marketing',
    type: 'website',
  }
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="pt-[120px] pb-24">
        {/* Hero */}
        <section className="px-4 sm:px-8 pt-12 sm:pt-20 md:pt-28 mb-16 max-w-7xl mx-auto text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"/>
          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/25 bg-primary/[0.08] text-primary font-bold text-xs tracking-widest uppercase mb-6">Core Digital Marketing</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold tracking-tight text-white mb-6 leading-tight">
              Get found, get clicks, get customers.
            </h1>
            <p className="text-lg sm:text-xl text-on-surface-variant font-body leading-relaxed max-w-2xl mx-auto">
              Data-driven marketing that delivers measurable ROI. We specialize in search engine optimization and targeted advertising campaigns to grow your business.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 sm:px-8 max-w-5xl mx-auto space-y-16">
          
      <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
        <div className="bg-surface-container rounded-3xl p-8 border border-outline-variant/10 hover:-translate-y-1 transition-transform">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary text-[24px]">search</span>
          </div>
          <h2 className="text-2xl font-headline font-bold text-white mb-4">SEO</h2>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Rank higher on Google and drive consistent, organic traffic to your website through on-page, technical, and local SEO.</p>
          <Link href="/seo" className="text-primary font-bold text-sm inline-flex items-center group">
            Explore SEO Services <span className="material-symbols-outlined ml-1 text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
          </Link>
        </div>
        <div className="bg-surface-container rounded-3xl p-8 border border-outline-variant/10 hover:-translate-y-1 transition-transform">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary text-[24px]">ads_click</span>
          </div>
          <h2 className="text-2xl font-headline font-bold text-white mb-4">Google Ads</h2>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Show up instantly when customers are searching. High-ROI Search, Display, and Shopping campaigns managed by experts.</p>
          <Link href="/google-ads" className="text-primary font-bold text-sm inline-flex items-center group">
            Explore Google Ads <span className="material-symbols-outlined ml-1 text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
          </Link>
        </div>
        <div className="bg-surface-container rounded-3xl p-8 border border-outline-variant/10 hover:-translate-y-1 transition-transform">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary text-[24px]">thumb_up</span>
          </div>
          <h2 className="text-2xl font-headline font-bold text-white mb-4">Meta Ads</h2>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Reach the right audience on Facebook and Instagram. Lead generation, retargeting, and brand awareness campaigns.</p>
          <Link href="/meta-ads" className="text-primary font-bold text-sm inline-flex items-center group">
            Explore Meta Ads <span className="material-symbols-outlined ml-1 text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
          </Link>
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
