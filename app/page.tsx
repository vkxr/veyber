import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-[120px]">
{/*  Hero Section  */}
<section className="relative px-4 sm:px-8 py-12 sm:py-20 md:py-28 flex flex-col items-center overflow-hidden" style={{background:'radial-gradient(ellipse 110% 55% at 50% -5%, rgba(174,198,255,0.07) 0%, transparent 70%)'}}>
{/* Subtle grid overlay */}
<div className="pointer-events-none absolute inset-0 opacity-[0.022]" style={{backgroundImage:'linear-gradient(rgba(174,198,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(174,198,255,0.6) 1px,transparent 1px)',backgroundSize:'64px 64px'}}/>
{/*  Background Glows  */}
<div className="pointer-events-none absolute -top-[20%] -left-[15%] w-[780px] h-[780px] bg-primary/10 blur-[160px] rounded-full"/>
<div className="pointer-events-none absolute -bottom-[20%] -right-[10%] w-[680px] h-[680px] bg-secondary-container/12 blur-[140px] rounded-full"/>
<div className="pointer-events-none absolute top-[18%] left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-primary/5 blur-[110px] rounded-full"/>
<div className="relative z-10 text-center max-w-5xl mx-auto">
<span className="hero-content-anim inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/[0.08] text-primary font-bold text-xs tracking-widest uppercase mb-5 shadow-[0_0_24px_rgba(174,198,255,0.12)] backdrop-blur-sm">
  <span className="relative flex h-1.5 w-1.5 shrink-0"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"/><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"/></span>
  Scale Your Digital Empire
</span>
<h1 className="hero-content-anim text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-5 leading-[1.05] text-white max-w-[650px] mx-auto" style={{animationDelay:'0.1s'}}>
                    Build. Scale. <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{filter:'drop-shadow(0 0 28px rgba(174,198,255,0.3))'}}>Dominate</span> with Veyber
                </h1>
<p className="hero-content-anim text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-8 font-medium leading-relaxed" style={{animationDelay:'0.2s'}}>
                    We help businesses grow with powerful eCommerce solutions, strategic account management, high-converting content, and result-driven digital marketing.
                </p>
<div className="hero-content-anim flex flex-col sm:flex-row gap-4 justify-center" style={{animationDelay:'0.3s'}}>
<Link href="/contact" className="group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#aec6ff] to-[#4f8eff] text-[#001a42] font-bold rounded-full text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_52px_rgba(174,198,255,0.38)] active:scale-95 cursor-pointer">
  <span className="relative z-10">Get Free Consultation</span>
  <div className="absolute inset-0 translate-x-[-100%] skew-x-12 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-[100%] transition-transform duration-700"/>
</Link>
<Link href="/services" className="px-6 sm:px-8 py-3.5 sm:py-4 text-white font-bold rounded-full text-base sm:text-lg border border-white/12 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/[0.08] hover:shadow-[0_0_28px_rgba(174,198,255,0.10)] transition-all duration-300 cursor-pointer">
                        View Our Services
                    </Link>
</div>
</div>
{/*  Premium Visual  */}
<div className="hero-content-anim hidden sm:block mt-16 sm:mt-20 w-full max-w-6xl mx-auto relative px-4" style={{animationDelay:'0.45s'}}>
{/* Radial glow behind dashboard */}
<div className="pointer-events-none absolute inset-x-8 -top-20 h-[520px] rounded-full bg-primary/10 blur-[100px]"/>
<div className="pointer-events-none absolute inset-x-32 top-1/3 h-[200px] rounded-full bg-[#4f8eff]/8 blur-[60px]"/>
{/* Float + deep shadow wrapper */}
<div className="hero-dashboard-float" style={{filter:'drop-shadow(0 56px 100px rgba(0,0,0,0.70)) drop-shadow(0 0 80px rgba(174,198,255,0.09))'}}>
<div className="bg-surface-container-low rounded-3xl border border-primary/12 shadow-2xl p-4 overflow-hidden" style={{transform:'perspective(1600px) rotateX(4.5deg)'}}>

