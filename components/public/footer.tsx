import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function PublicFooter() {
  return (
    <footer className="bg-[#1C2235] text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">ZHAcademie</h3>
            <p className="text-gray-300 text-sm">
              Helping international students achieve their academic dreams in the United States.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white text-sm">
                  University Admissions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white text-sm">
                  Visa Application
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white text-sm">
                  Interview Preparation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white text-sm">
                  Document Assistance
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white text-sm">
                  Housing Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 text-sm space-y-2">
              <p>123 Education Street</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
              <p className="pt-2">
                <a href="mailto:info@zhacademie.com" className="hover:text-white">
                  info@zhacademie.com
                </a>
              </p>
              <p>
                <a href="tel:+1234567890" className="hover:text-white">
                  +1 (234) 567-890
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} ZHAcademie. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
