import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-[120px]">
{/*  Hero Section  */}
<section className="relative px-4 sm:px-8 py-12 sm:py-20 md:py-28 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
<div className="lg:col-span-7">
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/[0.08] text-primary font-bold text-xs tracking-widest uppercase mb-5">Digital Growth Agency · Vadodara</span>
<h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-headline tracking-tight leading-tight mb-5 max-w-[650px]">
                            About Veyber – <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">Digital Growth</span> Company in Vadodara
                        </h1>
<p className="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-[540px] font-body">
                            As a leading <span className="text-primary font-semibold">digital marketing company in Vadodara</span>, Veyber is dedicated to transforming local enterprises into global contenders. Based in the heart of Gujarat, we blend technical precision with creative flair to scale brands across the digital landscape.
                        </p>
</div>
<div className="lg:col-span-5 relative">
<div className="aspect-square rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group relative">
{/* Digital agency team — creative professionals collaborating */}
<Image
  alt="Veyber team — creative professionals collaborating in a modern workspace"
  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=75"
  fill
  sizes="(max-width: 1024px) 100vw, 42vw"
  loading="eager"
  quality={75}
/>
{/* Subtle brand tint overlay */}
<div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent pointer-events-none"/>
</div>
{/* Floating stat badge */}
<div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 p-5 sm:p-8 bg-surface-container-highest rounded-2xl shadow-xl border border-outline-variant/10">
<div className="text-3xl sm:text-4xl font-bold font-headline text-primary">150+</div>
<div className="text-sm font-medium text-on-surface-variant uppercase tracking-widest">Projects Delivered</div>
</div>
</div>
</div>
</div>
</section>
{/*  Our Story / Who We Are (Asymmetric Bento)  */}
<section className="px-4 sm:px-8 py-12 sm:py-24 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="force-dark md:col-span-4 relative bg-neutral-900 rounded-2xl overflow-hidden flex flex-col justify-end min-h-[280px] sm:min-h-[400px] group">
{/* Background — diverse creative team working together */}
<Image
  alt="Who We Are — diverse team of digital professionals"
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=75"
  fill
  sizes="(max-width: 768px) 100vw, 33vw"
  loading="lazy"
  quality={75}
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/55 to-black/15"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-50"></div>
<div className="relative z-10 p-6 sm:p-10">
<h2 className="text-2xl sm:text-3xl font-bold font-headline mb-4 text-white">Who We Are</h2>
<p className="text-white/70 leading-relaxed">We are a collective of digital architects, data scientists, and creative storytellers committed to the growth of businesses in Gujarat and beyond.</p>
</div>
</div>
<div className="force-dark md:col-span-8 relative bg-neutral-900 rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[400px] group">
{/* Background — founding story / small determined startup team */}
<Image
  alt="Our Story — founders working late building Veyber from Vadodara"
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=75"
  fill
  sizes="(max-width: 768px) 100vw, 67vw"
  loading="lazy"
  quality={75}
