import { Metadata } from "next"
import PdfToExcelClient from "./client"

export const metadata: Metadata = {
    title: "Convertir PDF en Excel - Extraction de Tableaux Gratuite | MARZOWEB",
    description: "Convertissez vos fichiers PDF en feuilles de calcul Excel gratuitement. Extraction précise de tableaux depuis vos documents PDF sans inscription.",
    keywords: [
        "pdf en excel",
        "convertir pdf xlsx",
        "extraire tableau pdf",
        "outil pdf maroc",
        "conversion données gratuit",
        "marzoweb tools"
    ],
    alternates: {
        canonical: "/tools/pdf-to-excel",
    },
    openGraph: {
        title: "Convertir PDF en Excel - Extraction de Tableaux Gratuite | MARZOWEB",
        description: "Convertissez vos fichiers PDF en feuilles de calcul Excel gratuitement.",
        url: "https://marzoweb.com/tools/pdf-to-excel",
        type: "website",
    }
}

export default function PdfToExcelPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "PDF to Excel Converter",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Free online tool to convert PDF documents to Excel spreadsheets.",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "ratingCount": "980"
        }
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PdfToExcelClient />
        </>
    )
}
