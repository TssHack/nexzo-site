import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./client-layout"

export const metadata: Metadata = {
  title: "NEXZO TM | نکزو تیم - تیم توسعه و طراحی حرفه‌ای",
  description:
    "تیم NEXZO TM متشکل از متخصصان توسعه وبسایت، اپلیکیشن، ربات تلگرام و طراحی گرافیک. خدمات حرفه‌ای در زمینه برنامه‌نویسی و طراحی دیجیتال با بیش از 5 سال تجربه.",
  generator: "NEXZO TM",
  applicationName: "NEXZO TM Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "توسعه وبسایت",
    "طراحی گرافیک",
    "ربات تلگرام",
    "اپلیکیشن موبایل",
    "NEXZO TM",
    "برنامه نویسی",
    "طراحی UI/UX",
    "فول استک",
    "React",
    "Next.js",
    "TypeScript",
    "طراحی وب",
    "توسعه نرم افزار",
    "موشن گرافیک",
    "طراحی لوگو",
  ],
  authors: [{ name: "NEXZO TM", url: "https://nexzo.ir" }],
  creator: "NEXZO TM",
  publisher: "NEXZO TM",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nexzo.ir"),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "NEXZO TM | نکزو تیم - تیم توسعه و طراحی حرفه‌ای",
    description: "تیم توسعه و طراحی حرفه‌ای وبسایت، اپلیکیشن و ربات‌های تلگرامی با بیش از 5 سال تجربه",
    url: "https://nexzo.ir",
    siteName: "NEXZO TM",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NEXZO TM - تیم توسعه و طراحی حرفه‌ای",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXZO TM | نکزو تیم",
    description: "تیم توسعه و طراحی حرفه‌ای",
    images: ["/og-image.jpg"],
    creator: "@nexzoteam",
  },
  alternates: {
    canonical: "https://nexzo.ir",
    languages: {
      "fa-IR": "https://nexzo.ir",
      "en-US": "https://nexzo.ir/en",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NEXZO TM",
              alternateName: "نکزو تیم",
              url: "https://nexzo.ir",
              logo: "https://nexzo.ir/logo.png",
              description: "تیم توسعه و طراحی حرفه‌ای وبسایت، اپلیکیشن و ربات‌های تلگرامی",
              foundingDate: "2019",
              slogan: "خلاقیت در کد، هنر در طراحی",
              knowsAbout: [
                "Web Development",
                "Mobile App Development",
                "Telegram Bot Development",
                "Graphic Design",
                "Motion Graphics",
                "UI/UX Design",
              ],
              serviceArea: {
                "@type": "Country",
                name: "Iran",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+98-9217687107",
                contactType: "customer service",
                availableLanguage: ["Persian", "English"],
                areaServed: "IR",
                hoursAvailable: "24/7",
              },
              sameAs: ["https://t.me/nexzo_tm", "https://instagram.com/nexzo.tm", "https://github.com/nexzotm"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "IR",
                addressRegion: "Tehran",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "خدمات NEXZO TM",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "توسعه وبسایت",
                      description: "طراحی و توسعه وبسایت‌های مدرن و ریسپانسیو",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "توسعه اپلیکیشن موبایل",
                      description: "ساخت اپلیکیشن‌های موبایل برای اندروید و iOS",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "ربات تلگرام",
                      description: "طراحی و توسعه ربات‌های هوشمند تلگرام",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "طراحی گرافیک",
                      description: "طراحی لوگو، بنر، و محتوای بصری",
                    },
                  },
                ],
              },
            }),
          }}
        />
        <style>{`
          html {
            font-family: 'Vazirmatn', sans-serif;
          }
        `}</style>
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
