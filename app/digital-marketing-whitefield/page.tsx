import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Whitefield Bangalore | SEO & Performance – Veyber',
  description: 'Looking for digital marketing services in Whitefield Bangalore? Veyber offers SEO, ecommerce, social media marketing & consulting services.',
  keywords: 'Digital marketing services Whitefield, SEO company Whitefield Bangalore, Marketing agency Whitefield, Ecommerce marketing Whitefield, Social media marketing Whitefield, IT marketing Bangalore, Business consultant Whitefield',
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Veyber',
  url: 'https://veyber.co.in',
  areaServed: {
    '@type': 'Place',
    name: 'Whitefield, Bangalore',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Whitefield',
    addressRegion: 'Karnataka',
    addressCountry: 'India',
  },
  description: 'Digital marketing services in Whitefield Bangalore including SEO, ecommerce, social media marketing and business consulting.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you provide services in Whitefield Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer complete digital marketing services in Whitefield and nearby areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with IT and corporate businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we specialize in IT companies, SaaS businesses, and corporate services.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide performance marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we focus on ROI-driven campaigns and lead generation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I get started?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can contact us through our website for consultation.',
      },
    },
  ],
};

const services = [
  {
    icon: 'shopping_cart',
    title: 'Ecommerce Development',
    desc: 'Build high-performance ecommerce platforms.',
    items: ['Shopify, WooCommerce & custom ecommerce', 'Fast, secure & scalable', 'Conversion-focused design'],
    href: '/ecommerce-development',
  },
  {
    icon: 'storefront',
    title: 'Ecommerce Account Management',
    desc: 'Maximize your marketplace growth.',
    items: ['Amazon, Flipkart & Meesho management', 'Product listing optimization', 'Revenue-driven strategies'],
    href: '/account-management',
  },
  {
    icon: 'share',
    title: 'Social Media Marketing',
    desc: 'Build a professional brand presence.',
    items: ['LinkedIn, Instagram & Facebook management', 'Content creation & campaigns', 'Paid advertising'],
    href: '/social-media-handling',
  },
  {
    icon: 'edit_note',
    title: 'Content Marketing',
    desc: 'Drive traffic and generate leads.',
    items: ['SEO blog writing', 'Website content', 'Strategic content planning'],
    href: '/content-marketing',
  },
  {
    icon: 'psychology',
    title: 'Business Consulting',
    desc: 'Scale your business with clarity.',
    items: ['Growth strategy', 'Market positioning', 'Conversion optimization'],
    href: '/business-consulting',
  },
];

const process = [
  { n: '01', label: 'Business Analysis', desc: 'Understanding your professional corporate niche.' },
  { n: '02', label: 'Market Research', desc: 'Analyzing the Whitefield IT & business ecosystem.' },
  { n: '03', label: 'Strategy Development', desc: 'Crafting tailored paths to premium enterprise leads.' },
  { n: '04', label: 'Execution', desc: 'Rolling out robust, technical SEO and performance ads.' },
  { n: '05', label: 'Optimization', desc: 'Evaluating deep analytics for aggressive scaling.' },
];

const results = [
  { icon: 'trending_up', stat: 'High-quality', label: 'Corporate Leads' },
  { icon: 'verified', stat: 'Increased', label: 'Brand Authority' },
  { icon: 'people', stat: 'Better', label: 'Engagement' },
  { icon: 'payments', stat: 'Higher', label: 'Conversions' },
  { icon: 'bolt', stat: 'Scalable', label: 'Growth' },
];

const faqs = [
  {
    q: 'Do you provide services in Whitefield Bangalore?',
    a: 'Yes, we offer complete digital marketing services in Whitefield and nearby areas.',
  },
  {
    q: 'Do you work with IT and corporate businesses?',
    a: 'Yes, we specialize in IT companies, SaaS businesses, and corporate services.',
  },
  {
    q: 'Do you provide performance marketing?',
    a: 'Yes, we focus on ROI-driven campaigns and lead generation.',
  },
  {
    q: 'How can I get started?',
    a: 'You can contact us through our website for consultation.',
  },
];

