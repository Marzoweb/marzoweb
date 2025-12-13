import Link from "next/link"
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { League_Spartan, Kalam } from "next/font/google"

const leagueSpartan = League_Spartan({ subsets: ["latin"], weight: ["700"] })
const kalam = Kalam({ subsets: ["latin"], weight: ["700"] })

export default function Footer() {
  return (
    <footer className="gradient-bg-footer text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">
              <span className={leagueSpartan.className}>MARZO</span>
              <span className={kalam.className}>WEB</span>
            </h3>
            <p className="text-gray-300">
              Modern web solutions tailored to your business goals. Custom websites and web applications that drive
              results.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-gray-300 hover:text-white transition-colors">
                  Templates
                </Link>
              </li>
              {/*<li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>*/}
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Custom Websites
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Business Automation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Mobile-Friendly Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Quick Launch Templates
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Connect</h3>
            {/*<div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.facebook.com/MarzoWeb/" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>*/}
            <div className="pt-2">
              <p className="text-gray-300">Email: marzowebagency@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© {new Date().getFullYear()} <span className={leagueSpartan.className}>MARZO</span><span className={kalam.className}>WEB</span>. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
