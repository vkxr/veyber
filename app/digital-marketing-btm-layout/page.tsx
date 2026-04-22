import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in BTM Layout Bangalore | Affordable SEO – Veyber',
  description: 'Looking for digital marketing services in BTM Layout Bangalore? Veyber offers SEO, social media marketing, ecommerce & consulting services.',
  keywords: 'Digital marketing services BTM Layout, SEO company BTM Layout Bangalore, Marketing agency BTM Layout, Affordable digital marketing BTM Layout, Social media marketing BTM Layout, Local SEO Bangalore BTM Layout, Business consultant BTM Layout',
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Veyber',
  url: 'https://veyber.co.in',
  areaServed: {
    '@type': 'Place',
    name: 'BTM Layout, Bangalore',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'BTM Layout',
    addressRegion: 'Karnataka',
    addressCountry: 'India',
  },
  description: 'Digital marketing services in BTM Layout Bangalore including SEO, social media marketing, ecommerce development and business consulting.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you provide services in BTM Layout Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer complete digital marketing services in BTM Layout and nearby areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with students and startups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we specialize in startups, freelancers, and small businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer affordable marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide budget-friendly and ROI-focused solutions.',
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
    desc: 'Start selling online quickly.',
    items: ['Shopify, WooCommerce & custom websites', 'Budget-friendly solutions', 'Mobile-optimized design'],
    href: '/ecommerce-development',
  },
  {
    icon: 'storefront',
    title: 'Ecommerce Account Management',
    desc: 'Grow your online sales channels.',
    items: ['Amazon, Flipkart & Meesho management', 'Product listing optimization', 'Sales improvement strategy'],
    href: '/account-management',
  },
  {
    icon: 'share',
    title: 'Social Media Marketing',
    desc: 'Reach students and local customers.',
    items: ['Instagram & Facebook management', 'Content creation & reels strategy', 'Paid ads campaigns'],
    href: '/social-media-handling',
  },
  {
    icon: 'edit_note',
    title: 'Content Marketing',
    desc: 'Increase visibility and traffic.',
    items: ['SEO blog writing', 'Website content', 'Local keyword targeting'],
    href: '/content-marketing',
  },
  {
    icon: 'psychology',
    title: 'Business Consulting',
    desc: 'Improve growth and performance.',
    items: ['Business strategy', 'Local market planning', 'Lead generation systems'],
    href: '/business-consulting',
  },
];

const process = [
  { n: '01', label: 'Business Analysis', desc: 'Understanding your operational targets and scope.' },
  { n: '02', label: 'Market Research', desc: 'Analyzing the local BTM Layout audience deeply.' },
  { n: '03', label: 'Strategy Creation', desc: 'Building affordable and scalable marketing funnels.' },
  { n: '04', label: 'Execution', desc: 'Rolling out campaigns, websites, and SEO structuring.' },
  { n: '05', label: 'Optimization', desc: 'Tweaking data to boost conversions continuously.' },
];

const results = [
  { icon: 'trending_up', stat: 'Better', label: 'Google Rankings' },
  { icon: 'ads_click', stat: 'More', label: 'Local Inquiries' },
  { icon: 'payments', stat: 'Affordable', label: 'Quality Leads' },
  { icon: 'people', stat: 'Increased', label: 'Engagement' },
  { icon: 'bolt', stat: 'Steady', label: 'Business Growth' },
];

const faqs = [
  {
    q: 'Do you provide services in BTM Layout Bangalore?',
    a: 'Yes, we offer complete digital marketing services in BTM Layout and nearby areas.',
  },
  {
    q: 'Do you work with students and startups?',
    a: 'Yes, we specialize in startups, freelancers, and small businesses.',
  },
  {
    q: 'Do you offer affordable marketing?',
    a: 'Yes, we provide budget-friendly and ROI-focused solutions.',
  },
  {
    q: 'How can I get started?',
    a: 'You can contact us through our website for consultation.',
  },
];

