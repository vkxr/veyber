import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Ulsoor Bangalore | Local SEO & Leads – Veyber',
  description: 'Looking for digital marketing services in Ulsoor Bangalore? Veyber offers SEO, social media marketing, ecommerce & local business lead generation services.',
  keywords: 'Digital marketing services Ulsoor, SEO company Ulsoor Bangalore, Marketing agency Ulsoor, Local SEO Ulsoor, Clinic marketing Bangalore, Restaurant marketing Ulsoor, Small business SEO Bangalore, Local lead generation Bangalore',
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Veyber',
  url: 'https://veyber.co.in',
  areaServed: {
    '@type': 'Place',
    name: 'Ulsoor, Bangalore',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ulsoor',
    addressRegion: 'Karnataka',
    addressCountry: 'India',
  },
  description: 'Digital marketing services in Ulsoor Bangalore including SEO, social media marketing, ecommerce development and local business lead generation.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you provide services in Ulsoor Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide complete digital marketing services in Ulsoor and central Bangalore.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with clinics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we specialize in healthcare and service-based marketing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide Google ranking services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we focus on local SEO and Google Maps optimization.',
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
    desc: 'Build professional online presence.',
    items: ['Service-based websites', 'Appointment booking systems', 'Conversion-focused landing pages'],
    href: '/ecommerce-development',
  },
  {
    icon: 'storefront',
    title: 'Ecommerce Account Management',
    desc: 'Expand digital reach.',
    items: ['Amazon & marketplace optimization', 'Product/service listing management', 'Conversion improvement'],
    href: '/account-management',
  },
  {
    icon: 'share',
    title: 'Social Media Marketing',
    desc: 'Build local awareness.',
    items: ['Instagram & Facebook campaigns', 'Local audience targeting', 'Brand engagement content'],
    href: '/social-media-handling',
  },
  {
    icon: 'edit_note',
    title: 'Content Marketing',
    desc: 'Improve search visibility.',
    items: ['SEO blogs & local landing pages', 'Healthcare & service content', 'Keyword targeting for Bangalore local searches'],
    href: '/content-marketing',
  },
  {
    icon: 'psychology',
    title: 'Business Consulting',
    desc: 'Improve growth strategy.',
    items: ['Local business scaling', 'Lead generation funnels', 'Brand positioning'],
    href: '/business-consulting',
  },
];

const process = [
  { n: '01', label: 'Market Analysis', desc: 'Isolating distinct consumer habits circling the Halasuru/Ulsoor residential blocks.' },
  { n: '02', label: 'Competitor Research', desc: 'Analyzing local service models scaling directly around MG Road proximity.' },
  { n: '03', label: 'Strategy Planning', desc: 'Locking local SEO architecture targeting localized health and retail markets.' },
  { n: '04', label: 'Execution', desc: 'Ranking priority endpoints firmly across high-intent Google Maps searches.' },
  { n: '05', label: 'Optimization', desc: 'Continuous scaling maintaining consistent monthly appointment and lead volume.' },
];

const results = [
  { icon: 'contacts', stat: 'More local', label: 'Inquiries' },
  { icon: 'stars', stat: 'Better', label: 'Google Maps' },
  { icon: 'people', stat: 'Strong', label: 'Brand Visibility' },
  { icon: 'visibility', stat: 'Increased', label: 'Bookings' },
  { icon: 'timeline', stat: 'Consistent', label: 'Monthly Leads' },
];

