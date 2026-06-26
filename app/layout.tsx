import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import { ThemeProvider } from 'next-themes';
import ResizableNavbar from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { navItems } from '@/data';
import AmbientSpotlights from '@/components/ui/ambient-spotlights';


const geistSans = localFont({
  src: '../lib/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../lib/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Diego Vega - Portfolio',
  description: "Modern portfolio with Next.js",
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
            <AmbientSpotlights />
            <div className="max-w-7xl w-full relative z-10">
              <ResizableNavbar navItems={navItems} />
              {children}
              <Footer />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
