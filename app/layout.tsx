import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-headline" });

export const metadata: Metadata = {
  title: "Veyber | Build. Scale. Dominate.",
  description: "High-end digital growth agency specializing in eCommerce and marketplace dominance. We turn ambition into authority.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Anti-FOUC: sync theme from localStorage before first paint */}
        <script dangerouslySetInnerHTML={{__html:`(function(){try{var t=localStorage.getItem('veyber-theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){}})();`}}/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-body bg-surface text-on-surface selection:bg-primary/30 antialiased`}>
        {children}
      </body>
    </html>
  );
}
