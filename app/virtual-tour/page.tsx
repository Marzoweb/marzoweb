"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Globe, Zap, Smartphone, ArrowRight, Eye, MousePointerClick, Clock, Glasses, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "360° Virtual Tours - MARZOWEB",
    description: "Immersive 360-degree virtual tours for real estate, showrooms, and businesses. Increase engagement with interactive experiences.",
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function VirtualTourPage() {
    const [isTourLoaded, setIsTourLoaded] = useState(false)
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#E6F0FA] to-white z-0"></div>

                {/* Decorative elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#0056b3]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0056b3]/5 rounded-full blur-3xl"></div>

                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-block px-4 py-1 bg-[#0056b3]/10 text-[#0056b3] text-sm font-medium rounded-full mb-6">
                            Next-Gen Real Estate Showcase
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                            Immersive <span className="text-[#0056b3]">Virtual Tours</span>
                            <br /> for Your Business
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Transform how your customers explore your space. Offer an interactive, 360-degree experience that converts visitors into customers.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact">
                                <Button className="bg-[#0056b3] hover:bg-[#004494] text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all">
                                    Get a Quote
                                </Button>
                            </Link>
                            <Link href="#demo">
                                <Button variant="outline" className="border-[#0056b3] text-[#0056b3] px-8 py-6 text-lg rounded-lg hover:bg-[#0056b3]/5">
                                    View Demo <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Demo Section */}
            <section id="demo" className="py-20 px-6 bg-white relative">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience it Yourself</h2>
                        <p className="text-lg text-gray-600">Explore this interactive demo. Validated for high performance and smooth navigation.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:hidden mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3 text-left animate-pulse"
                    >
                        <Info className="h-5 w-5 text-[#0056b3] shrink-0 mt-0.5" />
                        <p className="text-sm text-[#0056b3] font-medium">
                            Click on <strong className="font-bold">Info</strong> to see the full tour
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-900 aspect-video relative group"
                    >
                        {!isTourLoaded ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 bg-[url('/assets/360-placeholder.png')] bg-cover bg-center">
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                                <div className="relative z-10 text-center">
                                    <Button
                                        onClick={() => setIsTourLoaded(true)}
                                        size="lg"
                                        className="bg-white text-[#0056b3] hover:bg-gray-100 font-bold text-lg px-8 py-6 rounded-full shadow-xl transition-transform hover:scale-105"
                                    >
                                        <Globe className="mr-2 h-6 w-6" /> Start 360° Tour
                                    </Button>
                                    <p className="text-white mt-4 text-sm font-medium opacity-80">Click to load the interactive experience</p>
                                </div>
                            </div>
                        ) : (
                            <iframe
                                width="100%"
                                height="100%"
                                style={{ width: '100%', height: '100%', minHeight: '500px', border: 'none' }}
                                frameBorder="0"
                                allow="xr-spatial-tracking; gyroscope; accelerometer"
                                allowFullScreen
                                scrolling="no"
                                src="https://kuula.co/share/collection/7lPZ8?logo=1&info=1&fs=1&vr=1&sd=1&thumbs=1"
                                title="360 Virtual Tour Demo"
                                className="w-full h-full animate-in fade-in duration-1000"
                            ></iframe>
                        )}

                        {/* Overlay hint only when loaded */}
                        {isTourLoaded && (
                            <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-0 transition-opacity duration-500 delay-300">
                                <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">Click and drag to explore</span>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-[#f8faff] to-white border-t border-gray-100">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div variants={fadeInUp}>
                            <FeatureCard
                                icon={<Clock className="h-10 w-10 text-[#0056b3]" />}
                                title="Open 24/7"
                                description="Your showroom never sleeps. Allow customers to visit your space anytime, from anywhere in the world."
                            />
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <FeatureCard
                                icon={<Zap className="h-10 w-10 text-[#0056b3]" />}
                                title="Lightning Fast"
                                description="Optimized for speed. Our tours load instantly on all devices, ensuring no customer drops off."
                            />
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <FeatureCard
                                icon={<Smartphone className="h-10 w-10 text-[#0056b3]" />}
                                title="Mobile Ready"
                                description="Fully responsive design that works perfectly on smartphones, tablets, and desktops alike."
                            />
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <FeatureCard
                                icon={<Eye className="h-10 w-10 text-[#0056b3]" />}
                                title="Boost Engagement"
                                description="Keep visitors on your site longer. 360 virtual tours increase time-on-site and user interaction significantly."
                            />
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <FeatureCard
                                icon={<MousePointerClick className="h-10 w-10 text-[#0056b3]" />}
                                title="Interactive Hotspots"
                                description="Add clickable points of interest to highlight features, show videos, or display pricing directly in the tour."
                            />
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <FeatureCard
                                icon={<Glasses className="h-10 w-10 text-[#0056b3]" />}
                                title="VR Compatible"
                                description="Ready for Virtual Reality headsets for the ultimate immersive experience."
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0056b3] z-0"></div>
                {/* Abstract shapes */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto max-w-4xl text-center relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Showcase Your Space?</h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                            Get in touch today to schedule your virtual tour shoot or integration. We handle everything from capture to hosting.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="bg-white text-[#0056b3] hover:bg-gray-100 text-lg px-10 py-7 font-semibold rounded-lg shadow-xl hover:translate-y-[-2px] transition-all">
                                Get a Free Quote
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
            <CardHeader>
                <div className="mb-4 bg-[#0056b3]/5 w-16 h-16 rounded-2xl flex items-center justify-center text-[#0056b3]">
                    {icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </CardContent>
        </Card>
    )
}