/>
{/* Dark overlay — always works in both light and dark mode */}
<div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/55 to-black/20"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-transparent"></div>
<div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 right-5 sm:right-10 z-10">
<h2 className="text-2xl sm:text-3xl font-bold font-headline mb-3 sm:mb-4 text-white uppercase tracking-widest drop-shadow-lg">Our Story</h2>
<p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl drop-shadow">Founded with a vision to bridge the gap between local craft and global reach, Veyber started as a small team in Vadodara with one goal: to redefine how brands communicate in the digital age.</p>
</div>
</div>
</div>
</div>
</section>
{/*  Mission & Vision  */}
<section className="px-4 sm:px-8 py-12 sm:py-24">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16">
<div className="space-y-8">
<div className="flex gap-6">
<div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-3xl">target</span>
</div>
<div>
<h3 className="text-2xl font-bold font-headline mb-4 uppercase tracking-wider">Mission</h3>
<p className="text-on-surface-variant leading-relaxed">To empower businesses through disruptive digital strategies that foster genuine connection, sustainable growth, and measurable ROI in an ever-evolving marketplace.</p>
</div>
</div>
</div>
<div className="space-y-8">
<div className="flex gap-6">
<div className="flex-shrink-0 w-14 h-14 rounded-xl bg-tertiary-container/10 flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary-container text-3xl">visibility</span>
</div>
<div>
<h3 className="text-2xl font-bold font-headline mb-4 uppercase tracking-wider">Vision</h3>
<p className="text-on-surface-variant leading-relaxed">To become the gold standard of digital excellence in India, where technology and human creativity converge to solve the most complex brand challenges.</p>
</div>
</div>
</div>
</div>
</section>
{/*  Leadership Messages  */}
<section className="px-4 sm:px-8 py-12 sm:py-24 bg-surface-container-lowest">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-bold font-headline mb-8 sm:mb-16 text-center">Leadership Messages</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/*  Founder  */}
<div className="bg-surface-container-high p-5 sm:p-8 rounded-2xl border border-outline-variant/5">
<div className="w-20 h-20 rounded-full overflow-hidden mb-6 ring-4 ring-primary/20 relative">
<Image className="w-full h-full object-cover" alt="Aryan Varma - Founder & CEO" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJSdNF5bCbka75fYJDEPi0zXAU2KCBPpYlU9enKPpw3uC-a1k-on8IanIoWzpTrc0R_dGAxPYqJt4i00FBa4Anj1WxCqJzzpWiEbv5uSZWwd03VEzliQEw4BrfQvHaMI4aTrbME_92CQ7hrpr_EtZSQBW7vXuFkE3W88BMDNwUksgfFAFpToL1ja0-0R7v2wXCq8Vjji-d1SPmZtLgK0kKircg9MAM8Pp_o4F89vHRTTeVz5J3knoHQRbjXCizBzqVVHBByuoP3bg" fill sizes="80px" loading="lazy" />
</div>
<p className="text-on-surface italic mb-8 leading-relaxed">&quot;Digital growth isn&apos;t just about traffic; it&apos;s about building lasting legacies for our clients through innovation and integrity.&quot;</p>
<div>
<div className="font-bold font-headline text-lg">Aryan Varma</div>
<div className="text-primary text-sm font-medium">Founder &amp; CEO</div>
</div>
</div>
{/*  Co-Founder 1  */}
<div className="bg-surface-container-high p-5 sm:p-8 rounded-2xl border border-outline-variant/5">
<div className="w-20 h-20 rounded-full overflow-hidden mb-6 ring-4 ring-primary/20 relative">
<Image className="w-full h-full object-cover" alt="Meera Shah - Co-Founder, Creative Head" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL9OUzxbhRy2MtWz2vGY87ykzTsLNh_TmQUUNY9QUxYdblWQQSta7R1oouoPAnVzlnswMXV3bMVjOwF36PwgTmszxg585XzeTMSpkMES9gltpHnba2eQK27V54ukcGmOd-L37KjXGwM8YpbqLyLmL6qmy5uzEwC_zUUkbn3hvCO_v_Nqhga6VkZbS_1JORW2FiRkHDSOiovdMB1GmCdFmE_rwTphY5FkLy9nEIneF0s42SS1wbqH0i7C1poVb3mZtz_koRBzvXh4g" fill sizes="80px" loading="lazy" />
</div>
<p className="text-on-surface italic mb-8 leading-relaxed">&quot;We believe in the power of data-driven creativity. Every pixel we place has a purpose and a goal.&quot;</p>
<div>
<div className="font-bold font-headline text-lg">Meera Shah</div>
<div className="text-primary text-sm font-medium">Co-Founder, Creative Head</div>
</div>
</div>
{/*  Co-Founder 2  */}
<div className="bg-surface-container-high p-5 sm:p-8 rounded-2xl border border-outline-variant/5">
<div className="w-20 h-20 rounded-full overflow-hidden mb-6 ring-4 ring-primary/20 relative">
<Image className="w-full h-full object-cover" alt="Rohan Patel - Co-Founder, CTO" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHOKiHczlyRKA9lkHT6pzqgO5rY3TrW1Aj6H_tDc96My2SN_YJ9_ge2cissxubXbZrhUuhOWHU4JicMrLekiAM2c6blcaAiphjfT3m2kzHe3JGXPjTtuO1pB5jubmTOGQSlUbzTuWAxW8OMTY8xZ1CRM8HWQqLV0RqK_8x29M4Ugc4a-KtniGCFuLHiDtVlsH-otAOSDcou8s4zJPxVSubdvWwz1IxPzlTIsP4PPhaFmQBZBgEoxcKM9mv2e7YNMIeqohIySC699k" fill sizes="80px" loading="lazy" />
</div>
<p className="text-on-surface italic mb-8 leading-relaxed">&quot;Technology is the engine, but strategy is the driver. At Veyber, we master both to ensure your brand reaches its destination.&quot;</p>
<div>
<div className="font-bold font-headline text-lg">Rohan Patel</div>
<div className="text-primary text-sm font-medium">Co-Founder, CTO</div>
</div>
</div>
</div>
</div>
</section>
{/*  Why Choose Veyber & Approach  */}
<section className="px-4 sm:px-8 py-12 sm:py-24">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-bold font-headline mb-6 sm:mb-8">Why Choose Veyber?</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-1">verified</span>
<div>
<h4 className="font-bold text-lg mb-1">Deep Local Roots</h4>
<p className="text-on-surface-variant text-sm">We understand the Vadodara market dynamics better than anyone, offering localized strategies that resonate.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-1">verified</span>
<div>
<h4 className="font-bold text-lg mb-1">Data-First Methodology</h4>
<p className="text-on-surface-variant text-sm">Every decision is backed by analytics, ensuring your marketing budget is invested, not just spent.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-1">verified</span>
<div>
<h4 className="font-bold text-lg mb-1">Full-Stack Solutions</h4>
<p className="text-on-surface-variant text-sm">From SEO to complex web development, we provide end-to-end digital transformation.</p>
</div>
</li>
</ul>
</div>
<div className="bg-surface-container p-6 sm:p-10 rounded-3xl border border-outline-variant/10 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full filter blur-3xl"></div>
<h2 className="text-3xl sm:text-4xl font-bold font-headline mb-6 sm:mb-8">Our Approach</h2>
<div className="space-y-8 relative z-10">
<div className="flex items-center gap-6">
<span className="text-4xl font-black text-outline-variant/30 font-headline">01</span>
<p className="font-medium">Discover &amp; Audit: Understanding your unique DNA.</p>
</div>
<div className="flex items-center gap-6">
<span className="text-4xl font-black text-outline-variant/30 font-headline">02</span>
<p className="font-medium">Strategize: Crafting a bespoke roadmap for growth.</p>
</div>
<div className="flex items-center gap-6">
<span className="text-4xl font-black text-outline-variant/30 font-headline">03</span>
<p className="font-medium">Execute: High-precision implementation across channels.</p>
</div>
<div className="flex items-center gap-6">
<span className="text-4xl font-black text-outline-variant/30 font-headline">04</span>
<p className="font-medium">Optimize: Real-time scaling based on performance data.</p>
</div>
</div>
</div>
</div>
</section>
{/*  Who We Work With & Commitment  */}
<section className="px-4 sm:px-8 py-12 sm:py-24 bg-surface-container-low text-center">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-bold font-headline mb-6">Who We Work With</h2>
<p className="text-base sm:text-lg text-on-surface-variant mb-10 sm:mb-12">From Vadodara&apos;s promising startups to established manufacturing giants across Gujarat, we partner with visionaries who are ready to scale.</p>
<div className="flex flex-wrap justify-center gap-4 mb-10 sm:mb-24 opacity-60">
<span className="px-6 py-2 bg-surface-container-highest rounded-full text-xs font-bold tracking-widest uppercase">E-Commerce</span>
<span className="px-6 py-2 bg-surface-container-highest rounded-full text-xs font-bold tracking-widest uppercase">Real Estate</span>
<span className="px-6 py-2 bg-surface-container-highest rounded-full text-xs font-bold tracking-widest uppercase">Education</span>
<span className="px-6 py-2 bg-surface-container-highest rounded-full text-xs font-bold tracking-widest uppercase">Healthcare</span>
<span className="px-6 py-2 bg-surface-container-highest rounded-full text-xs font-bold tracking-widest uppercase">Manufacturing</span>
</div>
<div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-container/10 border border-primary/20">
<h3 className="text-xl sm:text-2xl font-bold font-headline mb-4 uppercase tracking-widest">Our Commitment</h3>
<p className="text-base sm:text-lg leading-relaxed text-on-surface">We commit to transparency, relentless innovation, and a results-oriented mindset. When you work with Veyber, you aren&apos;t just hiring an agency; you&apos;re gaining a growth partner dedicated to your long-term success.</p>
</div>
</div>
</section>
{/*  FAQ Section  */}
<section className="px-4 sm:px-8 py-12 sm:py-24 max-w-4xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-bold font-headline mb-8 sm:mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
<h4 className="font-bold text-lg mb-2">Why is Veyber considered the best digital marketing company in Vadodara?</h4>
<p className="text-on-surface-variant text-sm">We combine global digital standards with deep local market insights, ensuring strategies that are both high-tech and culturally relevant.</p>
</div>
<div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
<h4 className="font-bold text-lg mb-2">Do you work with startups in Gujarat?</h4>
<p className="text-on-surface-variant text-sm">Absolutely. We have specialized packages for early-stage companies looking to establish a dominant digital presence from day one.</p>
</div>
<div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
<h4 className="font-bold text-lg mb-2">How long does it take to see results?</h4>
<p className="text-on-surface-variant text-sm">Digital growth is a marathon. While some improvements are visible within weeks, significant ROI usually compounds over 3 to 6 months of consistent optimization.</p>
</div>
</div>
</section>
</main>
      <Footer />
    </div>
  );
}