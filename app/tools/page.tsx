import type { Metadata } from "next"
import ToolsClient from "./client"

export const metadata: Metadata = {
    title: "Developer Tools - MARZOWEB",
    description: "Free online developer tools: Image to Excel, PDF to Excel, Image to SVG Vectorizer, and more.",
}

export default function ToolsPage() {
    return <ToolsClient />
}
