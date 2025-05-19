"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Code,
  Database,
  Globe,
  Layers,
  Smartphone,
  Zap,
  User,
  BookOpenText,
  Figma,
  Workflow
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function ServicesPage() {
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
              Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Comprehensive Digital Solutions</h1>
            <p className="text-xl text-gray-600 mb-8">
              From web development to mobile applications, we offer end-to-end services to help your business thrive in the digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0056b3]/10 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0056b3]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#0056b3]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <Tabs defaultValue="web" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-gray-100 p-1">
                <TabsTrigger
                  value="web"
                  className="data-[state=active]:bg-[#0056b3] data-[state=active]:text-white px-6 py-2"
                >
                  Web Development
                </TabsTrigger>
                <TabsTrigger
                  value="mobile"
                  className="data-[state=active]:bg-[#0056b3] data-[state=active]:text-white px-6 py-2"
                >
                  Mobile Apps
                </TabsTrigger>
                <TabsTrigger
                  value="design"
                  className="data-[state=active]:bg-[#0056b3] data-[state=active]:text-white px-6 py-2"
                >
                  UI/UX Design
                </TabsTrigger>
                <TabsTrigger
                  value="automation"
                  className="data-[state=active]:bg-[#0056b3] data-[state=active]:text-white px-6 py-2"
                >
                  Automation
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="web" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Web Development</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    We create custom websites and web applications that are fast, responsive, and tailored to your specific business needs.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-[#0056b3]/10 p-2 rounded-lg">
                        <Globe className="h-5 w-5 text-[#0056b3]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Custom Website Development</h3>
                        <p className="text-gray-600">
                          Tailored websites designed to meet your specific business goals and brand identity.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-[#0056b3]/10 p-2 rounded-lg">
                        <Code className="h-5 w-5 text-[#0056b3]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Web Applications</h3>
                        <p className="text-gray-600">
                          Interactive web applications with advanced functionality and user-friendly interfaces.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-[#0056b3]/10 p-2 rounded-lg">
                        <Database className="h-5 w-5 text-[#0056b3]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">E-commerce Solutions</h3>
                        <p className="text-gray-600">
                          Secure, scalable online stores with payment processing and inventory management.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="bg-[#0056b3] hover:bg-[#004494] text-white px-6 py-5 rounded-lg shadow-soft">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#0056b3]/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#0056b3]/5 rounded-full blur-xl"></div>
                    <Image
                      src="/web_service.png?height=500&width=600&text=Web+Development"
                      alt="Web Development"
                      width={600}
                      height={500}
                      className="rounded-xl shadow-soft relative z-10"
                    />
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="mobile" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Mobile App Development</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    We build native and cross-platform mobile applications that provide seamless user experiences across all devices.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-[#0056b3]/10 p-2 rounded-lg">
                        <Smartphone className="h-5 w-5 text-[#0056b3]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Native App Development</h3>
                        <p className="text-gray-600">
                          Custom iOS and Android applications built for optimal performance.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-[#0056b3]/10 p-2 rounded-lg">
                        <Layers className="h-5 w-5 text-[#0056b3]" />
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
                  </div>

                  <Link href="/contact">
                    <Button className="bg-[#0056b3] hover:bg-[#004494] text-white px-6 py-5 rounded-lg shadow-soft">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#0056b3]/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#0056b3]/5 rounded-full blur-xl"></div>
                    <Image
                      src="/phone_mockup.jpg?height=500&width=600&text=Mobile+Development"
                      alt="Mobile Development"
                      width={600}
                      height={500}
                      className="rounded-xl shadow-soft relative z-10"
                    />
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="design" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Exceptional UI/UX Design</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Crafting intuitive and engaging digital experiences that delight your users and drive results. Our user-centered approach ensures that every interaction is seamless and enjoyable.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-[#0056b3]/10 p-2 rounded-lg">
                        <User className="h-5 w-5 text-[#0056b3]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">User Research</h3>
                        <p className="text-gray-600">
                          Understanding user needs, behaviors, and motivations through various research methods.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-[#0056b3]/10 p-2 rounded-lg">
                        <BookOpenText className="h-5 w-5 text-[#0056b3]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Information Architecture</h3>
                        <p className="text-gray-600">
                          Structuring and organizing content logically for easy navigation and understanding.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-[#0056b3]/10 p-2 rounded-lg">
                        <Figma className="h-5 w-5 text-[#0056b3]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">UI Design</h3>
                        <p className="text-gray-600">
                          Developing visually appealing and consistent interfaces that align with your brand identity.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="bg-[#0056b3] hover:bg-[#004494] text-white px-6 py-5 rounded-lg shadow-soft">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#0056b3]/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#0056b3]/5 rounded-full blur-xl"></div>
                    <Image
                        src="/uiuxdesign.webp?height=500&width=600&text=Mobile+Development"
                        alt="Mobile Development"
                        width={600}
                        height={500}
                        className="rounded-xl shadow-soft relative z-10"
                    />
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="automation" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Automation Solutions</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Streamline your workflows and boost productivity with intelligent automation. We design and implement solutions that handle repetitive tasks, freeing up your team to focus on what truly matters.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-[#0056b3]/10 p-2 rounded-lg">
                        <Workflow className="h-5 w-5 text-[#0056b3]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Process Automation</h3>
                        <p className="text-gray-600">
                          Automating manual, rule-based tasks to improve efficiency and reduce errors.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-[#0056b3]/10 p-2 rounded-lg">
                        <Layers className="h-5 w-5 text-[#0056b3]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Workflow Optimization</h3>
                        <p className="text-gray-600">
                          Analyzing and redesigning workflows for maximum efficiency and automation potential.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-[#0056b3]/10 p-2 rounded-lg">
                        <Globe className="h-5 w-5 text-[#0056b3]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Integration Solutions</h3>
                        <p className="text-gray-600">
                          Connecting disparate systems and applications for seamless data flow and automated processes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="bg-[#0056b3] hover:bg-[#004494] text-white px-6 py-5 rounded-lg shadow-soft">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#0056b3]/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#0056b3]/5 rounded-full blur-xl"></div>
                    <Image
                      src="/automation.png?height=500&width=600&text=Mobile+Development"
                      alt="Automation"
                      width={600}
                      height={500}
                      className="rounded-xl shadow-soft relative z-10"
                    />
                  </div>
                </motion.div>
              </div>
            </TabsContent>

          </Tabs>
        </div>
      </section>

      {/* Service Cards */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">All Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the full range of digital services we offer to help your business succeed online.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <ServiceDetailCard
                icon={<Globe className="h-10 w-10 text-[#0056b3]" />}
                title="Website Development"
                description="Custom websites designed and developed to meet your specific business needs and goals."
                features={["Responsive Design", "SEO Optimization", "Content Management", "Performance Tuning"]}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ServiceDetailCard
                icon={<Smartphone className="h-10 w-10 text-[#0056b3]" />}
                title="Mobile App Development"
                description="Native and cross-platform mobile applications for iOS and Android devices."
                features={["Native iOS & Android", "React Native", "Flutter", "Progressive Web Apps"]}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ServiceDetailCard
                icon={<Code className="h-10 w-10 text-[#0056b3]" />}
                title="Web Application Development"
                description="Complex web applications with advanced functionality and user-friendly interfaces."
                features={["Custom Dashboards", "SaaS Applications", "API Development", "Real-time Features"]}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ServiceDetailCard
                icon={<Database className="h-10 w-10 text-[#0056b3]" />}
                title="E-commerce Solutions"
                description="Online stores with secure payment processing, inventory management, and customer accounts."
                features={["Product Catalogs", "Payment Processing", "Inventory Management", "Customer Accounts"]}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ServiceDetailCard
                icon={<Zap className="h-10 w-10 text-[#0056b3]" />}
                title="Business Automation"
                description="Custom tools and systems to automate repetitive tasks and streamline your operations."
                features={["Workflow Automation", "Custom CRM", "Data Processing", "Reporting Tools"]}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ServiceDetailCard
                icon={<Layers className="h-10 w-10 text-[#0056b3]" />}
                title="UI/UX Design"
                description="User-centered design that creates intuitive, engaging, and accessible digital experiences."
                features={["User Research", "Wireframing", "Prototyping", "Usability Testing"]}
              />
            </motion.div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Discuss Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Let's talk about how we can help bring your vision to life with the perfect digital solution.
            </p>
            <Link href="/contact">
              <Button
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-[#0056b3] px-8 py-6 text-lg rounded-lg"
              >
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function ServiceDetailCard({
  icon,
  title,
  description,
  features,
}: {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}) {
  return (
    <Card className="shadow-soft hover:shadow-md transition-all duration-300 border border-gray-100 hover:translate-y-[-5px] h-full bg-white">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-xl font-bold text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600">{description}</p>
        <div className="pt-2">
          <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <div className="h-1.5 w-1.5 rounded-full bg-[#0056b3]"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-4">
          <Link href="/contact" className="text-[#0056b3] hover:text-[#004494] font-medium inline-flex items-center">
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