const faqs = [
  {
    q: 'Do you provide services in Ulsoor Bangalore?',
    a: 'Yes, we provide complete digital marketing services in Ulsoor and central Bangalore.',
  },
  {
    q: 'Do you work with clinics?',
    a: 'Yes, we specialize in healthcare and service-based marketing.',
  },
  {
    q: 'Do you provide Google ranking services?',
    a: 'Yes, we focus on local SEO and Google Maps optimization.',
  },
  {
    q: 'How can I get started?',
    a: 'You can contact us through our website for consultation.',
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
              Local Growth & Service-Based Business Marketing by Veyber
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-5 leading-[1.05] text-white">
              Digital Marketing Services<br/>
              <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{filter:'drop-shadow(0 0 28px rgba(174,198,255,0.3))'}}>In Ulsoor, Bangalore</span>
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-4 leading-relaxed">
              Looking for reliable digital marketing services in Ulsoor, Bangalore?
            </p>
            <p className="text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto mb-8 leading-relaxed">
              At Veyber, we help clinics, service providers, boutique businesses, and local brands in Ulsoor grow through SEO, social media marketing, and targeted lead generation systems. We focus on consistent visibility, trust building, and quality customer inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group relative px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-[#aec6ff] to-[#4f8eff] text-[#001a42] font-bold rounded-full text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_52px_rgba(174,198,255,0.38)] active:scale-95">
              <span className="relative z-10 flex items-center gap-2"><span className="material-symbols-outlined text-[20px]">rocket_launch</span>Dominate Local Maps Search</span>
              <div className="absolute inset-0 translate-x-[-100%] skew-x-12 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-[100%] transition-transform duration-700"/>
            </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us & Target Market */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">
                  Why Businesses in Ulsoor Need Digital Marketing
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Ulsoor is a well-balanced central Bangalore locality, known for:
                </p>
                <div className="flex flex-col gap-3 mb-6">
                  {[
                     { text: 'Residential apartments & gated communities' },
                     { text: 'Clinics & healthcare centers' },
                     { text: 'Boutique offices & consultants' },
                     { text: 'Cafes, restaurants & lifestyle businesses' },
                     { text: 'Proximity to MG Road & CBD areas' }
                  ].map(({ text }) => (
                    <div key={text} className="flex items-center gap-4 p-4 bg-surface-container rounded-xl border border-outline-variant/10 hover:border-primary/25 transition-all group">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-primary text-[20px]">storefront</span>
                      </div>
                      <span className="font-semibold text-white">{text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white font-semibold text-lg border-l-4 border-primary pl-4 py-2 border-outline-variant/10">
                  👉 This creates steady demand with strong local competition. To grow here, you need: <span className="text-primary">Strong Google Maps ranking, highly focused localized SEO routing, and robust trust-based brand funnels.</span>
                </p>
              </div>
              <div className="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[50px] rounded-full pointer-events-none"/>
                <h3 className="text-xl sm:text-2xl font-bold font-headline text-white mb-6">Who We Work With in Ulsoor</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10 w-full">
                  {[
                    'Clinics & healthcare providers',
                    'Boutique consultants',
                    'Cafes & restaurants',
                    'Small corporate offices',
                    'Local service businesses',
                  ].map((ind) => (
                    <div key={ind} className="flex items-center gap-3 p-4 bg-surface-container-high rounded-xl border border-outline-variant/5">
                      <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                      <span className="text-sm font-semibold text-white">{ind}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services in Ulsoor */}
        <section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Our Services in Ulsoor</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base">Systematically structured pipelines capturing local lifestyle, retail, and service-oriented searches exclusively targeting your storefront.</p>
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

        {/* Local Areas Grid & Trust Elements */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              
              {/* Trust Section */}
              <div className="h-full flex flex-col justify-center">
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">Why Choose Veyber?</h2>
                <p className="text-on-surface-variant leading-relaxed mb-8">We deploy localized consumer extraction strategies scaling aggressively alongside Central Bangalore demographics.</p>
                
                <div className="space-y-4 mb-8">
                  <ul className="space-y-4">
                    {[
                      'Strong local SEO expertise',
                      'Lead generation-focused strategy',
                      'Affordable growth systems',
                      'High ROI campaigns',
                      'Experience across Bangalore micro-markets',
                    ].map((text) => (
                      <li key={text} className="flex items-center gap-4 p-4 bg-surface-container rounded-xl border border-outline-variant/10">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-primary text-[16px]">done_all</span>
                        </div>
                        <span className="font-semibold text-white text-sm">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Areas List */}
              <div className="flex flex-col gap-6">
                <div className="bg-surface-container rounded-3xl border border-primary/20 p-6 sm:p-10 relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[50px] rounded-full pointer-events-none"/>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary text-[28px]">push_pin</span>
                  </div>
                  <h3 className="text-2xl font-bold font-headline mb-3 text-white">Serving Ulsoor & Nearby</h3>
                  <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                    We manipulate local SEO dynamics absorbing heavy consumer requests scaling outwards across Halasuru.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {['Ulsoor', 'MG Road', 'Indiranagar', 'Halasuru', 'Richmond Town', 'Central Bangalore region'].map((area) => (
                      <span key={area} className="px-3 py-1.5 bg-surface-container-high text-xs font-semibold text-white/80 rounded-md border border-outline-variant/10 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px] text-primary">location_on</span>
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden h-full">
                  <h3 className="text-lg font-bold font-headline mb-4 text-white">Major State & City Hubs</h3>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {[
                      { name: 'Bangalore', url: '/digital-marketing-bangalore' },
                      { name: 'Karnataka', url: '/digital-marketing-karnataka' },
                      { name: 'MG Road', url: '/digital-marketing-mg-road' },
                      { name: 'Indiranagar', url: '/digital-marketing-indiranagar' },
                      { name: 'Richmond Town', url: '/digital-marketing-richmond-town' },
                    ].map((city) => (
                      <Link key={city.name} href={city.url} className="px-3 py-1.5 bg-surface-container-high text-xs font-semibold text-white/80 rounded-md border border-outline-variant/10 hover:border-primary/50 hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer group">
                        {city.name} <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">arrow_outward</span>
                      </Link>
                    ))}
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
              <p className="text-on-surface-variant max-w-xl mx-auto text-sm">A highly structured execution roadmap.</p>
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
            <p className="text-on-surface-variant text-sm mb-10 max-w-lg mx-auto">Consistent influx of local clinic, restaurant, and boutique consulting inquiries.</p>
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
              <p className="text-on-surface-variant text-sm">Vital insights regarding our capacity targeting Halasuru and localized Central Bangalore businesses.</p>
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
                Let’s Grow Your Business in Ulsoor
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
                Ready to get more customers from your local area?
              </h2>
              <p className="text-base sm:text-lg text-white/75 mb-8 max-w-xl mx-auto leading-relaxed drop-shadow">
                Contact Veyber for digital marketing services in Ulsoor, Bangalore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-3.5 sm:py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black rounded-full text-base sm:text-lg shadow-2xl hover:shadow-primary/40 transition-all active:scale-95 group">
                  Contact Us Now
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
