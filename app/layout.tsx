import type React from "react"
import type { Metadata } from "next"
import { Inter, League_Spartan, Kalam } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })
const leagueSpartan = League_Spartan({ subsets: ["latin"], weight: ["400", "700"] })
const kalam = Kalam({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "MARZOWEB - Agence Web Maroc | Création Site Web & Solutions Digitales",
  description:
    "MARZOWEB: Your expert web agency in Morocco. We create modern, responsive websites and digital solutions. Création de sites web professionnels, e-commerce et applications au Maroc.",
  keywords: [
    "Agence web Maroc",
    "Création site web Maroc",
    "Web Development Morocco",
    "Site vitrine Maroc",
    "Application web Maroc",
    "Digital Agency Morocco",
    "Développement web Casablanca",
    "Site e-commerce Maroc",
    "Freelance web developer Morocco",
    "SEO Maroc",
    "MARZOWEB",
    "Mehdi Benmarzouq",
  ],
  authors: [{ name: "MARZOWEB" }, { name: "Mehdi Benmarzouq", url: "https://marzoweb.com" }],
  creator: "MARZOWEB",
  publisher: "MARZOWEB",
  metadataBase: new URL("https://marzoweb.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MARZOWEB - Agence Web Maroc | Création Site Web & Solutions Digitales",
    description:
      "Transform your digital presence with MARZOWEB. Expert web development, design, and digital strategy in Morocco.",
    url: "https://marzoweb.com",
    siteName: "MARZOWEB",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Ensure you have this image or use a placeholder
        width: 1200,
        height: 630,
        alt: "MARZOWEB - Agence Web Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MARZOWEB - Agence Web Maroc",
    description: "Expert web development and digital solutions in Morocco.",
    creator: "@marzoweb", // Update if you have a handle
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "MARZOWEB",
    image: "https://marzoweb.com/icon.png",
    "@id": "https://marzoweb.com",
    url: "https://marzoweb.com",
    telephone: "+212600000000", // Update with real number if available
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca", // Giving a default major city if not specified, user can update
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.5731, // Casablanca coordinates as placeholder
      longitude: -7.5898,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.linkedin.com/company/marzoweb",
      "https://www.instagram.com/marzoweb",
      // Add other social links
    ],
    priceRange: "$$",
    description:
      "MARZOWEB is a premier web agency in Morocco specializing in custom website creation, mobile apps, and digital strategy.",
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
  }

  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-white`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
