import type { Metadata } from "next"
import VirtualTourClient from "./client"

export const metadata: Metadata = {
    title: "360° Virtual Tours - MARZOWEB",
    description: "Immersive 360-degree virtual tours for real estate, showrooms, and businesses. Increase engagement with interactive experiences.",
}

export default function VirtualTourPage() {
    return <VirtualTourClient />
}
