// app/templates-viewer/page.tsx
'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function TemplateViewer() {
    const searchParams = useSearchParams()
    const template = searchParams.get('template')

    if (!template) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-50">
                <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Template Not Found</h2>
                    <p className="text-gray-600 mb-6">The requested template could not be loaded.</p>
                    <Link href="/templates">
                        <Button className="bg-[#0056b3] hover:bg-[#004494]">
                            Back to Templates Gallery
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col h-screen bg-gray-50">
            {/* Persistent Header */}
            <header className="bg-white shadow-sm py-3 px-6 flex items-center justify-between border-b border-gray-200">
                <div className="flex items-center space-x-4">
                    <Link href="/templates">
                        <Button variant="ghost" className="text-[#0056b3] hover:bg-[#0056b3]/10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Back to Templates
                        </Button>
                    </Link>

                </div>

                <div className="flex items-center space-x-3">
                    <Link href="/">
                        <Button variant="outline" className="border-[#0056b3] text-[#0056b3] hover:bg-[#0056b3]/10">
                            Go to Main Website
                        </Button>
                    </Link>
                    <a
                        href={template}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-block"
                    >
                        <Button className="bg-[#0056b3] hover:bg-[#004494]">
                            Open Fullscreen
                        </Button>
                    </a>
                </div>
            </header>

            {/* Template Content in Iframe */}
            <div className="flex-1 overflow-hidden bg-white">
                <iframe
                    src={template}
                    className="w-full h-full border-0"
                    sandbox="allow-same-origin allow-scripts allow-forms"
                    loading="eager"
                />
            </div>

            {/* Mobile Footer (optional) */}
            <div className="sm:hidden bg-white border-t border-gray-200 p-3 flex justify-center">
                <a
                    href={template}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                >
                    <Button className="w-full bg-[#0056b3] hover:bg-[#004494]">
                        Open Fullscreen
                    </Button>
                </a>
            </div>
        </div>
    )
}