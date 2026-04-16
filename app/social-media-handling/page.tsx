import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Social Media Marketing Services in Vadodara | SMM Agency Gujarat – Veyber',
  description: 'Looking for social media handling services in Vadodara? Veyber offers Instagram, Facebook marketing & ad management services across Gujarat to grow your business.',
  keywords: 'Social media handling services Vadodara, Social media marketing Vadodara, SMM agency Gujarat, Instagram marketing Vadodara, Facebook ads services Vadodara, Social media manager Gujarat, Digital marketing company Vadodara, Social media growth services India',
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Social Media Marketing',
  provider: {
    '@type': 'Organization',
    name: 'Veyber',
    url: 'https://veyber.co.in',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Vadodara, Gujarat',
  },
  description: 'Social media handling services including Instagram marketing, Facebook ads, content creation and growth strategy in Vadodara, Gujarat.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is social media handling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It includes managing your social profiles, posting content, running ads, and engaging with your audience.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which platforms do you manage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We handle Instagram, Facebook, LinkedIn, and more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can social media generate leads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, with the right strategy and ads, it can generate consistent leads and sales.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often do you post?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Posting frequency depends on your package and strategy.',
      },
    },
  ],
};

const services = [
  {
    icon: 'lightbulb',
    title: 'Social Media Strategy & Planning',
    desc: 'We create a customized strategy based on your business goals.',
    items: ['Competitor analysis', 'Target audience research', 'Content calendar planning', 'Platform-specific strategy'],
  },
  {
    icon: 'edit_square',
    title: 'Content Creation & Posting',
    desc: 'High-quality content that attracts and engages your audience.',
    items: ['Creative post designs', 'Reels & short video ideas', 'Captions & hashtags', 'Regular posting schedule'],
  },
  {
    icon: 'groups',
    title: 'Instagram & Facebook Management',
    desc: 'Complete management of your social platforms.',
    items: ['Daily/weekly posting', 'Audience engagement (comments & messages)', 'Profile optimization', 'Story & reel management'],
  },
  {
    icon: 'campaign',
    title: 'Social Media Advertising',
    desc: 'Run targeted ad campaigns that generate leads and sales.',
    items: ['Facebook Ads', 'Instagram Ads', 'Campaign setup & optimization', 'Budget & ROI management'],
  },
  {
    icon: 'insights',
    title: 'Performance Tracking & Reporting',
    desc: 'Measure what matters.',
    items: ['Monthly performance reports', 'Engagement & growth analysis', 'Strategy improvements'],
  },
];

const process = [
  { n: '01', label: 'Business Understanding', desc: 'We dive into your brand, offering, and target audience to lay the groundwork.' },
  { n: '02', label: 'Strategy Creation', desc: 'Crafting a unique, tailored approach to dominate your chosen platforms.' },
  { n: '03', label: 'Content Planning', desc: 'Building out a content calendar filled with high-impact, engaging ideas.' },
  { n: '04', label: 'Execution & Posting', desc: 'Creating creatives, filming, and posting consistently according to the plan.' },
  { n: '05', label: 'Monitoring & Optimization', desc: 'Tracking metrics and refining campaigns to maximize engagement and lead generation.' },
];

const results = [
  { icon: 'group_add', stat: 'Increased', label: 'Followers' },
  { icon: 'visibility', stat: 'Better', label: 'Brand Awareness' },
  { icon: 'leaderboard', stat: 'More', label: 'Leads & Inquiries' },
  { icon: 'verified_user', stat: 'Higher', label: 'Customer Trust' },
];

