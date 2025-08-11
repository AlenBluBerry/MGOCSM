import Link from "next/link"
import { Cross, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <Cross className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-lg font-bold">MGOCSM</span>
            </div>
            <p className="text-stone-300 text-sm leading-relaxed">
              Malankara Orthodox Syrian Church - A community of faith, worship, and spiritual growth rooted in ancient
              Orthodox traditions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-stone-300 hover:text-yellow-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-stone-300 hover:text-yellow-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/faith-study" className="text-stone-300 hover:text-yellow-400 transition-colors text-sm">
                  Orthodox Faith Study
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-stone-300 hover:text-yellow-400 transition-colors text-sm">
                  Sermons
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-yellow-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span className="text-stone-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span className="text-stone-300 text-sm">info@mgocsm.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span className="text-stone-300 text-sm">123 Church Street, City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-yellow-400">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-300 hover:text-yellow-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-300 hover:text-yellow-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-300 hover:text-yellow-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-8 text-center">
          <p className="text-stone-400 text-sm">© 2024 Malankara Orthodox Syrian Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
