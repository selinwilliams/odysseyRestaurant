// app/layout.tsx
"use client";

import Header from '@/components/Header';
import { Cormorant_Garamond, Playfair_Display, Montserrat } from 'next/font/google'
import VideoBackground from '@/components/VideoBackground';
import { usePathname } from 'next/navigation';
import '../globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // const isHomePage = pathname === '/';

  return (
    <html lang="en"  className={`${montserrat.variable} ${playfair.variable} ${cormorant.variable}`}>
      <body className="font-sans text-greek-gray bg-greek-white">
        <div className="flex flex-col min-h-screen relative">
          {/* Background based on page */}

            <VideoBackground 
              videoUrl="https://storage.sbtl.dev/spookyspot/4253140-Uhd%204096%202160%2025Fps.mp4" 
            />


          {/* Content */}
          <Header />
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>
          {/* <Footer /> */}
          
        </div>
      </body>
    </html>
  );
}