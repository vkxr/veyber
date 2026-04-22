import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Business Consulting Services in Gujarat | Business Growth Experts Vadodara – Veyber',
  description: 'Looking for business consulting services in Vadodara or Gujarat? Veyber offers strategy, growth consulting, market research & digital business solutions.',
  keywords: 'Business consulting services Gujarat, Business consultant Vadodara, Business growth consultant Gujarat, Startup consulting Vadodara, Business strategy consulting India, Digital business consulting services, SME consulting Gujarat, Business development services Vadodara',
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Business Consulting',
  provider: {
    '@type': 'Organization',
    name: 'Veyber',
    url: 'https://veyber.co.in',
  },
  areaServed: {
    '@type': 'State',
    name: 'Gujarat',
  },
  description: 'Business consulting services including strategy, growth planning, market research and digital consulting in Gujarat.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is business consulting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Business consulting helps companies improve performance by analyzing problems and implementing solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can a consultant help my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A consultant provides strategy, insights, and solutions to improve growth and efficiency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with startups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide startup consulting and growth strategies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is consulting suitable for small businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it is highly beneficial for SMEs looking to scale.',
      },
    },
  ],
};

const services = [
  {
    icon: 'route',
    title: 'Business Strategy Development',
    desc: 'We help you define a clear roadmap for success.',
    items: ['Business model planning', 'Growth strategy', 'Market positioning', 'Revenue planning'],
  },
  {
    icon: 'rocket_launch',
    title: 'Digital Growth Consulting',
    desc: 'Leverage digital channels to scale your business.',
    items: ['Online business strategy', 'Marketing funnel planning', 'Ecommerce growth consulting', 'Lead generation strategy'],
  },
  {
    icon: 'query_stats',
    title: 'Market Research & Competitor Analysis',
    desc: 'Understand your market before making decisions.',
    items: ['Industry analysis', 'Competitor benchmarking', 'Customer behavior insights', 'Pricing strategy'],
  },
  {
    icon: 'diamond',
    title: 'Branding & Positioning Strategy',
    desc: 'Stand out in a competitive market.',
    items: ['Brand identity guidance', 'Unique value proposition', 'Messaging strategy'],
  },
  {
    icon: 'settings_suggest',
    title: 'Operations & Process Optimization',
    desc: 'Improve efficiency and reduce costs.',
    items: ['Workflow optimization', 'Process improvement', 'Productivity strategies'],
  },
  {
    icon: 'emoji_objects',
    title: 'Startup Consulting',
    desc: 'Perfect for new businesses.',
    items: ['Business setup guidance', 'Go-to-market strategy', 'Scaling plan'],
  },
];

const process = [
  { n: '01', label: 'Business Analysis', desc: 'Understanding your current state, operations, and goals deeply.' },
  { n: '02', label: 'Problem Identification', desc: 'Pinpointing bottlenecks and areas hindering your scale.' },
  { n: '03', label: 'Strategy Development', desc: 'Crafting a roadmap and actionable solutions for sustainable growth.' },
  { n: '04', label: 'Implementation Guidance', desc: 'Helping you execute strategies correctly and efficiently.' },
  { n: '05', label: 'Monitoring & Optimization', desc: 'Tracking KPIs and refining strategies to ensure long-term success.' },
];

const results = [
  { icon: 'explore', stat: 'Clear', label: 'Business Direction' },
  { icon: 'psychology', stat: 'Improved', label: 'Decision-Making' },
  { icon: 'payments', stat: 'Increased', label: 'Revenue Opportunities' },
  { icon: 'bolt', stat: 'Better', label: 'Operational Efficiency' },
  { icon: 'trending_up', stat: 'Sustainable', label: 'Business Growth' },
];

