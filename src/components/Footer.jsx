import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import Logo from "../../public/logo-massage-app.png" 

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-700 pb-6">
          
          {/* Logo + Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image src={Logo} alt="MassageSpa Logo" width={120} height={50} />
            <p className="mt-2 text-sm text-gray-400">
              Relax. Refresh. Rejuvenate.
            </p>
          </div>

          {/* Footer Nav */}
          <div className="flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Services</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-pink-600 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-tr hover:from-yellow-400 hover:to-pink-500 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-sky-500 transition">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MassageSpa. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
