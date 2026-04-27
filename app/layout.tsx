import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-headline" });

export const metadata: Metadata = {
  title: "Veyber | eCommerce Development & Digital Marketing Company in Vadodara",
  description: "Veyber is a leading digital solutions company offering eCommerce development, account management, social media marketing, content marketing, and business consulting services. Grow your business with expert strategies.",
  keywords: "ecommerce development company in Vadodara, ecommerce account management services India, social media marketing agency Vadodara, content marketing services India, business consultant in Vadodara, Shopify development company India, Amazon account management services",
  openGraph: {
    title: 'Veyber | eCommerce Development & Digital Marketing Company in Vadodara',
    description: 'Veyber is a leading digital solutions company offering eCommerce development, account management, social media marketing, content marketing, and business consulting services. Grow your business with expert strategies.',
    url: 'https://veyber.co.in/',
    siteName: 'Veyber',
    images: [
      {
        url: 'https://veyber.co.in/images/og-banner.jpg',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Anti-FOUC: sync theme from localStorage before first paint */}
        <Script id="theme-sync" strategy="beforeInteractive" dangerouslySetInnerHTML={{__html:`(function(){try{var t=localStorage.getItem('veyber-theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){}})();`}}/>
        {/* Preconnect to external origins for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        {/* Material Symbols — narrowed to weight 400 only + display=swap for non-blocking */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=swap" rel="stylesheet" />
        {/* Organization Schema — structured data for search engines */}
        <Script id="org-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Veyber",
          "url": "https://veyber.in",
          "logo": "https://veyber.in/veyber-logo.png",
          "description": "Veyber is a leading digital solutions company offering eCommerce development, account management, social media marketing, content marketing, and business consulting services.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vadodara",
            "addressRegion": "Gujarat",
            "addressCountry": "IN"
          },
          "sameAs": [],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-6355183655",
            "email": "veyberservicespvtltd@gmail.com",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": "English"
          }
        })}} />
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-body bg-surface text-on-surface selection:bg-primary/30 antialiased`}>
        {children}
      </body>
    </html>
  );
}
