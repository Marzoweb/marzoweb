"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FileSpreadsheet, FileText, Image as ImageIcon, FileCode } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function ToolsPage() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50/50">
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Developer Tools</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A collection of useful tools to help speed up your workflow.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <FileSpreadsheet className="text-[#0056b3]" />
                            Excel Tools
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Link href="/tools/image-to-excel" className="block group">
                                <Card className="h-full hover:shadow-lg transition-all duration-300 border-gray-200 group-hover:border-[#0056b3]">
                                    <CardHeader>
                                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                                            <ImageIcon className="text-green-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <CardTitle className="text-xl">Image to Excel</CardTitle>
                                        <CardDescription>
                                            Convert data tables from images/screenshots directly into editable Excel files.
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>

                            <Link href="/tools/pdf-to-excel" className="block group">
                                <Card className="h-full hover:shadow-lg transition-all duration-300 border-gray-200 group-hover:border-[#0056b3]">
                                    <CardHeader>
                                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                                            <FileText className="text-red-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <CardTitle className="text-xl">PDF to Excel</CardTitle>
                                        <CardDescription>
                                            Extract tabular data from PDF documents and save as Excel spreadsheets.
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mt-16"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <FileCode className="text-purple-600" />
                            Design Tools
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Link href="/tools/vectorize" className="block group">
                                <Card className="h-full hover:shadow-lg transition-all duration-300 border-gray-200 group-hover:border-purple-600">
                                    <CardHeader>
                                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                                            <FileCode className="text-purple-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <CardTitle className="text-xl">Image to SVG Vectorizer</CardTitle>
                                        <CardDescription>
                                            Convert raster images (JPG, PNG) and PDFs into scalable SVG vectors.
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>

                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
