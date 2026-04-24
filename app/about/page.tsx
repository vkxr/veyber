import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Veyber | Digital Marketing Company in Vadodara',
  description: 'Veyber is a Vadodara-based digital solutions company offering eCommerce development, social media marketing, content marketing, and business consulting across Gujarat.',
  keywords: 'digital marketing company in Vadodara, ecommerce solutions company in Vadodara, business consultant in Vadodara, digital services in Gujarat',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Veyber do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Veyber provides eCommerce development, account management, social media marketing, content marketing, and business consulting services.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Veyber based in Vadodara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Veyber is a digital solutions company based in Vadodara, Gujarat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who can work with Veyber?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Startups, small businesses, and growing brands across Vadodara, Gujarat, and India.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Veyber offer customized solutions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all services are tailored based on business goals and requirements.',
      },
    },
  ],
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Veyber',
  url: 'https://veyber.in/about',
  logo: 'https://veyber.in/veyber-logo.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vadodara',
    addressRegion: 'Gujarat',
    addressCountry: 'India',
  },
  areaServed: ['Vadodara', 'Gujarat', 'India'],
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Navbar />
      <main className="pt-[120px]">

{/* Hero Section */}
<section className="relative px-4 sm:px-8 py-12 sm:py-20 md:py-28 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"/>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
<div className="lg:col-span-7">
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/[0.08] text-primary font-bold text-xs tracking-widest uppercase mb-5">
  <span className="relative flex h-1.5 w-1.5 shrink-0"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"/><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"/></span>
  Digital Growth Agency · Vadodara
</span>
<h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-headline tracking-tight leading-tight mb-5 max-w-[650px]">
  About Veyber –{' '}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
    Digital Growth
  </span>{' '}
  Company in Vadodara
</h1>
<p className="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-[560px] font-body mb-6">
  Veyber is a results-driven <Link href="https://veyber.co.in" target="_blank" className="text-primary font-semibold hover:underline">digital marketing company in Vadodara</Link>, helping businesses grow with powerful eCommerce, marketing, and consulting strategies.
</p>
<p className="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-[560px] font-body mb-8">
  We work with startups, small businesses, and growing brands to build strong digital foundations and scalable growth systems. Our focus is simple — deliver real results, not just services.
</p>
<div className="flex flex-col sm:flex-row gap-4">
<Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#aec6ff] to-[#4f8eff] text-[#001a42] font-bold rounded-full hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(174,198,255,0.35)] transition-all duration-300 active:scale-95">
  Get Free Consultation
  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</Link>
<Link href="/services" className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-bold rounded-full border border-white/12 hover:border-primary/40 hover:bg-primary/[0.08] transition-all duration-300">
  Our Services
</Link>
</div>
</div>
<div className="lg:col-span-5 relative">
<div className="aspect-square rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group relative">
<Image
  alt="Veyber digital marketing team in Vadodara — creative professionals collaborating"
  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=75"
  fill
  sizes="(max-width: 1024px) 100vw, 42vw"
  loading="eager"
  quality={75}
/>
<div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent pointer-events-none"/>
</div>
<div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 p-5 sm:p-8 bg-surface-container-highest rounded-2xl shadow-xl border border-outline-variant/10 max-w-[260px]">
<div className="text-3xl sm:text-4xl font-bold font-headline text-primary">7+ Years</div>
<div className="text-sm font-medium text-on-surface-variant uppercase tracking-widest">Experience</div>
<div className="text-xs text-on-surface-variant/80 mt-1">New presence, seasoned approach</div>
</div>
</div>
</div>
</div>
</section>

{/* Who We Are + Our Story */}
<section className="px-4 sm:px-8 py-12 sm:py-24 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
{/* Who We Are */}
<div className="force-dark md:col-span-4 relative bg-neutral-900 rounded-2xl overflow-hidden flex flex-col justify-end min-h-[280px] sm:min-h-[420px] group">
<Image
  alt="Who We Are — Veyber eCommerce experts in Gujarat"
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=75"
  fill
  sizes="(max-width: 768px) 100vw, 33vw"
  loading="lazy"
  quality={75}
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/55 to-black/15"/>
<div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-50"/>
<div className="relative z-10 p-6 sm:p-10">
<h2 className="text-2xl sm:text-3xl font-bold font-headline mb-4 text-white">Who We Are</h2>
<p className="text-white/80 leading-relaxed mb-4">At Veyber, we specialize in:</p>
<ul className="space-y-1.5 mb-4">
  {['eCommerce Development','eCommerce Account Management','Social Media Handling','Content Marketing','Business Consulting'].map((item) => (
    <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
        <span className="material-symbols-outlined text-primary" style={{fontSize:'11px'}}>check</span>
      </span>
      {item}
    </li>
  ))}
