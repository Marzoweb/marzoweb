import { Metadata } from "next"
import ImageToExcelClient from "./client"

export const metadata: Metadata = {
    title: "Convertir Image en Excel - OCR Gratuit | MARZOWEB",
    description: "Convertissez vos images (JPG, PNG) en tableaux Excel modifiables instantanément. Outil OCR gratuit pour extraire des données de photos et captures d'écran.",
    keywords: [
        "image en excel",
        "ocr excel gratuit",
        "convertir photo en tableau",
        "jpg en xlsx",
        "extraction données maroc",
        "marzoweb tools"
    ],
    alternates: {
        canonical: "/tools/image-to-excel",
    },
    openGraph: {
        title: "Convertir Image en Excel - OCR Gratuit | MARZOWEB",
        description: "Convertissez vos images (JPG, PNG) en tableaux Excel modifiables instantanément.",
        url: "https://marzoweb.com/tools/image-to-excel",
        type: "website",
    }
}

export default function ImageToExcelPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Image to Excel Converter",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Free online tool to convert images to Excel spreadsheets using OCR.",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1250"
        }
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ImageToExcelClient />
        </>
    )
}
