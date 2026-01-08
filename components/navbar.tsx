"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { League_Spartan, Kalam } from "next/font/google"

const leagueSpartan = League_Spartan({ subsets: ["latin"], weight: ["700"] })
const kalam = Kalam({ subsets: ["latin"], weight: ["700"] })

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-soft"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#0056b3]">
            <span className={`${leagueSpartan.className} text-black`}>MARZO</span>
            <span className={kalam.className}>WEB</span>
          </span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className={`text-base font-medium hover:text-[#0056b3] transition-colors ${pathname === "/" ? "text-[#0056b3]" : "text-gray-700"
              }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`text-base font-medium hover:text-[#0056b3] transition-colors ${pathname.startsWith("/services") ? "text-[#0056b3]" : "text-gray-700"
              }`}
          >
            Services
          </Link>
          <Link
            href="/realisation"
            className={`text-base font-medium hover:text-[#0056b3] transition-colors ${pathname.startsWith("/realisation") ? "text-[#0056b3]" : "text-gray-700"
              }`}
          >
            Realisation
          </Link>
          <Link
            href="/templates"
            className={`text-base font-medium hover:text-[#0056b3] transition-colors ${pathname.startsWith("/templates") ? "text-[#0056b3]" : "text-gray-700"
              }`}
          >
            Templates
          </Link>
          <Link
            href="/virtual-tour"
            className={`text-base font-medium hover:text-[#0056b3] transition-colors flex items-center gap-1 ${pathname.startsWith("/virtual-tour") ? "text-[#0056b3]" : "text-gray-700"
              }`}
          >
            Virtual Tour
            <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold animate-pulse">NEW</span>
          </Link>
          {/* <Link
            href="/blog"
            className={`text-base font-medium hover:text-[#0056b3] transition-colors ${
              pathname.startsWith("/blog") ? "text-[#0056b3]" : "text-gray-700"
            }`}
          >
            Blog
          </Link>*/}
          <Link
            href="/contact"
            className={`text-base font-medium hover:text-[#0056b3] transition-colors ${pathname.startsWith("/contact") ? "text-[#0056b3]" : "text-gray-700"
              }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 pr-6">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                    <span className="text-xl font-bold text-[#0056b3]">
                      <span className={leagueSpartan.className}>MARZO</span>
                      <span className={kalam.className}>WEB</span>
                    </span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/"
                    className={`text-lg font-medium hover:text-[#0056b3] ${pathname === "/" ? "text-[#0056b3]" : "text-gray-700"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/services"
                    className={`text-lg font-medium hover:text-[#0056b3] ${pathname.startsWith("/services") ? "text-[#0056b3]" : "text-gray-700"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/realisation"
                    className={`text-lg font-medium hover:text-[#0056b3] ${pathname.startsWith("/realisation") ? "text-[#0056b3]" : "text-gray-700"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Realisation
                  </Link>
                  <Link
                    href="/templates"
                    className={`text-lg font-medium hover:text-[#0056b3] ${pathname.startsWith("/templates") ? "text-[#0056b3]" : "text-gray-700"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Templates
                  </Link>
                  <Link
                    href="/virtual-tour"
                    className={`text-lg font-medium hover:text-[#0056b3] flex items-center gap-2 ${pathname.startsWith("/virtual-tour") ? "text-[#0056b3]" : "text-gray-700"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Virtual Tour
                    <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">NEW</span>
                  </Link>
                  <Link
                    href="/blog"
                    className={`text-lg font-medium hover:text-[#0056b3] ${pathname.startsWith("/blog") ? "text-[#0056b3]" : "text-gray-700"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className={`text-lg font-medium hover:text-[#0056b3] ${pathname.startsWith("/contact") ? "text-[#0056b3]" : "text-gray-700"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
                <div className="flex flex-col gap-2 mt-4">
                  <Button
                    className="w-full bg-[#0056b3] hover:bg-[#004494] text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Button className="hidden md:inline-flex bg-[#0056b3] hover:bg-[#004494] text-white">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </motion.header >
  )
}