</ul>
<p className="text-white/60 text-sm leading-relaxed">We combine strategy, creativity, and technology to help businesses in Vadodara and across Gujarat succeed in the digital space.</p>
</div>
</div>
{/* Our Story */}
<div className="force-dark md:col-span-8 relative bg-neutral-900 rounded-2xl overflow-hidden flex flex-col justify-end min-h-[420px] group">
<Image
  alt="Veyber founders working in Vadodara — our story"
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=75"
  fill
  sizes="(max-width: 768px) 100vw, 67vw"
  loading="lazy"
  quality={75}
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/93 via-black/60 to-black/20"/>
<div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-transparent"/>
<div className="relative z-10 p-6 sm:p-10">
<h2 className="text-2xl sm:text-3xl font-bold font-headline mb-3 sm:mb-4 text-white uppercase tracking-widest drop-shadow-lg">Our Story</h2>
<p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl drop-shadow mb-3">
  Veyber was founded with a clear vision — to bridge the gap between digital efforts and real business growth.
</p>
<p className="text-white/65 text-sm sm:text-base leading-relaxed max-w-xl drop-shadow mb-3">
  Many businesses invest in websites, marketing, and advertising but struggle to generate meaningful results. The problem isn't effort — it's the lack of the right strategy.
</p>
<p className="text-white/65 text-sm sm:text-base leading-relaxed max-w-xl drop-shadow">
  By focusing on data-driven decisions, performance-based execution, and a deep understanding of the Vadodara and Gujarat market, we help businesses turn their digital presence into a revenue-generating system.
</p>
</div>
</div>
</div>
</div>
</section>

{/* Mission & Vision */}
<section className="px-4 sm:px-8 py-12 sm:py-24">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16">
<div className="space-y-8">
<div className="flex gap-6">
<div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-3xl">target</span>
</div>
<div>
<h2 className="text-2xl font-bold font-headline mb-4 uppercase tracking-wider">Our Mission</h2>
<p className="text-on-surface-variant leading-relaxed">To empower businesses in Vadodara and across Gujarat with smart, scalable, and result-driven digital solutions that drive growth and profitability.</p>
</div>
</div>
</div>
<div className="space-y-8">
<div className="flex gap-6">
<div className="flex-shrink-0 w-14 h-14 rounded-xl bg-tertiary-container/10 flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary-container text-3xl">visibility</span>
</div>
<div>
<h2 className="text-2xl font-bold font-headline mb-4 uppercase tracking-wider">Our Vision</h2>
<p className="text-on-surface-variant leading-relaxed">To become a trusted digital growth partner for businesses in Vadodara, Gujarat, and across India by delivering innovative and performance-focused solutions.</p>
</div>
</div>
</div>
</div>
</section>

{/* Leadership Messages */}
<section className="px-4 sm:px-8 py-12 sm:py-24 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-bold font-headline mb-8 sm:mb-16 text-center">Leadership Messages</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Founder */}
<div className="bg-surface-container-high p-5 sm:p-8 rounded-2xl border border-outline-variant/5">
<div className="w-20 h-20 rounded-full overflow-hidden mb-6 ring-4 ring-primary/20 relative">
<Image className="w-full h-full object-cover" alt="Founder Veyber — digital marketing company Vadodara" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJSdNF5bCbka75fYJDEPi0zXAU2KCBPpYlU9enKPpw3uC-a1k-on8IanIoWzpTrc0R_dGAxPYqJt4i00FBa4Anj1WxCqJzzpWiEbv5uSZWwd03VEzliQEw4BrfQvHaMI4aTrbME_92CQ7hrpr_EtZSQBW7vXuFkE3W88BMDNwUksgfFAFpToL1ja0-0R7v2wXCq8Vjji-d1SPmZtLgK0kKircg9MAM8Pp_o4F89vHRTTeVz5J3knoHQRbjXCizBzqVVHBByuoP3bg" fill sizes="80px" loading="lazy" />
</div>
<div className="flex gap-1 mb-4 text-primary">
  {'★★★★★'.split('').map((s, i) => <span key={i} className="text-sm">{s}</span>)}
