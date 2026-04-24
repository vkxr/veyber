import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'DevOps & Deployment Services in Gujarat | Server Setup & CI/CD – Veyber',
  description: 'Veyber provides DevOps and deployment services for businesses in Vadodara, Ahmedabad & Gujarat. Server setup, CI/CD pipelines, Docker, application deployment & monitoring for MERN stack.',
  keywords: 'DevOps services Gujarat, web application deployment Vadodara, server setup Ahmedabad, CI/CD pipeline setup India, MERN stack deployment Gujarat',
  openGraph: {
    title: 'DevOps & Deployment Services in Gujarat | Server Setup & CI/CD – Veyber',
    description: 'Veyber provides DevOps and deployment services for businesses in Vadodara, Ahmedabad & Gujarat. Server setup, CI/CD pipelines, Docker, application deployment & monitoring for MERN stack.',
    url: 'https://veyber.co.in/web-services/devops',
    type: 'website',
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "DevOps and Deployment Services",
  "provider": {
    "@type": "Organization",
    "name": "Veyber",
    "url": "https://veyber.co.in"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Gujarat, India"
  },
  "description": "DevOps and deployment services including server setup, CI/CD pipelines, Docker containerization, and application deployment."
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      
      <main className="pt-[120px] pb-24">
        {/* Hero */}
        <section className="px-4 sm:px-8 pt-12 sm:pt-20 md:pt-28 mb-16 max-w-7xl mx-auto text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"/>
          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/25 bg-primary/[0.08] text-primary font-bold text-xs tracking-widest uppercase mb-6">DevOps & Deployment Services in Gujarat</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold tracking-tight text-white mb-6 leading-tight">
              Build faster. Deploy reliably. Scale without breaking things.
            </h1>
            <p className="text-lg sm:text-xl text-on-surface-variant font-body leading-relaxed max-w-2xl mx-auto">
              For businesses running web applications, eCommerce platforms, or SaaS products — the gap between development and a smoothly running live system is where DevOps lives. We bridge your code with a stable production environment.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 sm:px-8 max-w-5xl mx-auto space-y-16">
          
      <div className="bg-surface-container rounded-3xl p-8 sm:p-12 border border-outline-variant/10">
        <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white mb-6">Our DevOps & Deployment Services</h2>
        <div className="space-y-6">
          <div><h3 className="text-lg font-bold text-white mb-1">Server Setup & Configuration</h3><p className="text-sm text-on-surface-variant">We configure cloud servers (AWS, Google Cloud, DigitalOcean). This includes OS setup, firewall configuration, security hardening, and environment setup.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">CI/CD Pipeline Setup</h3><p className="text-sm text-on-surface-variant">We automate testing and deploying code using tools like GitHub Actions, ensuring code goes to production safely and consistently.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">Application Deployment</h3><p className="text-sm text-on-surface-variant">Deployment of MERN stack, Node.js backends, and APIs to production servers. Includes PM2 process management, Nginx proxy, and SSL.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">Docker Containerization</h3><p className="text-sm text-on-surface-variant">We containerize applications using Docker to ensure your code runs identically across development, staging, and production environments.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">Database Management & Backups</h3><p className="text-sm text-on-surface-variant">We configure production databases (MongoDB, MySQL) with automated backups, monitoring, and database migrations.</p></div>
          <div><h3 className="text-lg font-bold text-white mb-1">Performance Monitoring</h3><p className="text-sm text-on-surface-variant">We set up server monitoring, error tracking, and alerts so your team is notified immediately if something goes wrong.</p></div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        <div className="bg-surface-container rounded-3xl p-8 border border-outline-variant/10">
          <h2 className="text-2xl font-headline font-bold text-white mb-6">Why Veyber for DevOps?</h2>
          <ul className="space-y-3">
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> MERN stack expertise</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> End-to-end ownership (server to monitoring)</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Security-first approach</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Clear documentation and ongoing maintenance</li>
          </ul>
        </div>
        <div className="bg-surface-container rounded-3xl p-8 border border-outline-variant/10">
          <h2 className="text-2xl font-headline font-bold text-white mb-6">Who Is This For?</h2>
          <ul className="space-y-3">
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Startups with applications going live</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Dev teams needing external deployment management</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> eCommerce businesses scaling server infrastructure</li>
            <li className="flex gap-3 text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">done</span> Companies migrating to VPS or cloud servers</li>
          </ul>
        </div>
      </div>
    
        </section>

        {/* CTA */}
        <section className="mt-16 px-4 sm:px-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-primary/20 to-primary-container/20 rounded-3xl p-8 sm:p-12 text-center border border-primary/20">
            <h2 className="text-2xl sm:text-4xl font-headline font-bold text-white mb-4">Ready to Grow Your Business?</h2>
            <p className="text-on-surface-variant mb-8 max-w-xl mx-auto">Contact us today to discuss how we can help your business succeed with expert digital solutions.</p>
            <Link href="/contact" className="inline-block bg-primary text-on-primary px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors">
              Get a Free Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
