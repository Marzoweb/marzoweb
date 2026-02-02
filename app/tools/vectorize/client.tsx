"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Upload, FileCode, CheckCircle2, Download, AlertCircle, Settings2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// @ts-ignore
import ImageTracer from 'imagetracerjs'
import { GlobalWorkerOptions, getDocument, version } from 'pdfjs-dist'

export default function VectorizeClient() {
    const [dragActive, setDragActive] = useState(false)
    const [file, setFile] = useState<File | null>(null)
    const [converting, setConverting] = useState(false)
    const [completedSvg, setCompletedSvg] = useState<string | null>(null)
    const [quality, setQuality] = useState<'balanced' | 'detailed'>('detailed')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.min.mjs`
        }
    }, [])

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true)
        } else if (e.type === "dragleave") {
            setDragActive(false)
        }
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0])
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0])
        }
    }

    const handleFile = (file: File) => {
        if (file.type.startsWith("image/") || file.type === "application/pdf") {
            setFile(file)
            setCompletedSvg(null)
        } else {
            alert("Please upload an image (JPG, PNG) or PDF file.")
        }
    }

    const processImage = (imageUrl: string) => {
        const options = quality === 'detailed' ? {
            ltres: 0.1,
            qtres: 0.1,
            pathomit: 1,
            rightangleenhance: false,
            colorsampling: 2,
            numberofcolors: 64,
            mincolorratio: 0,
            colorquantcycles: 3,
            blurradius: 0,
            blurdelta: 20,
            strokewidth: 0,
            linefilter: true,
            scale: 1,
            roundcoords: 1,
            viewbox: true,
            desc: false,
            lcpr: 0,
            qcpr: 0
        } : {
            // Balanced defaults
            ltres: 1,
            qtres: 1,
            pathomit: 8,
            colorsampling: 2,
            numberofcolors: 16,
            mincolorratio: 0,
            colorquantcycles: 3,
            blurradius: 0,
            blurdelta: 20,
            strokewidth: 0,
            linefilter: false,
            scale: 1,
            roundcoords: 1,
            viewbox: true
        }

        ImageTracer.imageToSVG(
            imageUrl,
            function (svgstr: string) {
                setCompletedSvg(svgstr)
                setConverting(false)
            },
            options
        )
    }

    const handleConvert = async () => {
        if (!file) return
        setConverting(true)

        try {
            if (file.type === "application/pdf") {
                const arrayBuffer = await file.arrayBuffer()
                const pdf = await getDocument({ data: arrayBuffer }).promise
                const page = await pdf.getPage(1)

                const viewport = page.getViewport({ scale: 2.0 }) // High resolution for detailed trace
                const canvas = document.createElement('canvas')
                const context = canvas.getContext('2d')
                canvas.height = viewport.height
                canvas.width = viewport.width

                if (!context) throw new Error("Could not get canvas context")

                await page.render({ canvasContext: context, viewport: viewport }).promise

                const dataUrl = canvas.toDataURL('image/png')
                processImage(dataUrl)

            } else {
                // Image
                const reader = new FileReader()
                reader.onload = (e) => {
                    if (e.target?.result) {
                        processImage(e.target.result as string)
                    }
                }
                reader.readAsDataURL(file)
            }

        } catch (error) {
            console.error("Error:", error)
            alert("An error occurred during conversion.")
            setConverting(false)
        }
    }

    const downloadSvg = () => {
        if (!completedSvg) return
        const blob = new Blob([completedSvg], { type: "image/svg+xml" })
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `vectorized_${file?.name.split('.')[0] || 'image'}.svg`
        document.body.appendChild(a)
        a.click()
        URL.revokeObjectURL(url)
        document.body.removeChild(a)
    }

    return (
        <div className="min-h-screen bg-gray-50/50 py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-xl mb-4 text-purple-600">
                        <FileCode size={32} />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Image & PDF to SVG Vectorizer</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Convert raster images and PDFs into scalable SVG vectors instantly in your browser.
                    </p>
                </motion.div>

                <Card className="bg-white shadow-soft border-0 max-w-2xl mx-auto">
                    <CardContent className="p-8">
                        {!completedSvg ? (
                            <div className="space-y-6">
                                <div className="flex justify-center mb-6">
                                    <div className="bg-gray-100 p-1 rounded-lg inline-flex">
                                        <button
                                            onClick={() => setQuality('balanced')}
                                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${quality === 'balanced'
                                                    ? 'bg-white text-purple-600 shadow-sm'
                                                    : 'text-gray-500 hover:text-gray-700'
                                                }`}
                                        >
                                            Balanced
                                        </button>
                                        <button
                                            onClick={() => setQuality('detailed')}
                                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${quality === 'detailed'
                                                    ? 'bg-white text-purple-600 shadow-sm'
                                                    : 'text-gray-500 hover:text-gray-700'
                                                }`}
                                        >
                                            High Quality
                                        </button>
                                    </div>
                                </div>

                                <div
                                    className={`relative border-2 border-dashed rounded-xl p-10 text-center transition-colors ${dragActive ? "border-purple-500 bg-purple-50" : "border-gray-300 hover:border-gray-400"
                                        }`}
                                    onDragEnter={handleDrag}
                                    onDragLeave={handleDrag}
                                    onDragOver={handleDrag}
                                    onDrop={handleDrop}
                                >
                                    <input
                                        type="file"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        onChange={handleChange}
                                        accept="image/*,application/pdf"
                                    />

                                    {file ? (
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto text-purple-600">
                                                <FileCode size={32} />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-800">{file.name}</p>
                                                <p className="text-sm text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
                                            </div>
                                            <Button
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    handleConvert()
                                                }}
                                                className="bg-purple-600 hover:bg-purple-700 text-white w-full max-w-xs relative z-20"
                                                disabled={converting}
                                            >
                                                {converting ? "Vectorizing..." : `Convert to SVG (${quality === 'detailed' ? 'High Quality' : 'Balanced'})`}
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                className="text-gray-500 hover:text-red-500 relative z-20"
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    setFile(null)
                                                }}
                                            >
                                                Remove File
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400">
                                                <Upload size={32} />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-800 text-lg">Click to upload or drag and drop</p>
                                                <p className="text-sm text-gray-500 mt-2">JPG, PNG, PDF</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-10 space-y-6">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 animate-in zoom-in duration-300">
                                    <CheckCircle2 size={40} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Vectorization Complete!</h3>
                                    <div className="my-4 max-h-60 overflow-hidden border rounded bg-checkerboard p-4 flex justify-center">
                                        <div dangerouslySetInnerHTML={{ __html: completedSvg }} className="w-full h-full object-contain max-h-48" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 max-w-xs mx-auto">
                                    <Button onClick={downloadSvg} className="bg-purple-600 hover:bg-purple-700 text-white w-full gap-2">
                                        <Download size={18} /> Download SVG
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={() => {
                                            setFile(null)
                                            setCompletedSvg(null)
                                        }}
                                    >
                                        Convert Another File
                                    </Button>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>

            <style jsx global>{`
                .bg-checkerboard {
                    background-image:
                        linear-gradient(45deg, #f0f0f0 25%, transparent 25%),
                        linear-gradient(-45deg, #f0f0f0 25%, transparent 25%),
                        linear-gradient(45deg, transparent 75%, #f0f0f0 75%),
                        linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
                    background-size: 20px 20px;
                    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
                }
            `}</style>
        </div>
    )
}