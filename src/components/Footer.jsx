"use client"

import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import Logo from "../../public/logo-massage-app.png"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 border-t border-[#B6963B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-6">
          
          {/* Logo + Tagline */}
          <div className="flex flex-col items-center text-center md:text-left">
            <Image
              src={Logo}
              alt="Opulent Touch Logo"
              width={80}
              height={80}
              className="mb-2"
            />
            <p className="text-sm text-gray-400">
              Elevating Wellness. Empowering Productivity.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-full border border-[#B6963B]/40 hover:bg-[#B6963B] hover:text-black transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-[#B6963B]/40 hover:bg-[#B6963B] hover:text-black transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-[#B6963B]/40 hover:bg-[#B6963B] hover:text-black transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
          © {new Date().getFullYear()} Opulent Touch. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
