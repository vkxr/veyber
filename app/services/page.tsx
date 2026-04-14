import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-[120px] pb-24">
{/*  Hero Section  */}
<header className="relative px-4 sm:px-8 pt-12 sm:pt-20 md:pt-28 mb-12 sm:mb-16 max-w-7xl mx-auto overflow-hidden">
<div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
<div className="relative z-10 max-w-3xl">
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/[0.08] text-primary font-bold text-xs tracking-widest uppercase mb-5">Elevate Your Presence</span>
<h1 className="text-3xl sm:text-5xl md:text-6xl font-headline font-extrabold tracking-tight text-white mb-5 leading-tight max-w-[650px]">
                    Our Digital Growth Services
                </h1>
<p className="text-base sm:text-lg text-on-surface-variant font-body leading-relaxed max-w-[540px]">
                    We provide end-to-end digital solutions designed for measurable growth and ROI. Leveraging high-performance data and creative excellence.
                </p>
</div>
</header>
{/*  Services Bento Grid  */}
<section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
{/*  eCommerce Dev & Account Management - Asymmetric Row  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/*  eCommerce Development  */}
<div id="ecommerce-dev" className="force-dark lg:col-span-7 group relative bg-neutral-900 rounded-2xl transition-all hover:-translate-y-1 overflow-hidden min-h-[320px] sm:min-h-[420px] flex flex-col">
{/* Background - online storefront / shopping experience */}
<img
  alt="eCommerce Development - laptop with online store"
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/30"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-50"></div>
<div className="relative z-10 flex flex-col h-full p-5 sm:p-8">
<div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/20">
<span className="material-symbols-outlined text-white" data-icon="shopping_cart">shopping_cart</span>
</div>
<h3 className="text-2xl font-headline font-bold text-white mb-4">eCommerce Development</h3>
<p className="text-white/70 mb-8 font-body">Custom-built online storefronts focused on conversion optimization and seamless user journeys.</p>
<ul className="space-y-3 mb-10 flex-grow">
<li className="flex items-center gap-3 text-sm text-white/75">
<span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span>
                                Custom Shopify &amp; WooCommerce Architecture
                            </li>
<li className="flex items-center gap-3 text-sm text-white/75">
<span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span>
                                UI/UX Design for Mobile-First Conversion
                            </li>
<li className="flex items-center gap-3 text-sm text-white/75">
<span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span>
                                Third-party API &amp; ERP Integrations
                            </li>
</ul>
<Link href="/contact" className="inline-flex items-center text-primary font-bold text-sm group/link cursor-pointer">
                            Learn More
                            <span className="material-symbols-outlined ml-2 transition-transform group-hover/link:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
</Link>
</div>
</div>
{/*  eCommerce Account Management  */}
<div id="account-management" className="force-dark lg:col-span-5 group relative bg-neutral-900 rounded-2xl transition-all hover:-translate-y-1 overflow-hidden min-h-[320px] sm:min-h-[420px] flex flex-col">
{/* Background - marketplace analytics / growth charts */}
<img
  alt="eCommerce Account Management - marketplace analytics dashboard"
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/35"></div>
<div className="absolute inset-0 bg-gradient-to-br from-secondary-container/30 via-transparent to-transparent opacity-50"></div>
<div className="relative z-10 flex flex-col h-full p-5 sm:p-8">
<div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/20">
<span className="material-symbols-outlined text-white" data-icon="trending_up">trending_up</span>
</div>
<h3 className="text-2xl font-headline font-bold text-white mb-4">eCommerce Account Management</h3>
<p className="text-white/70 mb-8 font-body">Strategic oversight of your marketplace presence to maximize organic and paid performance.</p>
<ul className="space-y-3 mb-10 flex-grow">
<li className="flex items-center gap-3 text-sm text-white/75">
<span className="material-symbols-outlined text-secondary text-lg" data-icon="monitoring">monitoring</span>
                            Amazon &amp; Walmart Marketplace Scaling
                        </li>
<li className="flex items-center gap-3 text-sm text-white/75">
<span className="material-symbols-outlined text-secondary text-lg" data-icon="monitoring">monitoring</span>
                            Inventory &amp; Logistics Strategy
                        </li>
</ul>
<Link href="/contact" className="inline-flex items-center text-secondary font-bold text-sm group/link mt-auto cursor-pointer">
                        Learn More
                        <span className="material-symbols-outlined ml-2 transition-transform group-hover/link:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
</Link>
</div>
</div>
</div>
{/*  Social Media, Content Marketing & Graphic Design  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/*  Social Media Handling  */}
<div id="social-media" className="force-dark relative rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[420px] flex items-end group">
{/* Background - social media strategy / content creation */}
<img
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  alt="Social Media Handling - social media strategy and content"
  src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=900&q=85"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/55 to-black/15"></div>