const faqs = [
  {
    q: 'What is business consulting?',
    a: 'Business consulting helps companies improve performance by analyzing problems and implementing solutions.',
  },
  {
    q: 'How can a consultant help my business?',
    a: 'A consultant provides strategy, insights, and solutions to improve growth and efficiency.',
  },
  {
    q: 'Do you work with startups?',
    a: 'Yes, we provide startup consulting and growth strategies.',
  },
  {
    q: 'Is consulting suitable for small businesses?',
    a: 'Yes, it is highly beneficial for SMEs looking to scale.',
  },
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
              Business Consulting · Gujarat
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-5 leading-[1.05] text-white">
              Strategic Growth Solutions for<br/>
              <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{filter:'drop-shadow(0 0 28px rgba(174,198,255,0.3))'}}>Modern Businesses</span>
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-4 leading-relaxed">
              Looking to grow, scale, or streamline your business in <span className="text-primary font-semibold">Vadodara, Ahmedabad, Surat, or anywhere across Gujarat?</span>
            </p>
            <p className="text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto mb-8 leading-relaxed">
              At Veyber, we provide result-driven business consulting services designed to help startups, SMEs, and growing companies make smarter decisions, improve operations, and achieve sustainable growth. We don&apos;t just give advice — we build practical, actionable strategies that deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group relative px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-[#aec6ff] to-[#4f8eff] text-[#001a42] font-bold rounded-full text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_52px_rgba(174,198,255,0.38)] active:scale-95">
              <span className="relative z-10 flex items-center gap-2"><span className="material-symbols-outlined text-[20px]">call</span>Get Free Consultation</span>
              <div className="absolute inset-0 translate-x-[-100%] skew-x-12 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-[100%] transition-transform duration-700"/>
            </Link>
            <Link href="/services" className="px-7 sm:px-9 py-3.5 sm:py-4 text-white font-bold rounded-full text-base sm:text-lg border border-white/12 hover:border-primary/40 hover:bg-primary/[0.08] transition-all duration-300 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[20px]">grid_view</span>All Services
            </Link>
            </div>
          </div>
        </section>

        {/* Why Business Consulting is Essential */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">
                  Why Business Consulting is Important
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Many businesses struggle because they are too close to their own operations to see what needs fixing.
                </p>
                <p className="text-on-surface-variant leading-relaxed mb-5">
                  Common roadblocks to scaling include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: 'help', text: 'Lack of clear strategy' },
                    { icon: 'cancel', text: 'Poor marketing execution' },
                    { icon: 'warning', text: 'Inefficient operations' },
                    { icon: 'trending_down', text: 'Low scalability' },
                  ].map(({ icon, text }) => (
                    <div key={text} className="flex items-center gap-3 p-4 bg-surface-container rounded-xl border border-outline-variant/10 hover:border-primary/25 transition-all group">
                      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-primary text-[18px]">{icon}</span>
                      </div>
                      <span className="font-semibold text-sm text-white">{text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white font-semibold text-lg border-l-4 border-primary pl-4 py-2">
                  👉 With the right consulting, you can identify gaps, fix problems, and unlock growth opportunities.
                </p>
              </div>
              <div className="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[40px] rounded-full pointer-events-none"/>
                <h3 className="text-xl font-bold text-white mb-5">Who Needs Business Consulting?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    'Startups in Vadodara & Gujarat',
                    'Small & medium businesses',
                    'Ecommerce brands',
                    'Service-based companies',
                    'Entrepreneurs looking to scale',
                  ].map((ind) => (
                    <div key={ind} className="flex items-center gap-3 p-3 bg-surface-container-high rounded-xl">
                      <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                      <span className="text-sm font-medium text-white">{ind}</span>
                    </div>
                  ))}
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 pt-4">
                  We focus on real growth frameworks, turning theory into actionable business models.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Grid */}
        <section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Our Business Consulting Services</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base">Comprehensive advisory services designed across all core pillars of your business.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map(({ icon, title, desc, items }: { icon: string; title: string; desc: string; items: string[] }) => (
                <div key={title} className="group bg-surface-container p-6 sm:p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/25 hover:bg-surface-container-high transition-all duration-300 flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary text-[22px]">{icon}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4 flex-grow">{desc}</p>
                  <ul className="space-y-1.5 mb-4">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-on-surface-variant">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"/>
                        {item}
                      </li>
                    ))}
                  </ul>
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
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">Business Consulting Across Gujarat</h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">Expert guidance tailored to the local market mechanics of Gujarat.</p>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">We proudly serve</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {[
                      { name: 'Vadodara (Primary Focus)', url: '/digital-marketing-vadodara' },
                      { name: 'Ahmedabad', url: '/digital-marketing-ahmedabad' },
                      { name: 'Surat', url: '/digital-marketing-surat' },
                      { name: 'Rajkot', url: '/digital-marketing-rajkot' },
                      { name: 'Anand', url: '/digital-marketing-anand' },
                      { name: 'Bharuch', url: '/digital-marketing-bharuch' },
                      { name: 'Entire Gujarat', url: '/service-locations' }
                    ].map(({ name, url }) => (
                      <Link key={name} href={url} className="flex items-center gap-1.5 px-3 py-2 bg-surface-container rounded-xl border border-outline-variant/10 text-xs font-semibold hover:border-primary/30 hover:text-primary transition-all">
                        <span className="material-symbols-outlined text-primary text-[14px]">location_on</span>
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">Why Choose Veyber?</h3>
                  <ul className="space-y-3">
                    {[
                      'Practical, result-oriented strategies',
                      'Deep understanding of local Gujarat market',
                      'Affordable consulting for startups & SMEs',
                      'Data-driven decision making',
                      'End-to-end business support',
                    ].map((text) => (
                      <li key={text} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">verified</span>
                        <span className="font-semibold text-white">{text}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-primary mt-4 font-semibold text-sm">We focus on real growth, not just theory.</p>
                </div>
              </div>

              {/* Internal Links for SEO SILO */}
              <div className="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[50px] rounded-full pointer-events-none"/>
                <h3 className="text-xl sm:text-2xl font-bold font-headline mb-6 relative z-10">Explore Implementation Services</h3>
                <p className="text-on-surface-variant text-sm mb-6">We don&apos;t just consult, we help execute. Combine strategy with our specialized digital services.</p>
                <div className="flex flex-col gap-3 relative z-10">
                  <Link href="/ecommerce-development" className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/10 hover:border-primary/30 transition-all font-semibold text-white text-sm group">
                    <span>Ecommerce Development</span>
                    <span className="material-symbols-outlined text-primary text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </Link>
                  <Link href="/account-management" className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/10 hover:border-primary/30 transition-all font-semibold text-white text-sm group">
                    <span>Account Management</span>
                    <span className="material-symbols-outlined text-primary text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </Link>
                  <Link href="/content-marketing" className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/10 hover:border-primary/30 transition-all font-semibold text-white text-sm group">
                    <span>Content Marketing</span>
                    <span className="material-symbols-outlined text-primary text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </Link>
                  <Link href="/contact-us" className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/10 hover:border-primary/30 transition-all font-semibold text-white text-sm group">
                    <span>Contact Page</span>
                    <span className="material-symbols-outlined text-primary text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Our Consulting Process</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto text-sm">A structured framework to identify bottlenecks and implement proven solutions.</p>
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
            <p className="text-on-surface-variant text-sm mb-10 max-w-lg mx-auto">A data-driven consulting approach transforms your business architecture.</p>
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
              <p className="text-on-surface-variant text-sm">Get answers about our business consulting operations.</p>
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
                Let&apos;s Build Your Business
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
                Ready to take your business to the next level?
              </h2>
              <p className="text-base sm:text-lg text-white/75 mb-8 max-w-xl mx-auto leading-relaxed drop-shadow">
                Contact Veyber today for expert business consulting services in Gujarat.
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