const locationSilo = [
  { city: 'Bangalore', href: '/digital-marketing-bangalore' },
  { city: 'Karnataka', href: '/digital-marketing-karnataka' },
  { city: 'Koramangala', href: '/digital-marketing-koramangala' },
  { city: 'HSR Layout', href: '/digital-marketing-hsr-layout' },
  { city: 'Whitefield', href: '/digital-marketing-whitefield' },
  { city: 'Jayanagar', href: '/digital-marketing-jayanagar' },
  { city: 'J.P. Nagar', href: '/digital-marketing-jp-nagar' },
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
              Affordable Growth Marketing
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-5 leading-[1.05] text-white">
              Digital Marketing Services in<br/>
              <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{filter:'drop-shadow(0 0 28px rgba(174,198,255,0.3))'}}>BTM Layout, Bangalore</span>
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-4 leading-relaxed">
              Looking for result-driven digital marketing services in <span className="text-primary font-semibold">BTM Layout, Bangalore?</span>
            </p>
            <p className="text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto mb-8 leading-relaxed">
              At Veyber, we help startups, small businesses, and local service providers in BTM Layout grow with SEO, social media marketing, and performance-based digital strategies. We focus on affordable growth, lead generation, and measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group relative px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-[#aec6ff] to-[#4f8eff] text-[#001a42] font-bold rounded-full text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_52px_rgba(174,198,255,0.38)] active:scale-95">
              <span className="relative z-10 flex items-center gap-2"><span className="material-symbols-outlined text-[20px]">rocket_launch</span>Get More Leads</span>
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
                  Why Businesses in BTM Layout Need Digital Marketing
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  BTM Layout is one of Bangalore&apos;s busiest and most competitive areas, driven by youthful demographics.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: 'school', text: 'Student population & coaching' },
                    { icon: 'rocket', text: 'Startups & small businesses' },
                    { icon: 'storefront', text: 'Local shops & services' },
                    { icon: 'travel_explore', text: 'High online search activity' },
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
                  👉 This creates high demand + <span className="text-primary">high competition</span>.
                </p>
              </div>
              <div className="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[50px] rounded-full pointer-events-none"/>
                <h3 className="text-xl font-bold text-white mb-5">To succeed here, businesses need:</h3>
                <div className="space-y-4 mb-6">
                  {[
                    { icon: 'ads_click', t: 'Strong Google visibility' },
                    { icon: 'payments', t: 'Affordable lead generation' },
                    { icon: 'my_location', t: 'Local SEO ranking' },
                  ].map((ind) => (
                    <div key={ind.t} className="flex items-center gap-3 p-4 bg-surface-container-high rounded-xl">
                      <span className="material-symbols-outlined text-primary text-[20px]">{ind.icon}</span>
                      <span className="text-sm font-medium text-white">{ind.t}</span>
                    </div>
                   ))}
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 pt-4">
                  We supply precisely tuned strategies perfect for generating massive results across competitive commercial areas like BTM Layout.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Digital Marketing Services */}
        <section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Our Services in BTM Layout</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base">Comprehensive, end-to-end solutions delivering performance without breaking budgets.</p>
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
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">Who We Work With in BTM Layout</h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">We deploy powerful, youth-focused digital tactics to scale emerging companies in local tech hubs.</p>
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {['Coaching institutes & trainers', 'Students & freelancers', 'Small businesses & startups', 'Local shops & service providers', 'Budget ecommerce sellers'].map((ind) => (
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
                      'Budget-friendly marketing solutions',
                      'Strong local SEO expertise',
                      'High-volume lead generation',
                      'Startup-friendly approach',
                      'ROI-focused execution',
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
                <h3 className="text-xl sm:text-2xl font-bold font-headline mb-4 relative z-10">Serving BTM Layout & Nearby Areas</h3>
                <p className="text-on-surface-variant text-sm mb-6 relative z-10">We extensively service all startup sectors across the inner IT corridors.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                  {locationSilo.map((loc) => (
                    <Link key={loc.city} href={loc.href} className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/10 hover:border-primary/30 transition-all font-semibold text-white text-sm group">
                      <span>{loc.city}</span>
                      <span className="material-symbols-outlined text-primary text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </Link>
                  ))}
                  <div className="col-span-full mt-2 text-center text-primary text-xs font-semibold">
                    👉 And all major neighboring areas of Bangalore.
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
              <p className="text-on-surface-variant max-w-xl mx-auto text-sm">A seamless, results-driven scaling process engineered for maximum ROI.</p>
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
            <p className="text-on-surface-variant text-sm mb-10 max-w-lg mx-auto">We provide exceptional local market returns for budget-conscious campaigns.</p>
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
              <p className="text-on-surface-variant text-sm">Clear insights regarding our BTM Layout processes.</p>
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
                Let&apos;s Grow Your Business in BTM Layout
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
                Ready to get more leads and customers?
              </h2>
              <p className="text-base sm:text-lg text-white/75 mb-8 max-w-xl mx-auto leading-relaxed drop-shadow">
                Contact Veyber today for expert digital marketing services in BTM Layout, Bangalore.
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