const faqs = [
  {
    q: 'What is social media handling?',
    a: 'It includes managing your social profiles, posting content, running ads, and engaging with your audience.',
  },
  {
    q: 'Which platforms do you manage?',
    a: 'We handle Instagram, Facebook, LinkedIn, and more.',
  },
  {
    q: 'Can social media generate leads?',
    a: 'Yes, with the right strategy and ads, it can generate consistent leads and sales.',
  },
  {
    q: 'How often do you post?',
    a: 'Posting frequency depends on your package and strategy.',
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
              Social Media Handling · Vadodara, Gujarat
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-5 leading-[1.05] text-white">
              Build Your Brand,<br/>
              Engage Your Audience & <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{filter:'drop-shadow(0 0 28px rgba(174,198,255,0.3))'}}>Grow Faster</span>
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-4 leading-relaxed">
              Looking to grow your business through social media in <span className="text-primary font-semibold">Vadodara?</span>
            </p>
            <p className="text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto mb-8 leading-relaxed">
              At Veyber, we provide professional social media handling services designed to help businesses across Gujarat build a strong online presence, engage their audience, and generate real business results.
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

        {/* Why Social Media is Essential */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">
                  Why Social Media is Essential for Your Business
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Today, your customers are active on platforms like <span className="text-primary font-semibold">Instagram, Facebook, and LinkedIn.</span>
                </p>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  If your brand isn&apos;t active or optimized, you&apos;re missing out on:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: 'group_remove', text: 'Potential customers' },
                    { icon: 'visibility_off', text: 'Brand visibility' },
                    { icon: 'trending_down', text: 'Sales opportunities' },
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
                  👉 That&apos;s where Veyber helps you stand out.
                </p>
              </div>
              <div className="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[40px] rounded-full pointer-events-none"/>
                <h3 className="text-xl font-bold text-white mb-5">Who Needs Social Media Handling?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    'Local businesses in Vadodara',
                    'Startups & small businesses',
                    'Ecommerce brands',
                    'Service providers',
                    'Personal brands',
                  ].map((ind) => (
                    <div key={ind} className="flex items-center gap-3 p-3 bg-surface-container-high rounded-xl">
                      <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                      <span className="text-sm font-medium text-white">{ind}</span>
                    </div>
                  ))}
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 pt-4">
                  We don&apos;t just post content — we create strategies that drive growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Grid */}
        <section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Our Social Media Handling Services</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base">We handle everything from start to finish, so you can focus on running your business.</p>
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
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">Social Media Services Across Gujarat</h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">We provide dedicated social media management that resonates with local and national audiences.</p>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">We proudly serve</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Vadodara (Primary Focus)','Ahmedabad','Surat','Rajkot','Anand','Bharuch','Entire Gujarat'].map((city) => (
                      <span key={city} className="flex items-center gap-1.5 px-3 py-2 bg-surface-container rounded-xl border border-outline-variant/10 text-xs font-semibold hover:border-primary/30 hover:text-primary transition-all">
                        <span className="material-symbols-outlined text-primary text-[14px]">location_on</span>
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">Why Choose Veyber?</h3>
                  <ul className="space-y-3">
                    {[
                      'Creative & strategic approach',
                      'Consistent content posting',
                      'Focus on engagement & growth',
                      'Affordable plans for businesses',
                      'Dedicated social media managers',
                    ].map((text) => (
                      <li key={text} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">verified</span>
                        <span className="font-semibold text-white">{text}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-primary mt-4 font-semibold text-sm">We help you turn your social media into a lead generation machine.</p>
                </div>
              </div>

              {/* Internal Links for SEO SILO */}
              <div className="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[50px] rounded-full pointer-events-none"/>
                <h3 className="text-xl sm:text-2xl font-bold font-headline mb-6 relative z-10">Explore More Digital Services</h3>
                <p className="text-on-surface-variant text-sm mb-6">Combine social media with our other services to maximize your growth.</p>
                <div className="flex flex-col gap-3 relative z-10">
                  <Link href="/content-marketing" className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/10 hover:border-primary/30 transition-all font-semibold text-white text-sm group">
                    <span>Content Marketing</span>
                    <span className="material-symbols-outlined text-primary text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </Link>
                  <Link href="/ecommerce-development" className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/10 hover:border-primary/30 transition-all font-semibold text-white text-sm group">
                    <span>Ecommerce Development</span>
                    <span className="material-symbols-outlined text-primary text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </Link>
                  <Link href="/account-management" className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/10 hover:border-primary/30 transition-all font-semibold text-white text-sm group">
                    <span>Account Management</span>
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
              <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Our Process</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto text-sm">A seamless, results-driven process designed for maximum brand growth.</p>
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
            <p className="text-on-surface-variant text-sm mb-10 max-w-lg mx-auto">When your social media is managed by experts, your business sees real growth.</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {results.map(({ icon, stat, label }) => (
                <div key={label} className="bg-surface-container rounded-2xl border border-outline-variant/10 p-5 sm:p-7 flex flex-col items-center gap-3 hover:border-primary/25 hover:bg-surface-container-high transition-all duration-200">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[22px]">{icon}</span>
                  </div>
                  <p className="text-xl font-black text-primary">{stat}</p>
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
              <p className="text-on-surface-variant text-sm">Get answers about our social media services.</p>
            </div>
            <div className="flex flex-col gap-4">
              {faqs.map((item, i) => (
                <details key={i} className="group bg-surface-container rounded-2xl border border-outline-variant/10 overflow-hidden open:border-primary/20 transition-all duration-200">
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
                Let&apos;s Grow Your Social Media
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
                Ready to build a powerful brand online?
              </h2>
              <p className="text-base sm:text-lg text-white/75 mb-8 max-w-xl mx-auto leading-relaxed drop-shadow">
                Contact Veyber today for expert social media handling services in Vadodara.
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
