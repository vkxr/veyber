import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Gujarat | Vadodara, Ahmedabad, Surat & All Cities – Veyber',
  description: 'Veyber offers ecommerce development, social media marketing, content marketing & business consulting services across Vadodara and all cities in Gujarat.',
  keywords: 'Digital marketing services Gujarat, Ecommerce services Vadodara, Social media marketing Gujarat, Business consulting Gujarat, Digital agency Vadodara, Marketing company Gujarat, Ecommerce development Gujarat, Online marketing Vadodara',
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Veyber',
  url: 'https://veyber.co.in',
  areaServed: {
    '@type': 'State',
    name: 'Gujarat',
  },
  serviceArea: [
    'Vadodara',
    'Ahmedabad',
    'Surat',
    'Rajkot',
    'Gandhinagar',
    'Anand',
    'Bharuch',
    'Navsari',
    'Vapi',
    'Valsad',
    'Junagadh',
    'Bhavnagar',
    'Jamnagar',
    'Morbi',
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you cover all cities in Gujarat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide services across all cities and regions of Gujarat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you serve all areas in Vadodara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we cover all major areas including Alkapuri, Gotri, Manjalpur, Karelibaug, and more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer remote services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we work with clients across Gujarat and India remotely.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get local support in Vadodara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Vadodara is our primary service hub.',
      },
    },
  ],
};

const services = [
  {
    icon: 'shopping_cart',
    title: 'Ecommerce Development',
    desc: 'Shopify, WooCommerce & custom ecommerce websites',
    items: ['SEO-friendly', 'Mobile-optimized stores'],
    href: '/ecommerce-development',
  },
  {
    icon: 'storefront',
    title: 'Ecommerce Account Management',
    desc: 'Marketplace management (Amazon, Flipkart, Meesho)',
    items: ['Listing optimization', 'Sales growth'],
    href: '/account-management',
  },
  {
    icon: 'share',
    title: 'Social Media Handling',
    desc: 'Instagram & Facebook marketing',
    items: ['Content creation', 'Ads management'],
    href: '/social-media-handling',
  },
  {
    icon: 'edit_note',
    title: 'Content Marketing',
    desc: 'SEO blog writing',
    items: ['Website content', 'Content strategy'],
    href: '/content-marketing',
  },
  {
    icon: 'psychology',
    title: 'Business Consulting',
    desc: 'Growth strategy and market research',
    items: ['Business scaling solutions'],
    href: '/business-consulting',
  },
];

