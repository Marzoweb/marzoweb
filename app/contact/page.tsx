"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { League_Spartan, Kalam } from "next/font/google"

const leagueSpartan = League_Spartan({ subsets: ["latin"], weight: ["700"] })
const kalam = Kalam({ subsets: ["latin"], weight: ["700"] })

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState("submitting")

    const form = e.currentTarget
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)?.value || "New Contact"
    const message = (form.elements.namedItem("message") as HTMLInputElement)?.value

    // Construct mailto link
    const mailtoLink = `mailto:marzowebagency@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`

    // Open mail client
    window.location.href = mailtoLink

    setFormState("success")
    form.reset()
    setTimeout(() => setFormState("idle"), 5000)
  }

  return (
    <div className="container mx-auto max-w-6xl py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Get in Touch</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have a Project in Mind? Let's discuss how we can help bring your vision to life with a custom digital solution.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="border-0 shadow-soft bg-white">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base text-gray-700">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="border-gray-300 focus-visible:ring-[#0056b3]"
                    disabled={formState === "submitting"}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="border-gray-300 focus-visible:ring-[#0056b3]"
                    disabled={formState === "submitting"}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-base text-gray-700">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="border-gray-300 focus-visible:ring-[#0056b3]"
                    disabled={formState === "submitting"}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    required
                    className="min-h-[150px] border-gray-300 focus-visible:ring-[#0056b3]"
                    disabled={formState === "submitting"}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#0056b3] hover:bg-[#004494] text-white py-6 shadow-soft"
                  disabled={formState === "submitting"}
                >
                  {formState === "submitting" ? "Sending..." : "Send Message"}
                </Button>

                {formState === "success" && (
                  <motion.div
                    className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-md"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle2 size={20} />
                    <span>Thanks! Your message was sent successfully.</span>
                  </motion.div>
                )}

                {formState === "error" && (
                  <motion.div
                    className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-md"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <AlertCircle size={20} />
                    <span>There was an error sending your message. Please try again.</span>
                  </motion.div>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <div className="flex flex-col md:flex-row lg:flex-col items-center gap-6 mb-8">
            <div className="w-32 h-32 relative border-2 border-gray-200 rounded-full flex items-center justify-center">
              <Image
                src="/MARZOLogo.png"
                alt="Profile Photo"
                width={128}
                height={128}
                className="rounded-full object-cover"
              />
            </div>
            <div className="text-center md:text-left lg:text-center">
              <h3 className="text-2xl font-bold mb-2">
                <span className={`${leagueSpartan.className} text-black`}>MARZO</span>
                <span className={`${kalam.className} text-[#0056b3]`}>WEB</span>
              </h3>
              <p className="text-gray-700 max-w-md">
                We build tailored websites for people who need smart, fast web solutions. Let's build your idea together.
              </p>
            </div>
          </div>

          <motion.div
            className="bg-gray-100 p-6 rounded-lg space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="font-bold text-lg text-gray-800">Why work with us?</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-[#0056b3] min-w-5 mt-0.5" size={20} />
                <span className="text-gray-700">Personalized approach to every project</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-[#0056b3] min-w-5 mt-0.5" size={20} />
                <span className="text-gray-700">Fast turnaround time and responsive communication</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-[#0056b3] min-w-5 mt-0.5" size={20} />
                <span className="text-gray-700">Modern, clean code and design practices</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-[#0056b3] min-w-5 mt-0.5" size={20} />
                <span className="text-gray-700">Ongoing support and maintenance options</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