const locationSilo = [
  { city: 'Bangalore', href: '/digital-marketing-bangalore' },
  { city: 'Karnataka', href: '/digital-marketing-karnataka' },
  { city: 'Indiranagar', href: '/digital-marketing-indiranagar' },
  { city: 'Koramangala', href: '/digital-marketing-koramangala' },
  { city: 'HSR Layout', href: '/digital-marketing-hsr-layout' },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="pt-[120px]">

        {/* Hero */}
        <section className="relative px-4 sm:px-8 py-12 sm:py-20 md:py-28 overflow-hidden" style={{background:'radial-gradient(ellipse 110% 55% at 50% -5%, rgba(174,198,255,0.07) 0%, transparent 70%)'}}>
          <div className="pointer-events-none absolute inset-0 opacity-[0.022]" style={{backgroundImage:'linear-gradient(rgba(174,198,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(174,198,255,0.6) 1px,transparent 1px)',backgroundSize:'64px 64px'}}/>
          <div className="pointer-events-none absolute -top-[15%] -left-[10%] w-[600px] h-[600px] bg-primary/10 blur-[80px] rounded-full"/>
          <div className="pointer-events-none absolute -bottom-[15%] -right-[10%] w-[500px] h-[500px] bg-primary-container/10 blur-[70px] rounded-full"/>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/[0.08] text-primary font-bold text-xs tracking-widest uppercase mb-5">
              <span className="relative flex h-1.5 w-1.5 shrink-0"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"/><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"/></span>
              Performance-Driven Growth
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-5 leading-[1.05] text-white">
              Digital Marketing Services in<br/>
              <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{filter:'drop-shadow(0 0 28px rgba(174,198,255,0.3))'}}>Whitefield, Bangalore</span>
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-4 leading-relaxed">
              Looking for expert digital marketing services in <span className="text-primary font-semibold">Whitefield, Bangalore?</span>
            </p>
            <p className="text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto mb-8 leading-relaxed">
              At Veyber, we help IT companies, ecommerce brands, and service businesses in Whitefield grow with data-driven strategies, performance marketing, and scalable digital systems. We focus on ROI, lead generation, and long-term growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group relative px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-[#aec6ff] to-[#4f8eff] text-[#001a42] font-bold rounded-full text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_52px_rgba(174,198,255,0.38)] active:scale-95">
              <span className="relative z-10 flex items-center gap-2"><span className="material-symbols-outlined text-[20px]">rocket_launch</span>Scale Your Business</span>
              <div className="absolute inset-0 translate-x-[-100%] skew-x-12 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-[100%] transition-transform duration-700"/>
            </Link>
            </div>
          </div>
        </section>

        {/* Why Digital Marketing is Essential */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">
                  Why Businesses in Whitefield Need Digital Marketing
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Whitefield is Bangalore’s leading IT and corporate hub, providing premium market potential.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: 'domain', text: 'Tech parks & IT companies' },
                    { icon: 'cases', text: 'Corporate offices' },
                    { icon: 'monetization_on', text: 'High-income professionals' },
                    { icon: 'insights', text: 'Rapid business growth' },
                  ].map(({ icon, text }) => (
                    <div key={text} className="flex items-center gap-3 p-4 bg-surface-container rounded-xl border border-outline-variant/10 hover:border-primary/25 transition-all group">
                      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-primary text-[18px]">{icon}</span>
                      </div>
                      <span className="font-semibold text-sm text-white">{text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white font-semibold text-lg border-l-4 border-primary pl-4 py-2 border-outline-variant/10">
                  👉 This creates high competition + <span className="text-primary">premium opportunities</span>.
                </p>
              </div>
              <div className="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[50px] rounded-full pointer-events-none"/>
                <h3 className="text-xl font-bold text-white mb-5">To succeed, your business needs:</h3>
                <div className="space-y-4 mb-6">
                  {[
                    { icon: 'visibility', t: 'Strong online visibility' },
                    { icon: 'filter_alt', t: 'High-conversion funnels' },
                    { icon: 'monitoring', t: 'Performance-driven campaigns' },
                  ].map((ind) => (
                    <div key={ind.t} className="flex items-center gap-3 p-4 bg-surface-container-high rounded-xl">
                      <span className="material-symbols-outlined text-primary text-[20px]">{ind.icon}</span>
                      <span className="text-sm font-medium text-white">{ind.t}</span>
                    </div>
                   ))}
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 pt-4">
                  We deploy corporate-level digital execution specifically built for generating high-quality B2B and top-tier consumer interactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Digital Marketing Services */}
        <section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Our Services in Whitefield</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base">Robust, data-driven systems crafted for enterprise and premier brand scaling.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map(({ icon, title, desc, items, href }: { icon: string; title: string; desc: string; items: string[]; href: string; }) => (
                <div key={title} className="group bg-surface-container p-6 sm:p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/25 hover:bg-surface-container-high transition-all duration-300 flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary text-[22px]">{icon}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{desc}</p>
                  <ul className="space-y-1.5 mb-6 flex-grow">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-on-surface-variant">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"/>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group/link">
                    Explore Service <span className="material-symbols-outlined text-[16px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Advantage & Why Choose Us */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">Who We Work With in Whitefield</h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">We provide highly targeted digital growth engines to premier sectors and agile firms.</p>
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {['IT companies & SaaS businesses', 'Ecommerce brands', 'Corporate service providers', 'Startups & SMEs', 'High-growth businesses'].map((ind) => (
                      <span key={ind} className="flex items-center gap-1.5 px-3 py-2 bg-surface-container rounded-xl border border-outline-variant/10 text-xs font-semibold text-white/80">
                        <span className="material-symbols-outlined text-primary text-[14px]">corporate_fare</span>
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">Why Choose Veyber?</h3>
                  <ul className="space-y-3">
                    {[
                      'ROI-focused marketing',
                      'Corporate-level strategies',
                      'Scalable growth systems',
                      'Cost-effective vs large agencies',
                      'Results-driven execution',
                    ].map((text) => (
                      <li key={text} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">verified</span>
                        <span className="font-semibold text-white">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Internal Location SILO */}
              <div className="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[50px] rounded-full pointer-events-none"/>
                <h3 className="text-xl sm:text-2xl font-bold font-headline mb-4 relative z-10">Serving Whitefield & Nearby Areas</h3>
                <p className="text-on-surface-variant text-sm mb-6 relative z-10">We deploy comprehensive business solutions across the broader IT corridor.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                  {locationSilo.map((loc) => (
                    <Link key={loc.city} href={loc.href} className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/10 hover:border-primary/30 transition-all font-semibold text-white text-sm group">
                      <span>{loc.city}</span>
                      <span className="material-symbols-outlined text-primary text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </Link>
                  ))}
                  <div className="col-span-full mt-2 text-center text-primary text-xs font-semibold">
                    👉 And all nearby IT & commercial areas of Bangalore.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Our Process</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto text-sm">An engineered, corporate-standard process focused wholly on verifiable KPI improvements.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {process.map(({ n, label, desc }) => (
                <div key={n} className="relative bg-surface-container rounded-2xl border border-outline-variant/10 p-6 overflow-hidden group hover:border-primary/25 hover:bg-surface-container-high transition-all duration-200">
                  <div className="absolute top-3 right-3 text-5xl font-black text-outline-variant/15 font-headline leading-none pointer-events-none">{n}</div>
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                  </div>
                  <h3 className="font-bold text-white mb-2 pt-2 text-sm">{label}</h3>
                  <p className="text-on-surface-variant text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-3">Results You Can Expect</h2>
            <p className="text-on-surface-variant text-sm mb-10 max-w-lg mx-auto">Our marketing frameworks multiply enterprise scale aggressively.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {results.map(({ icon, stat, label }) => (
                <div key={label} className="flex-1 min-w-[140px] max-w-[200px] bg-surface-container rounded-2xl border border-outline-variant/10 p-5 sm:p-7 flex flex-col items-center gap-3 hover:border-primary/25 hover:bg-surface-container-high transition-all duration-200">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[22px]">{icon}</span>
                  </div>
                  <p className="text-xl font-black text-primary text-center leading-tight">{stat}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant text-center">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-3">Frequently Asked Questions</h2>
              <p className="text-on-surface-variant text-sm">Valuable insights regarding our Whitefield engagement.</p>
            </div>
            <div className="flex flex-col gap-4">
              {faqs.map((item, i) => (
                <details key={i} name="faq" className="group bg-surface-container rounded-2xl border border-outline-variant/10 overflow-hidden open:border-primary/20 transition-all duration-200">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none gap-4">
                    <h3 className="font-bold text-white text-sm sm:text-base">{item.q}</h3>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full border border-outline-variant/20 flex items-center justify-center text-on-surface-variant group-open:bg-primary/10 group-open:border-primary/30 group-open:text-primary transition-all duration-200">
                      <span className="material-symbols-outlined text-[18px] group-open:rotate-45 transition-transform duration-200">add</span>
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-on-surface-variant leading-relaxed text-sm">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-8 py-14 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5"/>
          <div className="force-dark max-w-4xl mx-auto text-center relative z-10 bg-neutral-900 rounded-[2rem] sm:rounded-[3rem] border border-white/15 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85"/>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent"/>
            <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/15 blur-[60px] rounded-full"/>
            <div className="relative z-10 p-8 sm:p-12 md:p-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-6">
                <span className="relative flex h-1.5 w-1.5 shrink-0"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"/><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"/></span>
                Let&apos;s Grow Your Business in Whitefield
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
                Ready to generate high-value leads and scale?
              </h2>
              <p className="text-base sm:text-lg text-white/75 mb-8 max-w-xl mx-auto leading-relaxed drop-shadow">
                Contact Veyber today for expert digital marketing services in Whitefield, Bangalore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-3.5 sm:py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black rounded-full text-base sm:text-lg shadow-2xl hover:shadow-primary/40 transition-all active:scale-95 group">
                  Get Started
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <a href="tel:+916355183655" className="inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-3.5 sm:py-5 text-white font-bold rounded-full border border-white/20 hover:border-primary/40 hover:bg-primary/10 transition-all active:scale-95">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                  +91 6355183655
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
