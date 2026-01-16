"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Code, Globe, Smartphone, Zap, ArrowRight, Glasses } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TestimonialCard from "@/components/testimonial-card"
import LogoSlider from "@/components/logo-slider"
import MobileAppSection from "@/components/mobile-app-section"

export default function Home() {
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

  const clientLogos = [
    {
      name: "ACME Inc",
      logo: "/trusted_logo.png?height=70&width=150&text=ACME",
      width: 150,
      height: 70
    },
    {
      name: "TechCorp",
      logo: "/trusted_logo.png?height=60&width=150&text=TechCorp",
      width: 150,
      height: 60
    },
    {
      name: "TechCorps",
      logo: "/logo-black-mobile.png?height=60&width=150&text=TechCorp",
      width: 150,
      height: 60
    },
    // Add other logos...
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with decorative elements */}
      <section className="relative py-20 md:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E6F0FA] to-white z-0"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#0056b3]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#0056b3]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-[#0056b3]/30 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-[#0056b3]/20 rounded-full"></div>

        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <motion.div
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1 bg-[#0056b3]/10 text-[#0056b3] text-sm font-medium rounded-full mb-2">
              Web & Mobile Development
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Modern Digital Solutions for Your Business
            </h1>
            <p className="text-xl text-gray-600">
              We design and build websites, web applications, and mobile apps tailored to your business goals.
            </p>
            <Link href="/templates">
              <Button className="bg-[#0056b3] hover:bg-[#004494] text-white px-8 py-6 text-lg rounded-lg shadow-soft">
                View Our Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-[#0056b3] text-[#0056b3] px-8 py-6 text-lg rounded-lg">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#0056b3]/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#0056b3]/5 rounded-full blur-xl"></div>
              <Image
                src="/home_template.jpg?height=500&width=600"
                alt="Web Development Illustration"
                width={600}
                height={500}
                className="rounded-xl shadow-soft relative z-10"
                priority
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-3 rounded-lg shadow-lg border border-gray-100 z-20">
                <div className="flex items-center gap-2">
                  <div className="bg-[#0056b3] h-8 w-8 rounded-full flex items-center justify-center text-white">
                    <Code size={18} />
                  </div>
                  <span className="font-medium">Clean Code</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Virtual Tour Promo Bar - New Addition */}
      <section className="bg-[#0056b3] text-white py-4 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/360-placeholder.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-3">
            <span className="bg-white text-[#0056b3] text-xs font-bold px-2 py-1 rounded animate-pulse">NEW</span>
            <p className="font-medium">Discover our immersive 360° Virtual Tours service!</p>
          </div>
          <Link href="/virtual-tour" className="flex items-center gap-2 group hover:text-white/80 transition-colors font-semibold text-sm">
            Take a Tour <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Logo Slider Section */}
      {/*<LogoSlider clients={clientLogos} />*/}

      {/* Services Section with improved design */}
      <section className="py-20 px-6 bg-gradient-to-br from-white via-[#f8faff] to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0056b3]/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0056b3]/10 to-transparent"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-[#0056b3]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-20 w-60 h-60 bg-[#0056b3]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="inline-block px-4 py-1 bg-[#0056b3]/10 text-[#0056b3] text-sm font-medium rounded-full mb-4">
              Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Comprehensive Digital Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From web development to mobile applications, we offer end-to-end services to help your business thrive in
              the digital world.
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp}>
              <ServiceCard
                icon={<Globe className="h-10 w-10 text-[#0056b3]" />}
                title="Custom Websites"
                description="Tailored websites designed specifically for your business needs and brand identity."
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ServiceCard
                icon={<Code className="h-10 w-10 text-[#0056b3]" />}
                title="Business Automation"
                description="Streamline your operations with custom web applications and automation tools."
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ServiceCard
                icon={<Glasses className="h-10 w-10 text-[#0056b3]" />}
                title="360° Virtual Tours"
                description="Immersive interactive tours for real estate, showrooms, and exhibitions. (New!)"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ServiceCard
                icon={<Smartphone className="h-10 w-10 text-[#0056b3]" />}
                title="Mobile-Friendly Design"
                description="Responsive websites that look and function perfectly on all devices."
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ServiceCard
                icon={<Zap className="h-10 w-10 text-[#0056b3]" />}
                title="Template-Based Quick Launch"
                description="Get online faster with customized templates tailored to your industry."
              />
            </motion.div>
          </motion.div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-[#0056b3] hover:bg-[#004494] text-white px-6 py-5 rounded-lg shadow-soft">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Mobile App Section */}
      <MobileAppSection />

      {/* Why Choose Me Section with improved design */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#E6F0FA] via-white to-[#E6F0FA] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#0056b3]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0056b3]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-[#0056b3]/30 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-[#0056b3]/20 rounded-full"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            Why Choose Us
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp}>
              <FeatureCard
                number="01"
                title="100% Responsive Design"
                description="Websites that look great on all devices, from mobile to desktop."
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <FeatureCard
                number="02"
                title="Fast Performance"
                description="Optimized code and assets for lightning-fast loading times."
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <FeatureCard
                number="03"
                title="SEO Optimized"
                description="Built-in best practices to help your site rank higher in search results."
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <FeatureCard
                number="04"
                title="Clean, Maintainable Code"
                description="Well-structured code that's easy to update and scale as your business grows."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      {/*<section className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0056b3]/10 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0056b3]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#0056b3]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block px-4 py-1 bg-[#0056b3]/10 text-[#0056b3] text-sm font-medium rounded-full mb-4">
              Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent works across web and mobile platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioCard
              title="E-Commerce Platform"
              category="Web Development"
              image="/placeholder.svg?height=400&width=600"
            />
            <PortfolioCard
              title="Restaurant Booking App"
              category="Mobile App"
              image="/placeholder.svg?height=400&width=600"
            />
            <PortfolioCard
              title="Financial Dashboard"
              category="Web Application"
              image="/placeholder.svg?height=400&width=600"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button className="bg-[#0056b3] hover:bg-[#004494] text-white px-6 py-5 rounded-lg shadow-soft">
                View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
*/}
      {/* Template Preview CTA with improved design */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0056b3] to-[#0077cc] z-0"></div>
        <div className="absolute top-0 right-0 w-full h-1 bg-white/10"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/10"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Preview our templates in action</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              See real examples of our work with live previews on subdomains. Experience the look and feel before you decide.
            </p>
            <Link href="/templates">
              <Button
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-[#0056b3] px-8 py-6 text-lg rounded-lg"
              >
                Browse Templates
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section with improved design */}
      <section className="py-20 px-6 bg-gradient-to-br from-white via-[#f8faff] to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0056b3]/10 to-transparent"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-[#0056b3]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-20 w-60 h-60 bg-[#0056b3]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="inline-block px-4 py-1 bg-[#0056b3]/10 text-[#0056b3] text-sm font-medium rounded-full mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear what our clients have to say about working with us.
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp}>
              <TestimonialCard
                quote="Grâce à MARZOWEB, notre présence en ligne est aussi savoureuse que nos plats ! Leur plateforme de réservation et la présentation de notre menu sont professionnelles et conviviales, ce qui a considérablement augmenté nos réservations."
                name="Fatima"
                company="..."
                image="/placeholder.svg?height=80&width=80"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <TestimonialCard
                quote="MARZOWEB a créé une boutique en ligne robuste et facile à gérer pour notre activité. Leur expertise en e-commerce nous a permis d'atteindre de nouveaux clients et d'optimiser nos ventes en ligne de manière impressionnante."
                name="Youssef"
                company="..."
                image="/placeholder.svg?height=80&width=80"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <TestimonialCard
                quote="Nous sommes ravis de notre collaboration avec MARZOWEB. Leur site web pour notre agence de location est intuitif, attrayant et facilite grandement la recherche et la réservation de nos biens par nos clients. Un service web de qualité que nous recommandons vivement."
                name="Khadija"
                company="..."
                image="/placeholder.svg?height=80&width=80"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA with improved design */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#E6F0FA] via-white to-[#E6F0FA] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#0056b3]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0056b3]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-[#0056b3]/30 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-[#0056b3]/20 rounded-full"></div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Let's discuss your project and create a web solution that helps your business grow.
            </p>
            <Link href="/contact">
              <Button className="bg-[#0056b3] hover:bg-[#004494] text-white px-8 py-6 text-lg rounded-lg shadow-soft">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="shadow-soft hover:shadow-md transition-all duration-300 border border-gray-100 hover:translate-y-[-5px] bg-white">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-xl font-bold text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function FeatureCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <Card className="shadow-soft hover:shadow-md transition-all duration-300 border-0 bg-white hover:translate-y-[-5px]">
      <CardHeader>
        <div className="text-4xl font-bold text-[#0056b3] opacity-50 mb-2">{number}</div>
        <CardTitle className="text-xl font-bold text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function PortfolioCard({ title, category, image }: { title: string; category: string; image: string }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="overflow-hidden rounded-xl shadow-soft bg-white">
        <div className="relative h-60 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-6 w-full">
              <span className="text-sm text-white/80">{category}</span>
              <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
          </div>
        </div>
        <div className="p-6">
          <span className="text-sm text-[#0056b3] font-medium">{category}</span>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <Link href="/portfolio" className="text-[#0056b3] hover:text-[#004494] font-medium inline-flex items-center">
            View Project <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
