"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioPage() {
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
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E6F0FA] to-white z-0"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#0056b3]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#0056b3]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-4 py-1 bg-[#0056b3]/10 text-[#0056b3] text-sm font-medium rounded-full mb-4">
              Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Recent Work</h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore a selection of our latest projects across web and mobile platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0056b3]/10 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0056b3]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#0056b3]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Filter */}
          <div className="flex justify-center mb-12">
            <Tabs defaultValue="all" className="w-full md:w-auto">
              <TabsList className="w-full md:w-auto bg-gray-100">
                <TabsTrigger value="all" className="data-[state=active]:bg-[#0056b3] data-[state=active]:text-white">
                  All Projects
                </TabsTrigger>
                <TabsTrigger value="web" className="data-[state=active]:bg-[#0056b3] data-[state=active]:text-white">
                  Web
                </TabsTrigger>
                <TabsTrigger value="mobile" className="data-[state=active]:bg-[#0056b3] data-[state=active]:text-white">
                  Mobile
                </TabsTrigger>
                <TabsTrigger value="design" className="data-[state=active]:bg-[#0056b3] data-[state=active]:text-white">
                  Design
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Featured Project */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-0 shadow-soft hover:shadow-md transition-all duration-300 bg-gradient-to-br from-[#f8faff] to-white">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 md:p-8 flex flex-col justify-center order-2 md:order-1">
                  <div className="text-sm text-[#0056b3] font-semibold mb-2">FEATURED PROJECT</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">E-Commerce Platform</h2>
                  <p className="text-gray-600 mb-6">
                    A comprehensive e-commerce solution with product management, secure checkout, and customer accounts.
                    Built with Next.js, Tailwind CSS, and integrated with Stripe for payments.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-[#0056b3]/10 text-[#0056b3] text-xs px-2.5 py-1 rounded-full">Next.js</span>
                    <span className="bg-[#0056b3]/10 text-[#0056b3] text-xs px-2.5 py-1 rounded-full">React</span>
                    <span className="bg-[#0056b3]/10 text-[#0056b3] text-xs px-2.5 py-1 rounded-full">
                      Tailwind CSS
                    </span>
                    <span className="bg-[#0056b3]/10 text-[#0056b3] text-xs px-2.5 py-1 rounded-full">
                      Tailwind CSS
                    </span>
                    <span className="bg-[#0056b3]/10 text-[#0056b3] text-xs px-2.5 py-1 rounded-full">Stripe</span>
                    <span className="bg-[#0056b3]/10 text-[#0056b3] text-xs px-2.5 py-1 rounded-full">MongoDB</span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-[#0056b3] hover:bg-[#004494] shadow-soft">
                      View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="border-[#0056b3] text-[#0056b3]">
                      Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto order-1 md:order-2">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=E-Commerce+Platform"
                    alt="E-Commerce Platform"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <PortfolioCard
                title="Restaurant Booking App"
                category="Mobile App"
                description="A mobile application for restaurant reservations with table management and customer notifications."
                image="/placeholder.svg?height=400&width=600&text=Restaurant+App"
                tags={["React Native", "Firebase", "Node.js"]}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <PortfolioCard
                title="Financial Dashboard"
                category="Web Application"
                description="An interactive dashboard for financial data visualization and reporting."
                image="/placeholder.svg?height=400&width=600&text=Financial+Dashboard"
                tags={["React", "D3.js", "Express"]}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <PortfolioCard
                title="Fitness Tracker"
                category="Mobile App"
                description="A cross-platform fitness tracking app with workout plans and progress monitoring."
                image="/placeholder.svg?height=400&width=600&text=Fitness+Tracker"
                tags={["Flutter", "Firebase", "Google Fit API"]}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <PortfolioCard
                title="Real Estate Website"
                category="Web Development"
                description="A property listing website with advanced search filters and virtual tours."
                image="/placeholder.svg?height=400&width=600&text=Real+Estate+Website"
                tags={["Next.js", "Tailwind CSS", "MongoDB"]}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <PortfolioCard
                title="Task Management System"
                category="Web Application"
                description="A collaborative task management tool with real-time updates and team features."
                image="/placeholder.svg?height=400&width=600&text=Task+Management"
                tags={["Vue.js", "Firebase", "Tailwind CSS"]}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <PortfolioCard
                title="Healthcare Portal"
                category="Web Development"
                description="A secure patient portal for appointment scheduling and medical record access."
                image="/placeholder.svg?height=400&width=600&text=Healthcare+Portal"
                tags={["React", "Node.js", "PostgreSQL"]}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#E6F0FA] via-white to-[#E6F0FA] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#0056b3]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0056b3]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-block px-4 py-1 bg-[#0056b3]/10 text-[#0056b3] text-sm font-medium rounded-full mb-4">
              My Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our development process ensures clear communication, quality results, and on-time delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessCard
              number="01"
              title="Discovery"
              description="We start by understanding your business goals, target audience, and project requirements."
            />
            <ProcessCard
              number="02"
              title="Planning"
              description="Next, we create a detailed project plan with timelines, milestones, and deliverables."
            />
            <ProcessCard
              number="03"
              title="Development"
              description="We build your solution using modern technologies and best practices, with regular updates."
            />
            <ProcessCard
              number="04"
              title="Launch & Support"
              description="After thorough testing, we deploy your project and provide ongoing support as needed."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#0056b3] to-[#0077cc] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-1 bg-white/10"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/10"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Have a Project in Mind?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Let's discuss how we can help bring your vision to life with a custom digital solution.
            </p>
            <Link href="/contact">
              <Button
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-[#0056b3] px-8 py-6 text-lg rounded-lg"
              >
                Start a Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function PortfolioCard({
  title,
  category,
  description,
  image,
  tags,
}: {
  title: string
  category: string
  description: string
  image: string
  tags: string[]
}) {
  return (
    <Card className="overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] h-full bg-white">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#0056b3] text-white text-xs font-medium px-2.5 py-1 rounded-full">{category}</span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-[#0056b3]/10 text-[#0056b3] text-xs px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Link href="#" className="text-[#0056b3] hover:text-[#004494] font-medium inline-flex items-center">
          View Details <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

function ProcessCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="shadow-soft hover:shadow-md transition-all duration-300 border-0 bg-white h-full">
        <CardContent className="p-6">
          <div className="text-4xl font-bold text-[#0056b3] opacity-50 mb-2">{number}</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