<div className="relative p-5 sm:p-8 w-full">
<h3 className="text-2xl font-headline font-bold text-white mb-3">Social Media Handling</h3>
<p className="text-white/70 mb-6 text-sm line-clamp-2">Building community and brand authority through data-driven social engagement.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white font-bold border border-white/20">Community Management</span>
<span className="px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white font-bold border border-white/20">Paid Social Ads</span>
</div>
<Link href="/contact" className="text-primary font-bold text-sm flex items-center cursor-pointer">
                            Learn More <span className="material-symbols-outlined ml-2" data-icon="arrow_forward">arrow_forward</span>
</Link>
</div>
</div>
{/*  Content Marketing  */}
<div id="content-marketing" className="force-dark relative bg-neutral-900 rounded-2xl overflow-hidden flex flex-col justify-between group border-l-4 border-primary min-h-[320px] sm:min-h-[420px]">
{/* Background — content creation / writing / editorial */}
<img
  alt="Content Marketing - laptop with coffee, content creation"
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=85"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/35"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-40"></div>
<div className="relative z-10 flex flex-col justify-between h-full p-5 sm:p-8">
<div>
<div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/20">
<span className="material-symbols-outlined text-white" data-icon="article">article</span>
</div>
<h3 className="text-2xl font-headline font-bold text-white mb-4">Content Marketing</h3>
<p className="text-white/70 mb-6 font-body">Crafting narratives that resonate, educate, and convert through multiple digital channels.</p>
<ul className="grid grid-cols-1 gap-3 mb-8">
<li className="flex items-start gap-3 text-sm text-white/75">
<span className="material-symbols-outlined text-primary text-lg mt-0.5" data-icon="edit_note">edit_note</span>
<span>SEO-Focused Editorial Strategy &amp; Copywriting</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/75">
<span className="material-symbols-outlined text-primary text-lg mt-0.5" data-icon="video_library">video_library</span>
<span>Short-form Video Production &amp; Creative Assets</span>
</li>
</ul>
</div>
<Link href="/contact" className="inline-flex items-center text-primary font-bold text-sm group/link cursor-pointer">
                        Learn More
                        <span className="material-symbols-outlined ml-2 transition-transform group-hover/link:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
</Link>
</div>
</div>
{/*  Graphic Design  */}
<div id="graphic-design" className="force-dark relative bg-neutral-900 rounded-2xl overflow-hidden flex flex-col justify-between group border-l-4 border-tertiary min-h-[320px] sm:min-h-[420px]">
{/* Background - graphic design workspace with vibrant colors */}
<img
  alt="Graphic Design - creative design workspace with colorful elements"
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=85"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/35"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-tertiary/20 via-transparent to-transparent opacity-40"></div>
<div className="relative z-10 flex flex-col justify-between h-full p-5 sm:p-8">
<div>
<div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/20">
<span className="material-symbols-outlined text-white" data-icon="palette">palette</span>
</div>
<h3 className="text-2xl font-headline font-bold text-white mb-4">Graphic Design</h3>
<p className="text-white/70 mb-6 font-body">Bold visuals that communicate instantly — from brand identity to campaign creatives that stop the scroll.</p>
<ul className="grid grid-cols-1 gap-3 mb-8">
<li className="flex items-start gap-3 text-sm text-white/75">
<span className="material-symbols-outlined text-tertiary text-lg mt-0.5" data-icon="brush">brush</span>
<span>Brand Identity, Logos &amp; Style Guides</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/75">
<span className="material-symbols-outlined text-tertiary text-lg mt-0.5" data-icon="image">image</span>
<span>Social Media Graphics &amp; Ad Creatives</span>
</li>
</ul>
</div>
<Link href="/contact" className="inline-flex items-center text-tertiary font-bold text-sm group/link cursor-pointer">
                        Learn More
                        <span className="material-symbols-outlined ml-2 transition-transform group-hover/link:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
