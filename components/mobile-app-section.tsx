"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Smartphone, Zap, Globe, Code, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileAppSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#f0f7ff] via-white to-[#f5f8ff]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#0056b3]/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#0056b3]/5 rounded-full blur-xl"></div>

              <div className="relative z-10 bg-white p-4 rounded-[2.5rem] shadow-xl border border-gray-200 rotate-6">
                <div className="bg-gray-100 rounded-[2rem] overflow-hidden">
                  <Image
                    src="/phone_mockup.jpg?height=600&width=300&text=Mobile+App"
                    alt="Mobile App Mockup"
                    width={300}
                    height={600}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="absolute top-1/4 -right-12 z-20 bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="bg-green-500 h-8 w-8 rounded-full flex items-center justify-center text-white">
                    <CheckCircle size={18} />
                  </div>
                  <span className="font-medium text-sm">UI Optimized</span>
                </div>
              </div>

              <div className="absolute bottom-1/4 -left-12 z-20 bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="bg-[#0056b3] h-8 w-8 rounded-full flex items-center justify-center text-white">
                    <Zap size={18} />
                  </div>
                  <span className="font-medium text-sm">Fast Performance</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1 bg-[#0056b3]/10 text-[#0056b3] text-sm font-medium rounded-full">
              Mobile Development
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Transform Your Business with Custom Mobile Apps
            </h2>
            <p className="text-lg text-gray-600">
              Extend your web presence to mobile platforms with custom-built, high-performance applications that engage
              your customers wherever they are.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-[#0056b3]/10 p-2 rounded-lg">
                  <Smartphone className="h-5 w-5 text-[#0056b3]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Cross-Platform Development</h3>
                  <p className="text-gray-600">
                    Build once, deploy everywhere with React Native and Flutter solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-[#0056b3]/10 p-2 rounded-lg">
                  <Globe className="h-5 w-5 text-[#0056b3]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Progressive Web Apps</h3>
                  <p className="text-gray-600">
                    Create web apps that function like native apps with offline capabilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-[#0056b3]/10 p-2 rounded-lg">
                  <Code className="h-5 w-5 text-[#0056b3]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Native App Development</h3>
                  <p className="text-gray-600">Custom iOS and Android applications built for optimal performance.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/services">
                <Button className="bg-[#0056b3] hover:bg-[#004494] text-white px-6 py-5 rounded-lg shadow-soft">
                  Learn More About Mobile Development
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
