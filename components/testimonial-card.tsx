"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  company: string
  image: string
}

export default function TestimonialCard({ quote, name, company, image }: TestimonialCardProps) {
  return (
    <Card className="shadow-soft hover:shadow-md transition-all duration-300 border border-gray-100 group">
      <CardHeader className="pb-2">
        <Quote className="text-[#0056b3] w-8 h-8 opacity-40 group-hover:opacity-70 transition-opacity" />
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-700 italic">{quote}</p>
        <motion.div
          className="flex items-center gap-3 pt-4"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="h-12 w-12 overflow-hidden rounded-full">
            <Image src={image || "/placeholder.svg"} alt={name} width={48} height={48} className="object-cover" />
          </div>
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-sm text-gray-500">{company}</div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  )
}
