"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, FileSpreadsheet, AlertCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ImageToExcelClient() {
    const [dragActive, setDragActive] = useState(false)
    const [file, setFile] = useState<File | null>(null)
    const [converting, setConverting] = useState(false)
    const [complete, setComplete] = useState(false)

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
        // Only allow images
        if (file.type.startsWith("image/")) {
            setFile(file)
            setComplete(false)
        } else {
            alert("Please upload an image file.")
        }
    }

    const handleConvert = async () => {
        if (!file) return
        setConverting(true)

        try {
            const formData = new FormData()
            formData.append("file", file)

            const response = await fetch("/api/tools/image-to-excel", {
                method: "POST",
                body: formData,
            })

            if (!response.ok) {
                throw new Error("Conversion failed")
            }

            const blob = await response.blob()
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement("a")
            a.href = url
            a.download = `converted_${file.name.split('.')[0]}.xlsx`
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(url)
            document.body.removeChild(a)

            setComplete(true)
        } catch (error) {
            console.error("Error:", error)
            alert("An error occurred during conversion. Please try again.")
        } finally {
            setConverting(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50/50 py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-xl mb-4 text-green-600">
                        <FileSpreadsheet size={32} />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Image to Excel Converter</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Upload an image containing a table or data, and we'll convert it into an editable Excel spreadsheet.
                    </p>
                </motion.div>

                <Card className="bg-white shadow-soft border-0 max-w-2xl mx-auto">
                    <CardContent className="p-8">
                        {!complete ? (
                            <div
                                className={`relative border-2 border-dashed rounded-xl p-10 text-center transition-colors ${dragActive ? "border-[#0056b3] bg-[#0056b3]/5" : "border-gray-300 hover:border-gray-400"
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
                                    accept="image/*"
                                />

                                {file ? (
                                    <div className="space-y-4">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-[#0056b3]">
                                            <FileSpreadsheet size={32} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">{file.name}</p>
                                            <p className="text-sm text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
                                        </div>
                                        <Button
                                            onClick={(e) => {
                                                e.preventDefault() // prevent input triggers
                                                handleConvert()
                                            }}
                                            className="bg-[#0056b3] hover:bg-[#004494] text-white w-full max-w-xs relative z-20"
                                            disabled={converting}
                                        >
                                            {converting ? "Converting..." : "Convert to Excel"}
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
                                            <p className="text-sm text-gray-500 mt-2">PNG, JPG, JPEG up to 10MB</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="text-center py-10 space-y-6">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 animate-in zoom-in duration-300">
                                    <CheckCircle2 size={40} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Conversion Complete!</h3>
                                    <p className="text-gray-600">Your file is ready for download.</p>
                                </div>
                                <div className="flex flex-col gap-3 max-w-xs mx-auto">
                                    <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                                        Download Excel File
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={() => {
                                            setFile(null)
                                            setComplete(false)
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
        </div>
    )
}
