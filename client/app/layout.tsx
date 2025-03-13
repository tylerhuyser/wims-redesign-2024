import Nav from "./_components/_shared/_nav/Nav";
import Footer from "./_components/_shared/_footer/Footer";
import Social from './_components/_shared/_social/Social'
import { SEO } from "./_components/_shared/_seo/SEO";
// import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

import "./globals.css"
import "./layout.css"

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata = SEO

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" data-arp="">
      {/* <GoogleAnalytics gaID="GTM-TLX3ZGT2" />
      <GoogleTagManager gtmId="GTM-TLX3ZGT2" /> */}
      <body>
        <div className="layout-container">

          <Nav />

          <main className="main-container">
            {children}
          </main>

          <Footer />

          <Social />
          
        </div>
      </body>
    </html>
  )
}