const faqs = [
  {
    q: 'Do you cover all cities in Gujarat?',
    a: 'Yes, we provide services across all cities and regions of Gujarat.',
  },
  {
    q: 'Do you serve all areas in Vadodara?',
    a: 'Yes, we cover all major areas including Alkapuri, Gotri, Manjalpur, Karelibaug, and more.',
  },
  {
    q: 'Do you offer remote services?',
    a: 'Yes, we work with clients across Gujarat and India remotely.',
  },
  {
    q: 'Can I get local support in Vadodara?',
    a: 'Yes, Vadodara is our primary service hub.',
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
              Locations & Coverage
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-5 leading-[1.05] text-white">
              Our Service Locations<br/>
              <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{filter:'drop-shadow(0 0 28px rgba(174,198,255,0.3))'}}>Across Gujarat</span>
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-4 leading-relaxed">
              Serving Businesses Across Gujarat with <span className="text-primary font-semibold">Expert Digital Solutions</span>
            </p>
            <p className="text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto mb-8 leading-relaxed">
              At Veyber, we provide professional services including ecommerce development, account management, social media handling, content marketing, and business consulting across every major city and region of Gujarat. Our mission is to help businesses grow locally and scale digitally with high-performance strategies and execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group relative px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-[#aec6ff] to-[#4f8eff] text-[#001a42] font-bold rounded-full text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_52px_rgba(174,198,255,0.38)] active:scale-95">
              <span className="relative z-10 flex items-center gap-2"><span className="material-symbols-outlined text-[20px]">call</span>Get in Touch</span>
              <div className="absolute inset-0 translate-x-[-100%] skew-x-12 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-[100%] transition-transform duration-700"/>
            </Link>
            </div>
          </div>
        </section>

        {/* Primary Location & Coverage Grid */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              
              {/* Vadodara */}
              <div className="group bg-surface-container p-6 sm:p-10 rounded-[2rem] border border-primary/20 hover:bg-surface-container-high transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[40px] rounded-full pointer-events-none"/>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary text-[28px]">push_pin</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-4">Vadodara – Our Core Service Hub</h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Vadodara is our main operational hub, where we deeply understand the business ecosystem to deliver targeted, fast, and effective solutions.
                </p>
                <div className="space-y-3 mb-8">
                  {['Local businesses', 'Startups', 'Ecommerce brands', 'Service providers'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                      <span className="font-semibold text-white text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-4">Coverage in Vadodara</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Alkapuri', 'Sayajigunj', 'Fatehgunj', 'Karelibaug', 'Nizampura', 'Gotri', 'Subhanpura', 
                    'Waghodia Road', 'Ajwa Road', 'Manjalpur', 'Makarpura', 'Tarsali', 'Harni', 'Sama', 
                    'New VIP Road', 'Chhani', 'Gorwa', 'Akota'
                  ].map((area) => (
                    <span key={area} className="px-3 py-1.5 bg-surface-container-high text-xs font-medium text-white/80 rounded-md border border-outline-variant/10">
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-primary mt-6 text-sm font-semibold border-l-4 border-primary pl-3 py-1">
                  Whether you are in the city center or outskirts, Veyber delivers fast and reliable service.
                </p>
              </div>

              {/* Gujarat */}
              <div className="group bg-surface-container p-6 sm:p-10 rounded-[2rem] border border-outline-variant/10 hover:border-primary/25 transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary text-[28px]">map</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-4">Complete Gujarat Coverage</h2>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  We proudly serve businesses across all major cities, regions, towns, and emerging areas of Gujarat.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"/>Metro & Major Cities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'].map(city => (
                        <div key={city} className="bg-surface-container-high px-3 py-2 rounded-lg text-sm text-on-surface-variant">{city}</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"/>Capital & Growing Cities</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Gandhinagar', 'Anand', 'Bharuch', 'Navsari'].map(city => (
                        <div key={city} className="bg-surface-container-high px-3 py-2 rounded-lg text-sm text-on-surface-variant">{city}</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-3 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"/>Industrial & Emerging Areas</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {['Vapi', 'Valsad', 'Junagadh', 'Bhavnagar', 'Jamnagar', 'Morbi'].map(city => (
                        <div key={city} className="bg-surface-container-high px-3 py-2 rounded-lg text-sm text-on-surface-variant">{city}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Regionally */}
        <section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Our Services Across All Locations</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base">Targeted digital growth and consulting services, anywhere in Gujarat.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map(({ icon, title, desc, items, href }: { icon: string; title: string; desc: string; items: string[]; href: string; }) => (
                <div key={title} className="group bg-surface-container p-6 rounded-2xl border border-outline-variant/10 hover:border-primary/25 hover:bg-surface-container-high transition-all duration-300 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-primary text-[22px]">{icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{desc}</p>
                  <ul className="space-y-1.5 mb-6 flex-grow">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-on-surface-variant">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/60"/>
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

        {/* Why Businesses Choose Us & Remote Local Support */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">Why Businesses Across Gujarat Choose Veyber</h2>
                <div className="space-y-4">
                  <ul className="space-y-4">
                    {[
                      'Strong local expertise in Vadodara & Gujarat',
                      'Customized solutions based on city & market dynamics',
                      'Affordable scaling tools for startups & SMEs',
                      'Data-driven local SEO and growth strategies',
                      'End-to-end business support and consulting',
                    ].map((text) => (
                      <li key={text} className="flex items-start gap-4 p-4 bg-surface-container rounded-xl border border-outline-variant/5">
                        <span className="material-symbols-outlined text-primary shrink-0">verified</span>
                        <span className="font-medium text-white text-sm pt-0.5">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Remote Local Support callout */}
              <div className="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 sm:p-10 relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[50px] rounded-full pointer-events-none"/>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">language</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-headline mb-4 relative z-10">Remote + Local Support</h3>
                <p className="text-on-surface-variant text-base mb-6 leading-relaxed">
                  We believe in borderless assistance paired with local insights.
                </p>
                <div className="flex flex-col gap-3 relative z-10">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-surface-container-high border border-outline-variant/10 font-semibold text-white text-sm">
                    <span className="material-symbols-outlined text-primary">public</span>
                    Online consultations across all of Gujarat
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-surface-container-high border border-outline-variant/10 font-semibold text-white text-sm">
                    <span className="material-symbols-outlined text-primary">home_pin</span>
                    On-demand targeted support in Vadodara
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-surface-container-high border border-outline-variant/10 font-semibold text-white text-sm">
                    <span className="material-symbols-outlined text-primary">speed</span>
                    Fast communication & rapid execution
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-3">Frequently Asked Questions</h2>
              <p className="text-on-surface-variant text-sm">Get answers about our coverage across Gujarat.</p>
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
                Let&apos;s Grow Your Business in Gujarat
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
                Looking for trusted digital services in your city?
              </h2>
              <p className="text-base sm:text-lg text-white/75 mb-8 max-w-xl mx-auto leading-relaxed drop-shadow">
                Contact Veyber today and let&apos;s scale your business across Gujarat together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-3.5 sm:py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black rounded-full text-base sm:text-lg shadow-2xl hover:shadow-primary/40 transition-all active:scale-95 group">
                  Contact Us
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
