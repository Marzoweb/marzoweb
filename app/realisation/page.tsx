"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Play, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog"

// Video Data
const videos = [
    {
        id: 1,
        title: "Showreel 2025",
        category: "Motion Graphics",
        image: "/thumb_motion_1.png",
        videoSrc: "/motion_graphic_videos/WhatsApp Video 2025-12-13 at 15.28.43_56251dab.mp4",
    },
    {
        id: 2,
        title: "Brand Animation",
        category: "Logo Reveal",
        image: "/thumb_motion_2.png",
        videoSrc: "/motion_graphic_videos/WhatsApp Video 2025-12-13 at 15.28.45_1ee1bb7a.mp4",
    },
    {
        id: 3,
        title: "Product Reveal",
        category: "3D Animation",
        image: "/thumb_motion_3.png",
        videoSrc: "/motion_graphic_videos/WhatsApp Video 2025-12-13 at 15.28.47_9a89166e.mp4",
    },
]

export default function RealisationPage() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#E6F0FA] to-white z-0"></div>
                <div className="absolute top-20 left-10 w-64 h-64 bg-[#0056b3]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#0056b3]/5 rounded-full blur-3xl"></div>

                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-block px-4 py-1 bg-[#0056b3]/10 text-[#0056b3] text-sm font-medium rounded-full mb-4">
                            Portfolio
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Realisations</h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Explore our latest motion graphics projects and AI-generated video creations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Motion Graphics Section */}
            <section className="py-16 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <motion.h2
                        className="text-3xl font-bold text-gray-800 mb-12 flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="w-2 h-8 bg-[#0056b3] rounded-full"></span>
                        Motion Graphics
                    </motion.h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.map((video) => (
                            <Dialog key={video.id}>
                                <DialogTrigger asChild>
                                    <div onClick={() => setSelectedVideo(video.videoSrc)} className="cursor-pointer">
                                        <VideoCard
                                            image={video.image}
                                            title={video.title}
                                            category={video.category}
                                        />
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-4xl p-0 bg-black border-none overflow-hidden text-white flex flex-col items-center justify-center">
                                    <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                                        <video
                                            src={video.videoSrc}
                                            controls
                                            autoPlay
                                            className="w-full h-full object-contain"
                                        />
                                        {/* Close button is handled by DialogContent default close, but we can add custom if needed. 
                          DialogContent usually has an X. Adding semantic close button for accessibility if default is hidden/styled over.
                      */}
                                    </div>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
                </div>
            </section>

            {/* Veo 3 Section - Temporarily removed */}
        </div>
    )
}

function VideoCard({
    image,
    title,
    category,
    isAi = false
}: {
    image: string,
    title: string,
    category: string,
    isAi?: boolean
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <Card className="overflow-hidden border-0 shadow-soft hover:shadow-lg transition-all duration-300 group bg-white h-full">
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                    </div>
                    {isAi && (
                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                            AI Generated
                        </div>
                    )}
                </div>
                <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
                    <p className="text-sm text-[#0056b3] font-medium">{category}</p>
                </CardContent>
            </Card>
        </motion.div>
    )
}