</Link>
</div>
</div>
</div>
{/*  Business Consulting - Full Width  */}
<div id="business-consulting" className="force-dark relative bg-neutral-900 rounded-2xl overflow-hidden group border border-white/10">
{/* Background — professional strategy meeting / consulting */}
<img
  alt="Business Consulting - professional strategy meeting"
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85"
/>
<div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/50"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-tertiary/15 via-transparent to-transparent opacity-60"></div>
<div className="relative z-10 p-6 sm:p-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
<div>
<span className="text-tertiary font-headline font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Strategic Advisory</span>
<h3 className="text-2xl sm:text-3xl font-headline font-bold text-white mb-4 sm:mb-6">Business Consulting</h3>
<p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">High-level strategic planning to help businesses navigate the complexities of digital transformation and scaling.</p>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-tertiary shrink-0"></div>
<span className="text-white/85 font-medium">GTM (Go-to-Market) Strategy Development</span>
</div>
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-tertiary shrink-0"></div>
<span className="text-white/85 font-medium">Digital Infrastructure Audit &amp; Optimization</span>
</div>
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-tertiary shrink-0"></div>
<span className="text-white/85 font-medium">Growth Frameworks for Series A+ Startups</span>
</div>
</div>
</div>
{/* Right column — key outcome stats instead of image */}
<div className="grid grid-cols-2 gap-4">
<div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/15 flex flex-col gap-2">
<span className="text-2xl sm:text-3xl font-black text-white">3x</span>
<span className="text-xs text-white/60 uppercase tracking-widest font-bold">Revenue Growth</span>
</div>
<div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/15 flex flex-col gap-2">
<span className="text-2xl sm:text-3xl font-black text-white">60+</span>
<span className="text-xs text-white/60 uppercase tracking-widest font-bold">Brands Scaled</span>
</div>
<div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/15 flex flex-col gap-2">
<span className="text-2xl sm:text-3xl font-black text-white">90%</span>
<span className="text-xs text-white/60 uppercase tracking-widest font-bold">Client Retention</span>
</div>
<div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/15 flex flex-col gap-2">
<span className="text-2xl sm:text-3xl font-black text-white">$12M+</span>
<span className="text-xs text-white/60 uppercase tracking-widest font-bold">Revenue Driven</span>
</div>
</div>
</div>
<div className="mt-8 sm:mt-10">
<Link href="/contact" className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-bold transition-all border border-white/20 cursor-pointer">
                        Request a Strategic Audit
                        <span className="material-symbols-outlined ml-3" data-icon="insights">insights</span>
</Link>
</div>
</div>
</div>
</section>
{/*  CTA Section  */}
<section className="mt-12 px-4 sm:px-8 max-w-7xl mx-auto pb-8">
<div className="force-dark relative rounded-3xl overflow-hidden" style={{background:'linear-gradient(135deg,#0f1f6e 0%,#1a3bbf 35%,#2e5ee8 65%,#4f8eff 100%)'}}>
{/* Subtle grid texture */}
<div className="pointer-events-none absolute inset-0 opacity-[0.055]" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.9) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.9) 1px,transparent 1px)',backgroundSize:'52px 52px'}}/>
{/* Central oval glow — the main focal point */}
<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
  <div className="w-[700px] h-[260px] bg-white/10 blur-[90px] rounded-full"/>
</div>
{/* Corner accent glows */}
<div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 bg-[#aec6ff]/25 blur-[80px] rounded-full"/>
<div className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 bg-[#4f8eff]/30 blur-[80px] rounded-full"/>
{/* Decorative ring */}
<div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.06]"/>
<div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-white/[0.05]"/>
{/* Content */}
<div className="relative z-10 px-5 sm:px-8 py-10 sm:py-16 text-center">
{/* Live badge */}
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 text-white font-bold text-xs tracking-widest uppercase mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.08)]">
  <span className="relative flex h-1.5 w-1.5 shrink-0"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"/><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"/></span>
  Free Discovery Session
</span>
<h2 className="text-2xl sm:text-4xl md:text-5xl font-headline font-extrabold text-white mb-4 sm:mb-5 leading-tight tracking-tight">
  Ready to Scale Your<br/>Digital Presence?
</h2>
<p className="text-white/70 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
  Book a free 30-minute session with our growth experts and walk away with a custom roadmap for your brand.
</p>
{/* Social proof stats */}
<div className="flex justify-center items-center gap-8 mb-10 flex-wrap">
  <div className="text-center">
    <div className="text-2xl font-black text-white leading-none mb-1">500+</div>
    <div className="text-[11px] text-white/50 uppercase tracking-widest font-semibold">Brands Served</div>
  </div>
  <div className="w-px h-8 bg-white/20"/>
  <div className="text-center">
    <div className="text-2xl font-black text-white leading-none mb-1">$50M+</div>
    <div className="text-[11px] text-white/50 uppercase tracking-widest font-semibold">Revenue Generated</div>
  </div>
  <div className="w-px h-8 bg-white/20"/>
  <div className="text-center">
    <div className="text-2xl font-black text-white leading-none mb-1">30 min</div>
    <div className="text-[11px] text-white/50 uppercase tracking-widest font-semibold">Free Strategy Call</div>
  </div>
</div>
{/* Glowing CTA button */}
<div className="relative inline-block mb-5">
  <div className="absolute inset-0 bg-white/25 blur-2xl rounded-full scale-110 pointer-events-none"/>
  <Link href="/contact" className="relative group inline-flex items-center bg-white text-[#111225] px-8 sm:px-12 py-3.5 sm:py-5 rounded-full font-headline font-bold text-base sm:text-lg shadow-[0_8px_32px_rgba(255,255,255,0.25)] hover:shadow-[0_8px_48px_rgba(255,255,255,0.40)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
    Schedule Consultation
    <span className="material-symbols-outlined inline-block align-middle ml-2 text-base group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
  </Link>
</div>
<p className="text-white/35 text-sm">No commitment required · Response within 24 hours</p>
</div>
</div>
</section>
</main>
      <Footer />
    </div>
  );
}