</div>
<p className="text-on-surface italic mb-8 leading-relaxed">&quot;At Veyber, our goal is not just to provide services but to create real business impact. We understand the challenges businesses face in Vadodara and across Gujarat when it comes to digital growth. Every project we take is treated with dedication, responsibility, and a growth mindset.&quot;</p>
<div>
<div className="font-bold font-headline text-lg">Arth Pancholi</div>
<div className="text-primary text-sm font-medium">Founder &amp; CEO</div>
</div>
</div>
{/* Co-Founder 1 */}
<div className="bg-surface-container-high p-5 sm:p-8 rounded-2xl border border-outline-variant/5">
<div className="w-20 h-20 rounded-full overflow-hidden mb-6 ring-4 ring-primary/20 relative">
<Image className="w-full h-full object-cover" alt="Co-Founder Veyber — business consulting Gujarat" src="/vraj_gutam_avatar.png" fill sizes="80px" loading="lazy" />
</div>
<div className="flex gap-1 mb-4 text-primary">
  {'★★★★★'.split('').map((s, i) => <span key={i} className="text-sm">{s}</span>)}
</div>
<p className="text-on-surface italic mb-8 leading-relaxed">&quot;Success in today&apos;s digital world depends on the right balance of strategy, execution, and operational excellence. At Veyber, we focus on building scalable systems and delivering solutions that drive real impact. We work closely with our clients to ensure every process is efficient, transparent, and aligned with long-term growth.&quot;</p>
<div>
<div className="font-bold font-headline text-lg">Vraj Gutam</div>
<div className="text-primary text-sm font-medium">Co-Founder, Chief Technical &amp; Operating Head</div>
</div>
</div>
{/* Co-Founder 2 */}
<div className="bg-surface-container-high p-5 sm:p-8 rounded-2xl border border-outline-variant/5">
<div className="w-20 h-20 rounded-full overflow-hidden mb-6 ring-4 ring-primary/20 relative">
<Image className="w-full h-full object-cover" alt="Co-Founder Veyber — eCommerce solutions Vadodara" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHOKiHczlyRKA9lkHT6pzqgO5rY3TrW1Aj6H_tDc96My2SN_YJ9_ge2cissxubXbZrhUuhOWHU4JicMrLekiAM2c6blcaAiphjfT3m2kzHe3JGXPjTtuO1pB5jubmTOGQSlUbzTuWAxW8OMTY8xZ1CRM8HWQqLV0RqK_8x29M4Ugc4a-KtniGCFuLHiDtVlsH-otAOSDcou8s4zJPxVSubdvWwz1IxPzlTIsP4PPhaFmQBZBgEoxcKM9mv2e7YNMIeqohIySC699k" fill sizes="80px" loading="lazy" />
</div>
<div className="flex gap-1 mb-4 text-primary">
  {'★★★★★'.split('').map((s, i) => <span key={i} className="text-sm">{s}</span>)}
</div>
<p className="text-on-surface italic mb-8 leading-relaxed">&quot;We believe marketing should do more than just create visibility—it should drive real business growth. As a team, we focus on building strategies that are clear, data-driven, and tailored to each business. Our goal is to help companies in Vadodara and across Gujarat grow with confidence, consistency, and measurable results.&quot;</p>
<div>
<div className="font-bold font-headline text-lg">Vrajesh Mistry</div>
<div className="text-primary text-sm font-medium">Co-Founder, Marketing Head</div>
</div>
</div>
</div>
</div>
</section>