{/* Coded Dashboard Mockup — crisp at every resolution, matches site theme */}
<div className="force-dark w-full rounded-2xl overflow-hidden border border-outline-variant/10 bg-[#0b0c1f]" style={{fontFamily:'Inter,sans-serif'}}>
  {/* Window chrome */}
  <div className="flex items-center justify-between px-4 py-2.5 bg-[#0d0e21] border-b border-white/5">
    <div className="flex gap-1.5">
      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"/>
      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"/>
      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"/>
    </div>
    <span className="text-[10px] text-white/25 tracking-widest font-medium uppercase">Veyber Analytics Pro</span>
    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#aec6ff] to-[#4f8eff] opacity-70"/>
  </div>

  {/* Dashboard layout */}
  <div className="flex" style={{height:'420px'}}>
    {/* Sidebar */}
    <div className="w-10 md:w-48 bg-[#0d0e21] border-r border-white/5 flex flex-col shrink-0 py-3">
      <div className="px-3 pb-3 mb-2 border-b border-white/5 hidden md:flex items-center gap-2">
        {/* Mini V logo mark */}
        <svg width="18" height="16" viewBox="0 0 42 36" fill="none" aria-hidden="true">
          <polygon points="0,1 11,1 21,35 10,35" fill="#4f8eff"/>
          <polygon points="21,35 31,1 42,1 32,35" fill="#4f8eff"/>
        </svg>
        <span className="text-[11px] font-black text-white tracking-tight">EYBER</span>
      </div>
      <div className="flex flex-col gap-0.5 px-2 mt-1">
        <div className="flex items-center gap-2.5 px-2 py-2 rounded-lg bg-[#aec6ff]/10 text-[#aec6ff]">
          <span className="material-symbols-outlined" style={{fontSize:'15px'}}>grid_view</span>
          <span className="text-[10px] font-semibold hidden md:block">Overview</span>
        </div>
        <div className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-white/25">
          <span className="material-symbols-outlined" style={{fontSize:'15px'}}>shopping_bag</span>
          <span className="text-[10px] hidden md:block">Orders</span>
        </div>
        <div className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-white/25">
          <span className="material-symbols-outlined" style={{fontSize:'15px'}}>inventory_2</span>
          <span className="text-[10px] hidden md:block">Products</span>
        </div>
        <div className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-white/25">
          <span className="material-symbols-outlined" style={{fontSize:'15px'}}>bar_chart</span>
          <span className="text-[10px] hidden md:block">Analytics</span>
        </div>
        <div className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-white/25">
          <span className="material-symbols-outlined" style={{fontSize:'15px'}}>campaign</span>
          <span className="text-[10px] hidden md:block">Marketing</span>
        </div>
      </div>
    </div>

    {/* Main content */}
    <div className="flex-1 p-3 md:p-4 flex flex-col gap-3 overflow-hidden bg-[#111225]">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-bold text-white">Performance Overview</div>
          <div className="text-[9px] text-white/35">Last 30 days · Updated just now</div>
        </div>
        <div className="flex gap-1.5">
          <div className="px-2.5 py-1 rounded-full text-[8px] bg-[#1d1e32] text-white/35 border border-white/5">Export</div>
          <div className="px-2.5 py-1 rounded-full text-[8px] bg-[#aec6ff]/15 text-[#aec6ff] border border-[#aec6ff]/20 font-bold">+ Report</div>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-4 gap-2">
        <div className="bg-[#1d1e32] rounded-xl p-2.5 border border-white/5">
          <div className="text-[7px] text-white/35 mb-1 uppercase tracking-wider">Revenue</div>
          <div className="text-[13px] font-black text-white leading-none mb-1">$2.4M</div>
          <div className="text-[8px] text-[#4ade80] font-semibold flex items-center gap-0.5">
            <span className="material-symbols-outlined" style={{fontSize:'9px'}}>arrow_upward</span>+32%
          </div>
        </div>
        <div className="bg-[#1d1e32] rounded-xl p-2.5 border border-white/5">
          <div className="text-[7px] text-white/35 mb-1 uppercase tracking-wider">Orders</div>
          <div className="text-[13px] font-black text-white leading-none mb-1">12.8K</div>
          <div className="text-[8px] text-[#4ade80] font-semibold flex items-center gap-0.5">
            <span className="material-symbols-outlined" style={{fontSize:'9px'}}>arrow_upward</span>+18%
          </div>
        </div>
        <div className="bg-[#1d1e32] rounded-xl p-2.5 border border-white/5">
          <div className="text-[7px] text-white/35 mb-1 uppercase tracking-wider">YoY Growth</div>
          <div className="text-[13px] font-black text-white leading-none mb-1">148%</div>
          <div className="text-[8px] text-[#4ade80] font-semibold flex items-center gap-0.5">
            <span className="material-symbols-outlined" style={{fontSize:'9px'}}>arrow_upward</span>+47pts
          </div>
        </div>
        <div className="bg-[#1d1e32] rounded-xl p-2.5 border border-white/5">
          <div className="text-[7px] text-white/35 mb-1 uppercase tracking-wider">Conv. Rate</div>
          <div className="text-[13px] font-black text-white leading-none mb-1">4.2%</div>
          <div className="text-[8px] text-[#4ade80] font-semibold flex items-center gap-0.5">
            <span className="material-symbols-outlined" style={{fontSize:'9px'}}>arrow_upward</span>+0.8%
          </div>
        </div>
      </div>

      {/* Chart row */}
      <div className="flex gap-2.5 flex-1 min-h-0">
        {/* Area chart */}
        <div className="flex-1 bg-[#1d1e32] rounded-xl p-3 border border-white/5 flex flex-col min-w-0">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[9px] font-bold text-white">Revenue Trend</div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1"><div className="w-3 h-0.5 rounded bg-[#aec6ff]"/><span className="text-[7px] text-white/35">2025</span></div>
              <div className="flex items-center gap-1"><div className="w-3 h-0.5 rounded bg-white/15"/><span className="text-[7px] text-white/20">2024</span></div>
            </div>
          </div>
          <div className="flex-1 relative">
            <svg viewBox="0 0 280 110" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="vHeroGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#aec6ff" stopOpacity="0.28"/>
                  <stop offset="100%" stopColor="#aec6ff" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <line x1="0" y1="27" x2="280" y2="27" stroke="#ffffff06" strokeWidth="1"/>
              <line x1="0" y1="55" x2="280" y2="55" stroke="#ffffff06" strokeWidth="1"/>
              <line x1="0" y1="82" x2="280" y2="82" stroke="#ffffff06" strokeWidth="1"/>
              {/* 2024 comparison line */}
              <path d="M0,90 L28,87 L56,83 L84,79 L112,74 L140,70 L168,65 L196,60 L224,55 L252,51 L280,48"
                fill="none" stroke="#ffffff20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 3"/>
              {/* 2025 area fill */}
              <path d="M0,100 L28,96 L56,90 L84,82 L112,72 L140,60 L168,50 L196,40 L224,30 L252,18 L280,10 L280,110 L0,110 Z"
                fill="url(#vHeroGrad)"/>
              {/* 2025 line */}
              <path d="M0,100 L28,96 L56,90 L84,82 L112,72 L140,60 L168,50 L196,40 L224,30 L252,18 L280,10"
                fill="none" stroke="#aec6ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Highlight dot */}
              <circle cx="252" cy="18" r="3.5" fill="#111225" stroke="#aec6ff" strokeWidth="2"/>
              <circle cx="252" cy="18" r="7" fill="#aec6ff" fillOpacity="0.15"/>
              {/* Tooltip */}
              <rect x="218" y="1" width="52" height="20" rx="4" fill="#27283d"/>
              <text x="244" y="15" textAnchor="middle" fill="#aec6ff" fontSize="7.5" fontWeight="700">$287K</text>
            </svg>
          </div>
          <div className="flex justify-between pt-1">
            {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'].map((m,i) => (
              <span key={i} className="text-[6.5px] text-white/20">{m}</span>
            ))}
          </div>
        </div>

        {/* Right panel */}
        <div className="w-28 md:w-40 flex flex-col gap-2 shrink-0">
          {/* Channels donut */}
          <div className="bg-[#1d1e32] rounded-xl p-2.5 border border-white/5">
            <div className="text-[9px] font-bold text-white mb-2">Channels</div>
            <div className="flex items-center gap-2">
              {/* circumference of r=14 ≈ 87.96 */}
              <svg viewBox="0 0 36 36" className="w-10 h-10 shrink-0" style={{transform:'rotate(-90deg)'}}>
                <circle cx="18" cy="18" r="14" fill="none" stroke="#323348" strokeWidth="4"/>
                <circle cx="18" cy="18" r="14" fill="none" stroke="#aec6ff" strokeWidth="4" strokeDasharray="39.6 48.4" strokeDashoffset="0"/>
                <circle cx="18" cy="18" r="14" fill="none" stroke="#4f8eff" strokeWidth="4" strokeDasharray="26.4 61.6" strokeDashoffset="-39.6"/>
                <circle cx="18" cy="18" r="14" fill="none" stroke="#f0661b" strokeWidth="4" strokeDasharray="22 66" strokeDashoffset="-66"/>
              </svg>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#aec6ff]"/><span className="text-[7px] text-white/45">Amazon 45%</span></div>
                <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#4f8eff]"/><span className="text-[7px] text-white/45">Shopify 30%</span></div>
                <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#f0661b]"/><span className="text-[7px] text-white/45">Other 25%</span></div>
              </div>
            </div>
          </div>

          {/* Top brands */}
          <div className="bg-[#1d1e32] rounded-xl p-2.5 border border-white/5 flex-1">
            <div className="text-[9px] font-bold text-white mb-2.5">Top Brands</div>
            <div className="flex flex-col gap-2.5">
              {[
                {name:'NovaTech Pro', rev:'$82K', pct:82},
                {name:'UrbanEdge', rev:'$61K', pct:61},
                {name:'ZenHome Co.', rev:'$44K', pct:44},
                {name:'PureLife', rev:'$29K', pct:29},
              ].map((b,i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-[7px] text-white/45 truncate">{b.name}</span>
                    <span className="text-[7px] text-[#aec6ff] font-bold ml-1 shrink-0">{b.rev}</span>
                  </div>
                  <div className="h-1 bg-[#323348] rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#aec6ff] to-[#4f8eff]" style={{width:`${b.pct}%`}}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>{/* closes hero-dashboard-float */}

{/* ── Floating stat cards (glassmorphism) ── */}

{/* Card 1 — Growth · top-right */}
<div className="stat-card-1 absolute -top-7 right-2 md:-right-8 hidden md:flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-white/12 bg-white/[0.055] backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] z-20">
  <div className="w-9 h-9 rounded-xl bg-[#4ade80]/15 border border-[#4ade80]/20 flex items-center justify-center shrink-0">
    <span className="material-symbols-outlined text-[#4ade80] text-[18px]">trending_up</span>
  </div>
  <div>
    <p className="text-[9px] text-white/40 uppercase tracking-wider font-semibold leading-none mb-1">YoY Growth</p>
    <p className="text-[17px] font-black text-white leading-none tracking-tight">+148%</p>
  </div>
</div>

{/* Card 2 — Revenue · bottom-left */}
<div className="stat-card-2 absolute -bottom-6 left-2 md:-left-8 hidden md:flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-white/12 bg-white/[0.055] backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] z-20">
  <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0">
    <span className="material-symbols-outlined text-primary text-[18px]">paid</span>
  </div>
  <div>
    <p className="text-[9px] text-white/40 uppercase tracking-wider font-semibold leading-none mb-1">Monthly Revenue</p>
    <p className="text-[17px] font-black text-white leading-none tracking-tight">$287K</p>
  </div>
</div>

{/* Card 3 — Orders · left-center */}
<div className="stat-card-3 absolute top-[38%] -left-2 md:-left-14 hidden lg:flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-white/12 bg-white/[0.055] backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] z-20">
  <div className="w-9 h-9 rounded-xl bg-[#f0661b]/15 border border-[#f0661b]/20 flex items-center justify-center shrink-0">
    <span className="material-symbols-outlined text-[#f0661b] text-[18px]">shopping_bag</span>
  </div>
  <div>
    <p className="text-[9px] text-white/40 uppercase tracking-wider font-semibold leading-none mb-1">Total Orders</p>
    <p className="text-[17px] font-black text-white leading-none tracking-tight">12.8K</p>
  </div>
</div>

</div>{/* closes Premium Visual outer */}
</section>
{/*  About Section: Bento Grid  */}
<section className="px-4 sm:px-8 py-16 sm:py-32 bg-surface-container-low/50">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
<div className="lg:col-span-5 flex flex-col justify-center">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 sm:mb-8 tracking-tight">Who We Are</h2>
<p className="text-xl text-on-surface-variant mb-6 leading-relaxed">
                            At Veyber, we don’t just provide services — <span className="text-primary font-bold">we build growth systems.</span>
</p>
<p className="text-on-surface-variant mb-8 leading-relaxed">
                            Our mission is simple: Help businesses scale faster, smarter, and more profitably through elite digital strategies and technical execution.
                        </p>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-4">
<div className="p-2 bg-primary/10 rounded-lg"><span className="material-symbols-outlined text-primary" data-icon="verified">verified</span></div>
<div><p className="font-bold text-white">Elite Expertise</p><p className="text-sm text-on-surface-variant">Marketplace specialists across all major platforms.</p></div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-primary/10 rounded-lg"><span className="material-symbols-outlined text-primary" data-icon="rocket_launch">rocket_launch</span></div>
<div><p className="font-bold text-white">Growth Systems</p><p className="text-sm text-on-surface-variant">Scalable frameworks designed for long-term dominance.</p></div>
</div>
</div>
</div>
<div className="lg:col-span-7 grid grid-cols-2 gap-4">
<div className="bg-surface-container-high p-5 sm:p-8 rounded-3xl border border-outline-variant/10 flex flex-col justify-between">
<span className="material-symbols-outlined text-primary text-4xl sm:text-5xl mb-3 sm:mb-4" data-icon="shopping_cart">shopping_cart</span>
<h3 className="text-lg sm:text-2xl font-bold text-white">eCommerce Specialist</h3>
</div>
<div className="bg-surface-container-high p-5 sm:p-8 rounded-3xl border border-outline-variant/10 flex flex-col justify-between">
<span className="material-symbols-outlined text-primary text-4xl sm:text-5xl mb-3 sm:mb-4" data-icon="query_stats">query_stats</span>
<h3 className="text-lg sm:text-2xl font-bold text-white">Account Management</h3>
</div>
<div className="bg-surface-container-high p-5 sm:p-8 rounded-3xl border border-outline-variant/10 flex flex-col justify-between">
<span className="material-symbols-outlined text-primary text-4xl sm:text-5xl mb-3 sm:mb-4" data-icon="movie_edit">movie_edit</span>
<h3 className="text-lg sm:text-2xl font-bold text-white">Content Marketing</h3>
</div>
<div className="bg-surface-container-high p-5 sm:p-8 rounded-3xl border border-outline-variant/10 flex flex-col justify-between">
<span className="material-symbols-outlined text-primary text-4xl sm:text-5xl mb-3 sm:mb-4" data-icon="groups">groups</span>
<h3 className="text-lg sm:text-2xl font-bold text-white">Social Growth</h3>
</div>
</div>
</div>
</div>
</section>
{/*  Services Section  */}
<section className="px-4 sm:px-8 py-16 sm:py-32 bg-surface">
<div className="max-w-7xl mx-auto text-center mb-12 sm:mb-20">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">Strategic Services</h2>
<p className="text-on-surface-variant max-w-2xl mx-auto">Full-stack digital acceleration for modern brands who refuse to settle for average growth.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/*  eCommerce Development  */}
<div className="group bg-surface-container p-6 sm:p-10 rounded-[2rem] border border-outline-variant/10 hover:bg-surface-container-highest transition-all duration-300">
<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
<span className="material-symbols-outlined text-primary text-4xl group-hover:text-on-primary-container" data-icon="web">web</span>
</div>
<h3 className="text-2xl font-bold text-white mb-4">eCommerce Development</h3>
<p className="text-on-surface-variant leading-relaxed mb-6">High-performance storefronts built for conversion and speed. Shopify, WooCommerce, and Custom Headless solutions.</p>
</div>
{/*  Account Management  */}
<div className="group bg-surface-container p-6 sm:p-10 rounded-[2rem] border border-outline-variant/10 hover:bg-surface-container-highest transition-all duration-300">
<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
<span className="material-symbols-outlined text-primary text-4xl group-hover:text-on-primary-container" data-icon="inventory">inventory</span>
</div>
<h3 className="text-2xl font-bold text-white mb-4">eCommerce Account Management</h3>
<p className="text-on-surface-variant leading-relaxed mb-6">Full management of Amazon, Walmart, and eBay marketplaces to maximize revenue and organic visibility.</p>
</div>
{/*  Social Media Handling  */}
<div className="group bg-surface-container p-6 sm:p-10 rounded-[2rem] border border-outline-variant/10 hover:bg-surface-container-highest transition-all duration-300">
<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
<span className="material-symbols-outlined text-primary text-4xl group-hover:text-on-primary-container" data-icon="share">share</span>
</div>
<h3 className="text-2xl font-bold text-white mb-4">Social Media Handling</h3>
<p className="text-on-surface-variant leading-relaxed mb-6">Strategic brand positioning and community building across TikTok, Instagram, and LinkedIn.</p>
</div>
{/*  Content Marketing  */}
<div className="group bg-surface-container p-6 sm:p-10 rounded-[2rem] border border-outline-variant/10 hover:bg-surface-container-highest transition-all duration-300">
<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
<span className="material-symbols-outlined text-primary text-4xl group-hover:text-on-primary-container" data-icon="edit_note">edit_note</span>
</div>
<h3 className="text-2xl font-bold text-white mb-4">Content Marketing</h3>
<p className="text-on-surface-variant leading-relaxed mb-6">SEO-driven articles, video scripts, and ad copy that turns strangers into loyal customers.</p>
</div>
{/*  Business Consulting  */}
<div className="group bg-surface-container p-6 sm:p-10 rounded-[2rem] border border-outline-variant/10 hover:bg-surface-container-highest transition-all duration-300">
<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
<span className="material-symbols-outlined text-primary text-4xl group-hover:text-on-primary-container" data-icon="psychology">psychology</span>
</div>
<h3 className="text-2xl font-bold text-white mb-4">Business Consulting</h3>
<p className="text-on-surface-variant leading-relaxed mb-6">Executive strategy to streamline operations and identify untapped growth opportunities.</p>
</div>
{/*  Call to Action Card  */}
<div className="relative bg-gradient-to-br from-primary to-primary-container p-6 sm:p-10 rounded-[2rem] overflow-hidden flex flex-col justify-center">
<div className="relative z-10">
<h3 className="text-3xl font-black text-on-primary-container mb-4">Need a Custom Strategy?</h3>
<p className="text-on-primary-container/80 mb-8 font-medium">Let's craft a solution tailored specifically to your unique business goals.</p>
<Link href="/contact" className="bg-surface text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform active:scale-95 cursor-pointer inline-block">Book Now</Link>
</div>
<div className="absolute -bottom-10 -right-10 opacity-20"><span className="material-symbols-outlined text-[150px]" data-icon="auto_awesome">auto_awesome</span></div>
</div>
</div>
</section>
{/*  Why Choose Veyber: Asymmetric Layout  */}
<section className="px-4 sm:px-8 py-16 sm:py-32 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
<div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 sm:mb-10 tracking-tight leading-tight">The Veyber Advantage</h2>
<div className="space-y-8">
<div className="flex items-start gap-6 group">
<div className="mt-1 flex-shrink-0 w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center border border-primary/20 text-primary transition-all group-hover:shadow-[0_0_15px_rgba(174,198,255,0.3)]">
<span className="material-symbols-outlined" data-icon="data_thresholding">data_thresholding</span>
</div>
<div>
<h4 className="text-xl font-bold text-white mb-2">Data-Driven Strategies</h4>
<p className="text-on-surface-variant">We move only when the data says so. Every campaign is backed by quantitative insights.</p>
</div>
</div>
<div className="flex items-start gap-6 group">
<div className="mt-1 flex-shrink-0 w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center border border-primary/20 text-primary transition-all group-hover:shadow-[0_0_15px_rgba(174,198,255,0.3)]">
<span className="material-symbols-outlined" data-icon="target">target</span>
</div>
<div>
<h4 className="text-xl font-bold text-white mb-2">ROI-Oriented Execution</h4>
<p className="text-on-surface-variant">Vanity metrics don't pay bills. We focus on the bottom line: profit and growth.</p>
</div>
</div>
<div className="flex items-start gap-6 group">
<div className="mt-1 flex-shrink-0 w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center border border-primary/20 text-primary transition-all group-hover:shadow-[0_0_15px_rgba(174,198,255,0.3)]">
<span className="material-symbols-outlined" data-icon="chat">chat</span>
</div>
<div>
<h4 className="text-xl font-bold text-white mb-2">Transparent Communication</h4>
<p className="text-on-surface-variant">No jargon. No hidden fees. Just clear reporting and consistent updates.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="force-dark aspect-square bg-neutral-900 rounded-[3rem] border border-white/10 relative z-10 flex flex-col justify-center overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-[0_24px_64px_rgba(0,0,0,0.55)] hover:border-primary/30">
{/* High-quality background — city towers reaching up, matches "scale" narrative */}
<img
  alt="Scale Without Friction — glass skyscrapers reaching upward"
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
/>
{/* Dark gradient so text is readable in both light and dark mode */}
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25 transition-all duration-500 group-hover:from-black/95"></div>
{/* Blue accent tint — ties image to brand palette */}
<div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
{/* Hover spotlight shimmer */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
{/* Content */}
<div className="relative z-20 p-6 sm:p-12">
<h3 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">Scale Without<br/>Friction.</h3>
<p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-sm leading-relaxed drop-shadow">Industry-focused approach combined with scalable solutions for high-performance brands.</p>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 bg-primary/30 text-white border border-primary/40 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">Global Focus</span>
<span className="px-4 py-2 bg-white/10 text-white border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">Industry Led</span>
</div>
</div>
</div>
{/*  Glass decoration  */}
<div className="absolute -bottom-8 -left-8 w-48 h-48 bg-surface-variant/40 backdrop-blur-2xl rounded-3xl border border-white/10 z-20 shadow-2xl hidden md:flex flex-col items-center justify-center gap-2 p-6 text-center hover:bg-surface-variant/60 transition-colors duration-300">
  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-2">
    <span className="material-symbols-outlined text-primary text-2xl" data-icon="rocket_launch">rocket_launch</span>
  </div>
  <p className="text-3xl font-black text-white">10x</p>
  <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Growth Multiplier</p>
</div>
</div>
</div>
</div>
</section>
{/*  Process Section  */}
<section className="px-4 sm:px-8 py-16 sm:py-32 bg-surface">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 sm:mb-24">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">How We Work</h2>
<p className="text-on-surface-variant">A precision-engineered workflow designed for maximum efficiency and results.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{/*  Step 1  */}
<div className="relative p-5 sm:p-8 bg-surface-container-low rounded-3xl border border-outline-variant/10 overflow-hidden group">
<div className="absolute top-3 right-3 text-5xl sm:text-6xl font-black text-outline-variant opacity-20">01</div>
<h4 className="text-base sm:text-xl font-bold text-white mb-3 sm:mb-4 pt-8 sm:pt-10">Understanding Your Business</h4>
<p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">We dive deep into your market position, competitors, and growth bottlenecks.</p>
</div>
{/*  Step 2  */}
<div className="relative p-5 sm:p-8 bg-surface-container rounded-3xl border border-outline-variant/10 overflow-hidden group">
<div className="absolute top-3 right-3 text-5xl sm:text-6xl font-black text-outline-variant opacity-20">02</div>
<h4 className="text-base sm:text-xl font-bold text-white mb-3 sm:mb-4 pt-8 sm:pt-10">Strategy Development</h4>
<p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">Crafting a bespoke roadmap focused on ROI and sustainable scalability.</p>
</div>
{/*  Step 3  */}
<div className="relative p-5 sm:p-8 bg-surface-container-high rounded-3xl border border-outline-variant/10 overflow-hidden group">
<div className="absolute top-3 right-3 text-5xl sm:text-6xl font-black text-outline-variant opacity-20">03</div>
<h4 className="text-base sm:text-xl font-bold text-white mb-3 sm:mb-4 pt-8 sm:pt-10">Execution &amp; Optimization</h4>
<p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">Launch with precision. Constant A/B testing and refining for peak performance.</p>
</div>
{/*  Step 4  */}
<div className="relative p-5 sm:p-8 bg-surface-container-highest rounded-3xl border border-outline-variant/10 overflow-hidden group">
<div className="absolute top-3 right-3 text-5xl sm:text-6xl font-black text-outline-variant opacity-20">04</div>
<h4 className="text-base sm:text-xl font-bold text-white mb-3 sm:mb-4 pt-8 sm:pt-10">Continuous Growth Tracking</h4>
<p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">Scaling winning formulas and exploring new horizons for your brand.</p>
</div>
</div>
</div>
</section>
{/*  Testimonials  */}
<section className="px-4 sm:px-8 py-16 sm:py-32 bg-surface-container-low/50 relative overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 sm:mb-16 gap-6 sm:gap-8">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">Partnering for<br/>Success</h2>
<div className="flex gap-4">
<button className="w-14 h-14 rounded-full border border-outline-variant/20 flex items-center justify-center text-white hover:bg-surface-variant transition-all">
<span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
</button>
<button className="w-14 h-14 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary/10 transition-all">
<span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-surface-container-high p-6 sm:p-10 rounded-[2.5rem] border border-outline-variant/10">
<div className="flex gap-1 mb-6 text-primary">
<span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
</div>
<p className="text-lg sm:text-2xl font-medium text-white mb-8 sm:mb-10 leading-relaxed italic">"Veyber completely transformed our Amazon presence. In 6 months, our monthly revenue tripled while our ACoS dropped by 15%."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-outline-variant overflow-hidden">
<img alt="Client Portrait" data-alt="Professional portrait of a male CEO in business attire, confident expression, soft corporate studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8-AXu7hTdd5AkhbTkbjP1Y6e93sOvWnbEgtDH1Zbnwv0IvYnXXHA6RxrJWPqnHpK5hSQmm2RTm7jaU20tB0_-SoVQixE5eKirfhPBKrR1nd2e1sDFHugBM1AVRyvPCVCIuFcbx37CmJr8dc9mtR34n7-xG02iK_e0qTcTEveNs01ycw_zcpBc9PLoG-sYuIlT442Nk0yyA8k20_oRNFdz8IS8ICzSHplXGqNXanqj-XvsW-uJDKEnaB9nlX--BFAvnQwI7dxyYv0"/>
</div>
<div>
<h5 className="font-bold text-white">David Chen</h5>
<p className="text-sm text-on-surface-variant">CEO, Modern Tech Solutions</p>
</div>
</div>
</div>
<div className="bg-surface-container-high p-6 sm:p-10 rounded-[2.5rem] border border-outline-variant/10">
<div className="flex gap-1 mb-6 text-primary">
<span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill">star</span>
</div>
<p className="text-lg sm:text-2xl font-medium text-white mb-8 sm:mb-10 leading-relaxed italic">"The team at Veyber understands growth systems better than anyone we've ever worked with. Their content marketing is top-tier."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-outline-variant overflow-hidden">
<img alt="Client Portrait" data-alt="Portrait of a female digital entrepreneur, creative professional style, warm natural lighting, confident smile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgMmZzX7BsjeHR91rDjm5pSYWPGq5ByWQYTx17Arp7s59S3eKMz-2S_5K5QXFEPXJqzsRL9tmSlk6Oq6pMg7AIuML9Ye4d7mirhc0uG-5LQ_euXuaT-RSTu32cgpCuse0Lmex-3fncQCXyzt4xsBm2hoeh2XAU8LiCjjDXrPxXVWsIK_34I_pKsV7mKfs5AqZ2Wx3IlQkf9aIglIZr8lfG__zXBih5HzhQLHUv95e2ZYmaDCJ58RWSMq_aCLp8_r2xrtct5IQLHkM"/>
</div>
<div>
<h5 className="font-bold text-white">Sarah Jenkins</h5>
<p className="text-sm text-on-surface-variant">Founder, Bloom Lifestyle</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Final CTA  */}
<section className="px-4 sm:px-8 py-16 sm:py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-primary/5"></div>
<div className="force-dark max-w-5xl mx-auto text-center relative z-10 bg-neutral-900 rounded-[2rem] sm:rounded-[3rem] border border-white/15 overflow-hidden">
{/* Background image — thriving team / business energy */}
<img
  alt="Ready to grow your business — energetic team celebrating success"
  className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85"
/>
{/* Rich dark overlay ensures perfect readability in both modes */}
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85"></div>
{/* Subtle blue brand tint at top */}
<div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent"></div>
{/* Content */}
<div className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-24">
<h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 sm:mb-8 tracking-tight drop-shadow-xl">Ready to grow your business?</h2>
<p className="text-base sm:text-xl text-white/75 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow">Let’s build something powerful together. Your journey to market dominance starts with a single conversation.</p>
<Link href="/contact" className="inline-flex items-center px-7 sm:px-10 py-3.5 sm:py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black rounded-full text-base sm:text-xl shadow-2xl hover:shadow-primary/40 transition-all active:scale-95 cursor-pointer group">
                    Get Free Strategy Call
                    <span className="material-symbols-outlined inline-block align-middle ml-2 group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</Link>
</div>
</div>
</section>
</main>
      <Footer />
    </div>
  );
}