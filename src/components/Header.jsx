"use client"
import React, { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-md"
          : "bg-black/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-massage-app.png"
              alt="Opulent Touch Logo"
              width={180}
              height={180}
              className="rounded-md"
            />
            
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <Link
                  href={link.href}
                  className="relative text-sm font-medium text-gray-200 transition-colors hover:text-[#B6963B]
                  after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0
                  after:bg-[#B6963B] after:transition-all after:duration-500 hover:after:w-full"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Button
                size="sm"
                className="ml-2 bg-[#B6963B] text-black hover:bg-[#d1a94e]"
              >
                Request Consultation
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md hover:bg-gray-800 transition"
            >
              {mobileOpen ? (
                <X className="text-[#B6963B]" />
              ) : (
                <Menu className="text-[#B6963B]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 shadow-sm"
        >
          <div className="px-4 pt-3 pb-5 space-y-2">
            {navLinks.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-medium text-gray-200 hover:text-[#B6963B] transition-colors"
                >
                  {l.name}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.02 }}>
              <Button className="mt-2 w-full bg-[#B6963B] text-black hover:bg-[#d1a94e]">
                Request Consultation
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