{/* Why Choose Veyber & Our Approach */}
<section className="px-4 sm:px-8 py-12 sm:py-24">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">
<div>
<h2 className="text-3xl sm:text-4xl font-bold font-headline mb-6 sm:mb-8">Why Choose Veyber?</h2>
<ul className="space-y-5">
{[
  { icon: 'location_on', title: 'Deep Understanding of Vadodara & Gujarat Market', desc: 'We know the local market dynamics and consumer behaviour across Gujarat better than anyone.' },
  { icon: 'psychology', title: 'Strategy-First Approach for Every Project', desc: 'We build a custom roadmap before writing a single line of code or posting a single piece of content.' },
  { icon: 'trending_up', title: 'Focus on Measurable ROI and Growth', desc: 'Vanity metrics don\'t pay bills. We track what matters — revenue, leads, and retention.' },
  { icon: 'hub', title: 'End-to-End Digital Solutions Under One Roof', desc: 'From website to marketplace to social media — everything handled by one focused team.' },
  { icon: 'chat', title: 'Transparent Communication and Execution', desc: 'No jargon, no hidden fees. Clear reporting and consistent updates at every stage.' },
  { icon: 'open_in_full', title: 'Scalable Systems Designed for Long-Term Success', desc: 'We build systems that grow with you — from startup to seven figures and beyond.' },
].map(({ icon, title, desc }) => (
  <li key={title} className="flex items-start gap-4">
    <span className="material-symbols-outlined text-primary mt-0.5 flex-shrink-0">{icon}</span>
    <div>
      <h4 className="font-bold text-base mb-1">{title}</h4>
      <p className="text-on-surface-variant text-sm">{desc}</p>
    </div>
  </li>
))}
</ul>
</div>
<div className="bg-surface-container p-6 sm:p-10 rounded-3xl border border-outline-variant/10 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full filter blur-3xl"/>
<h2 className="text-3xl sm:text-4xl font-bold font-headline mb-6 sm:mb-8">Our Approach</h2>
<div className="space-y-7 relative z-10">
{[
  { n: '01', label: 'Business Understanding', desc: 'We start by deeply understanding your business, goals, and current digital presence.' },
  { n: '02', label: 'Market & Competitor Research', desc: 'We analyse your market, competitors, and growth opportunities before building anything.' },
  { n: '03', label: 'Strategy Development', desc: 'A bespoke roadmap focused on ROI, aligned to your industry and target audience.' },
  { n: '04', label: 'Execution & Optimization', desc: 'Precision implementation across all channels with continuous A/B testing.' },
  { n: '05', label: 'Continuous Growth Tracking', desc: 'Scaling winning formulas and exploring new horizons for your brand every month.' },
].map(({ n, label, desc }) => (
  <div key={n} className="flex items-start gap-5">
    <span className="text-3xl font-black text-outline-variant/30 font-headline leading-none mt-0.5">{n}</span>
    <div>
      <p className="font-bold text-white mb-1">{label}</p>
      <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
))}
</div>
</div>
</div>
</section>

{/* Who We Work With */}
<section className="px-4 sm:px-8 py-12 sm:py-24 bg-surface-container-low text-center">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Who We Work With</h2>
<p className="text-base sm:text-lg text-on-surface-variant mb-10 sm:mb-12 max-w-2xl mx-auto">From Vadodara&apos;s promising startups to established brands across Gujarat, we partner with businesses that are ready to scale.</p>
<div className="flex flex-wrap justify-center gap-4 mb-10 sm:mb-20">
{[
  'Startups in Vadodara',
  'Small & Medium Businesses in Gujarat',
  'eCommerce Sellers Across India',
  'Brands Seeking Digital Growth',
  'Businesses Needing Consulting',
].map((tag) => (
  <span key={tag} className="px-5 py-2.5 bg-surface-container-highest rounded-full text-sm font-semibold border border-outline-variant/10 hover:border-primary/30 hover:text-primary transition-all duration-200 cursor-default">{tag}</span>
))}
</div>
{/* Commitment */}
<div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-container/10 border border-primary/20">
<h3 className="text-xl sm:text-2xl font-bold font-headline mb-4 uppercase tracking-widest">Our Commitment</h3>
<p className="text-base sm:text-lg leading-relaxed text-on-surface max-w-2xl mx-auto">At Veyber, we believe in building long-term partnerships, not just completing projects. We are committed to helping businesses in Vadodara and Gujarat grow with confidence, clarity, and the right strategy.</p>
</div>
</div>
</section>

