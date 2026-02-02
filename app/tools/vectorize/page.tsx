import { Metadata } from "next"
import VectorizeClient from "./client"

export const metadata: Metadata = {
    title: "Convertir Image en SVG - Vectorisation Gratuite | MARZOWEB",
    description: "Transformez vos images (JPG, PNG) et PDF en graphiques vectoriels SVG de haute qualité. Outil de vectorisation gratuit et rapide.",
    keywords: [
        "convertir image en svg",
        "vectoriser image",
        "vectorisation gratuite",
        "jpg en svg",
        "png en svg",
        "pdf en svg",
        "marzoweb tools"
    ],
    alternates: {
        canonical: "/tools/vectorize",
    },
    openGraph: {
        title: "Convertir Image en SVG - Vectorisation Gratuite | MARZOWEB",
        description: "Transformez vos images (PNG, JPG) en SVG vectoriels instantanément.",
        url: "https://marzoweb.com/tools/vectorize",
        type: "website",
    }
}

export default function VectorizePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Image to SVG Vectorizer",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Free online tool to convert raster images (JPG, PNG) and PDFs to scalable vector graphics (SVG).",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "ratingCount": "850"
        }
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <VectorizeClient />
        </>
    )
}
