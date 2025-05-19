import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { BarChart2, CheckCircle, ChevronRight, Globe, Menu, PlayCircle, Settings, Shield, Users, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This is an example business/corporate landing page template that would be accessible via subdomain
export default function BusinessTemplate() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="#" className="text-xl font-bold text-[#007BFF]">
                <span className="text-[#1C2B39]">Nexus</span>Solutions
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="#solutions" className="text-sm font-medium hover:text-[#007BFF]">
                Solutions
              </Link>
              <Link href="#features" className="text-sm font-medium hover:text-[#007BFF]">
                Features
              </Link>
              <Link href="#pricing" className="text-sm font-medium hover:text-[#007BFF]">
                Pricing
              </Link>
              <Link href="#testimonials" className="text-sm font-medium hover:text-[#007BFF]">
                Testimonials
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-[#007BFF]">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="outline" className="hidden md:flex border-[#007BFF] text-[#007BFF]">
                Log In
              </Button>
              <Button className="hidden md:flex bg-[#007BFF] hover:bg-[#0069d9]">Get Started</Button>

              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col h-full px-2">
                    <div className="flex items-center justify-between py-4">
                      <Link href="#" className="text-xl font-bold">
                        <span className="text-[#1C2B39]">Nexus</span>
                        <span className="text-[#007BFF]">Solutions</span>
                      </Link>
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <X className="h-5 w-5" />
                          <span className="sr-only">Close</span>
                        </Button>
                      </SheetTrigger>
                    </div>

                    <nav className="flex flex-col gap-4 px-2 pt-8">
                      <Link href="#solutions" className="text-base font-medium hover:text-[#007BFF]">
                        Solutions
                      </Link>
                      <Link href="#features" className="text-base font-medium hover:text-[#007BFF]">
                        Features
                      </Link>
                      <Link href="#pricing" className="text-base font-medium hover:text-[#007BFF]">
                        Pricing
                      </Link>
                      <Link href="#testimonials" className="text-base font-medium hover:text-[#007BFF]">
                        Testimonials
                      </Link>
                      <Link href="#contact" className="text-base font-medium hover:text-[#007BFF]">
                        Contact
                      </Link>
                    </nav>

                    <div className="mt-auto py-6 space-y-4">
                      <Button variant="outline" className="w-full border-[#007BFF] text-[#007BFF]">
                        Log In
                      </Button>
                      <Button className="w-full bg-[#007BFF] hover:bg-[#0069d9]">Get Started</Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#E6F0FA] to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Business Solutions for the Digital Age
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Streamline operations, increase productivity, and drive growth with our comprehensive business
                solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#007BFF] hover:bg-[#0069d9] px-6 py-6 text-lg">Get Started</Button>
                <Button
                  variant="outline"
                  className="border-[#007BFF] text-[#007BFF] flex items-center gap-2 px-6 py-6 text-lg"
                >
                  <PlayCircle className="h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-8">
                <div className="flex -space-x-2">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="User"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="User"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="User"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                </div>
                <p className="text-gray-600">
                  <span className="font-bold">500+</span> companies trust us
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Business Dashboard"
                width={600}
                height={600}
                className="rounded-xl shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 px-4 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-xl font-medium text-gray-500">Trusted by industry leaders</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((logo) => (
              <div key={logo} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <Image
                  src={`/placeholder.svg?height=40&width=120&text=LOGO+${logo}`}
                  alt={`Company logo ${logo}`}
                  width={120}
                  height={40}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a range of solutions to help businesses of all sizes succeed in today's competitive landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SolutionCard
              icon={<BarChart2 className="h-8 w-8 text-[#007BFF]" />}
              title="Business Analytics"
              description="Gain valuable insights from your data to make informed business decisions."
            />
            <SolutionCard
              icon={<Users className="h-8 w-8 text-[#007BFF]" />}
              title="Team Collaboration"
              description="Streamline communication and boost productivity with our collaboration tools."
            />
            <SolutionCard
              icon={<Globe className="h-8 w-8 text-[#007BFF]" />}
              title="Global Reach"
              description="Expand your business globally with our international solutions."
            />
            <SolutionCard
              icon={<Settings className="h-8 w-8 text-[#007BFF]" />}
              title="Process Automation"
              description="Automate repetitive tasks and focus on what matters most to your business."
            />
            <SolutionCard
              icon={<Shield className="h-8 w-8 text-[#007BFF]" />}
              title="Security & Compliance"
              description="Keep your data secure and maintain compliance with industry regulations."
            />
            <SolutionCard
              icon={<CheckCircle className="h-8 w-8 text-[#007BFF]" />}
              title="Quality Assurance"
              description="Ensure your products and services meet the highest standards of quality."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-[#E6F0FA]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is packed with powerful features to help your business succeed.
            </p>
          </div>

          <Tabs defaultValue="analytics" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white">
                <TabsTrigger
                  value="analytics"
                  className="data-[state=active]:bg-[#007BFF] data-[state=active]:text-white"
                >
                  Analytics
                </TabsTrigger>
                <TabsTrigger
                  value="automation"
                  className="data-[state=active]:bg-[#007BFF] data-[state=active]:text-white"
                >
                  Automation
                </TabsTrigger>
                <TabsTrigger
                  value="collaboration"
                  className="data-[state=active]:bg-[#007BFF] data-[state=active]:text-white"
                >
                  Collaboration
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="data-[state=active]:bg-[#007BFF] data-[state=active]:text-white"
                >
                  Security
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="analytics" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Advanced Analytics</h3>
                  <p className="text-gray-700 mb-6">
                    Our advanced analytics tools help you understand your data and make better business decisions.
                  </p>
                  <ul className="space-y-4">
                    <FeatureItem>Real-time data dashboards</FeatureItem>
                    <FeatureItem>Custom reports and visualizations</FeatureItem>
                    <FeatureItem>Predictive analytics and forecasting</FeatureItem>
                    <FeatureItem>Performance tracking and benchmarking</FeatureItem>
                  </ul>
                  <Button className="mt-8 bg-[#007BFF] hover:bg-[#0069d9]">Learn More</Button>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Analytics Dashboard"
                    width={600}
                    height={500}
                    className="rounded-xl shadow-xl"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Other tab contents would follow similar structure */}
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">Startup</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  <PricingItem included>Up to 5 team members</PricingItem>
                  <PricingItem included>Basic analytics</PricingItem>
                  <PricingItem included>5GB storage</PricingItem>
                  <PricingItem included>Email support</PricingItem>
                  <PricingItem>Advanced reporting</PricingItem>
                  <PricingItem>Custom integrations</PricingItem>
                </ul>
                <Button className="w-full bg-white border border-[#007BFF] text-[#007BFF] hover:bg-[#E6F0FA]">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#007BFF] shadow-lg relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#007BFF] text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">Business</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$79</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  <PricingItem included>Up to 20 team members</PricingItem>
                  <PricingItem included>Advanced analytics</PricingItem>
                  <PricingItem included>20GB storage</PricingItem>
                  <PricingItem included>Priority email & chat support</PricingItem>
                  <PricingItem included>Advanced reporting</PricingItem>
                  <PricingItem>Custom integrations</PricingItem>
                </ul>
                <Button className="w-full bg-[#007BFF] hover:bg-[#0069d9]">Choose Plan</Button>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">Enterprise</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$199</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  <PricingItem included>Unlimited team members</PricingItem>
                  <PricingItem included>Advanced analytics</PricingItem>
                  <PricingItem included>100GB storage</PricingItem>
                  <PricingItem included>24/7 phone & chat support</PricingItem>
                  <PricingItem included>Advanced reporting</PricingItem>
                  <PricingItem included>Custom integrations</PricingItem>
                </ul>
                <Button className="w-full bg-white border border-[#007BFF] text-[#007BFF] hover:bg-[#E6F0FA]">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need a custom plan for your specific requirements?</p>
            <Button variant="outline" className="border-[#007BFF] text-[#007BFF]">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-[#E6F0FA]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Nexus Solutions has transformed our business operations. The analytics tools have helped us make data-driven decisions that have significantly improved our bottom line."
              author="Sarah Johnson"
              company="TechCorp Inc."
              image="/placeholder.svg?height=60&width=60"
            />
            <TestimonialCard
              quote="The team collaboration features have made remote work seamless for our global team. We've seen a 30% increase in productivity since implementing Nexus Solutions."
              author="Michael Chen"
              company="Global Innovations"
              image="/placeholder.svg?height=60&width=60"
            />
            <TestimonialCard
              quote="Security was our top concern when choosing a solution. Nexus Solutions has exceeded our expectations with their robust security measures and compliance features."
              author="Emma Rodriguez"
              company="Secure Financial Group"
              image="/placeholder.svg?height=60&width=60"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#1C2B39] text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using Nexus Solutions to streamline operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#007BFF] hover:bg-[#0069d9] px-8 py-6 text-lg">Get Started</Button>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#1C2B39] px-8 py-6 text-lg"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-700 mb-8">
                Have questions or want to learn more about our solutions? Our team is here to help.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-md border border-gray-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-md border border-gray-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 rounded-md border border-gray-300"
                    placeholder="Your company"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-gray-300"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <Button className="w-full bg-[#007BFF] hover:bg-[#0069d9]">Send Message</Button>
              </form>
            </div>

            <div className="flex flex-col justify-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image src="/placeholder.svg?height=800&width=800" alt="Contact us" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#1C2B39] text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="#" className="text-xl font-bold mb-4 inline-block">
                <span className="text-white">Nexus</span>
                <span className="text-[#007BFF]">Solutions</span>
              </Link>
              <p className="text-gray-300 mb-4">Business solutions for the digital age.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Collaboration
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Automation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} NexusSolutions. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 01-1.197 2.047c-1.497 2.271-3.11 4.1-3.263 4.279a8.446 8.446 0 01-2.408-5.873 8.513 8.513 0 014.01-7.274c.12.084 1.547 1.483 3.458 3.821zm-4.633 9.84a8.611 8.611 0 005.275 5.503c.138-.248 1.705-3.273 2.369-6.764.135-.615.255-1.23.353-1.841-4.1-1.162-7.729-1.442-8.176-1.458-.005.095-.007.19-.007.285a8.41 8.41 0 00.186 3.275zm9.167 7.422c-2.785 1.103-5.98.99-8.713-.321.186-.384 2.265-4.331 8.027-5.676.01-.003.022-.005.032-.008 1.463 3.892 2.046 7.112 2.155 8.006-.499.215-1.003.396-1.513.544z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SolutionCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4">
          <Link href="#" className="text-[#007BFF] font-medium hover:underline inline-flex items-center">
            Learn more <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-1">
        <CheckCircle className="h-5 w-5 text-[#007BFF]" />
      </div>
      <span>{children}</span>
    </li>
  )
}

function PricingItem({ children, included = false }: { children: React.ReactNode; included?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-0.5">
        {included ? <CheckCircle className="h-5 w-5 text-[#007BFF]" /> : <X className="h-5 w-5 text-gray-400" />}
      </div>
      <span className={included ? "" : "text-gray-400"}>{children}</span>
    </li>
  )
}

function TestimonialCard({
  quote,
  author,
  company,
  image,
}: {
  quote: string
  author: string
  company: string
  image: string
}) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <CardContent className="p-6">
        <div className="mb-4">
          <svg
            width="45"
            height="36"
            className="text-[#007BFF] opacity-40"
            viewBox="0 0 45 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4 36L0 22.6V0H22.6V22.6H11.3L13.4 36ZM35.8 36L22.4 22.6V0H45V22.6H33.7L35.8 36Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <p className="text-gray-700 mb-6">{quote}</p>
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-full">
            <Image src={image || "/placeholder.svg"} alt={author} width={60} height={60} className="object-cover" />
          </div>
          <div>
            <div className="font-semibold">{author}</div>
            <div className="text-sm text-gray-500">{company}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