{/* Serving Areas */}
<section className="px-4 sm:px-8 py-12 sm:py-20 bg-surface">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-2xl sm:text-3xl font-bold font-headline mb-3">Serving Areas Across Gujarat</h2>
<p className="text-on-surface-variant mb-8 text-sm sm:text-base">We help businesses grow across major cities in Gujarat and beyond.</p>
<div className="flex flex-wrap justify-center gap-3">
{[
  { city: 'Vadodara', icon: 'location_on', url: '/digital-marketing-vadodara' },
  { city: 'Ahmedabad', icon: 'location_on', url: '/digital-marketing-ahmedabad' },
  { city: 'Surat', icon: 'location_on', url: '/digital-marketing-surat' },
  { city: 'Rajkot', icon: 'location_on', url: '/digital-marketing-rajkot' },
  { city: 'Pan India', icon: 'public', url: '/service-locations' },
].map(({ city, icon, url }) => (
  <Link key={city} href={url} className="flex items-center gap-2 px-5 py-3 bg-surface-container rounded-xl border border-outline-variant/10 hover:border-primary/30 hover:bg-surface-container-high hover:text-primary transition-all duration-200">
    <span className="material-symbols-outlined text-[18px]">{icon}</span>
    <span className="font-semibold text-sm">{city}</span>
  </Link>
))}
</div>
</div>
</section>

{/* FAQ Section */}
<section className="px-4 sm:px-8 py-12 sm:py-24 bg-surface-container-low">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-10 sm:mb-16">
<h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Frequently Asked Questions</h2>
<p className="text-on-surface-variant">Quick answers about Veyber and how we work.</p>
</div>
<div className="flex flex-col gap-4">
{[
  {
    q: 'What does Veyber do?',
    a: 'Veyber provides eCommerce development, account management (Amazon, Flipkart, Meesho), social media marketing, content marketing, and business consulting services to help businesses grow digitally.',
  },
  {
    q: 'Is Veyber based in Vadodara?',
    a: 'Yes, Veyber is a digital solutions company based in Vadodara, Gujarat. We serve businesses across Vadodara, Ahmedabad, Surat, Rajkot, and across India.',
  },
  {
    q: 'Who can work with Veyber?',
    a: 'Startups, small businesses, and growing brands across Vadodara, Gujarat, and India. Whether you\'re launching your first store or scaling an existing business, we build solutions around your goals.',
  },
  {
    q: 'Does Veyber offer customized solutions?',
    a: 'Yes, all services are tailored based on your specific business goals, industry, and budget. We don\'t believe in one-size-fits-all packages.',
  },
].map((item, i) => (
  <details key={i} name="faq" className="group bg-surface-container rounded-2xl border border-outline-variant/10 overflow-hidden open:border-primary/20 transition-all duration-200">
    <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none gap-4">
      <h3 className="font-bold text-white text-base sm:text-lg">{item.q}</h3>
      <span className="flex-shrink-0 w-8 h-8 rounded-full border border-outline-variant/20 flex items-center justify-center text-on-surface-variant group-open:bg-primary/10 group-open:border-primary/30 group-open:text-primary transition-all duration-200">
        <span className="material-symbols-outlined text-[18px] group-open:rotate-45 transition-transform duration-200">add</span>
      </span>
    </summary>
    <div className="px-6 pb-5 text-on-surface-variant leading-relaxed text-sm sm:text-base">{item.a}</div>
  </details>
))}
</div>
</div>
</section>

{/* CTA Section */}
<section className="px-4 sm:px-8 py-16 sm:py-28 relative overflow-hidden">
<div className="absolute inset-0 bg-primary/5"/>
<div className="force-dark max-w-4xl mx-auto text-center relative z-10 bg-neutral-900 rounded-[2rem] sm:rounded-[3rem] border border-white/15 overflow-hidden">
<Image
  alt="Digital growth team celebrating success in Vadodara"
  className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=75"
  fill
  sizes="(max-width: 1024px) 100vw, 896px"
  loading="lazy"
  quality={75}
/>
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85"/>
<div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent"/>
<div className="relative z-10 p-8 sm:p-12 md:p-16">
<h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tight drop-shadow-xl">
  Ready to grow your business in Vadodara?
</h2>
<p className="text-base sm:text-lg text-white/75 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed drop-shadow">
  Let&apos;s build a powerful digital strategy together. Your journey to measurable growth starts here.
</p>
<Link href="/contact" className="inline-flex items-center gap-2 px-7 sm:px-10 py-3.5 sm:py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black rounded-full text-base sm:text-xl shadow-2xl hover:shadow-primary/40 transition-all active:scale-95 group">
  Get Free Consultation
  <span className="material-symbols-outlined inline-block align-middle group-hover:translate-x-1 transition-transform">arrow_forward</span>
</Link>
</div>
</div>
</section>

      </main>
      <Footer />
    </div>
  );
}
