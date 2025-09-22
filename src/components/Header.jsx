"use client"
import React, { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { NavItems } from "./NavItem"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // IntersectionObserver for active section
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"))
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.55 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Services", href: "#services", id: "services" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-gradient-to-r from-black/90 via-black/80 to-black/90 border-b border-[#B6963B]/30 shadow-lg"
          : "bg-gradient-to-r from-black/70 via-black/60 to-black/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-massage-app.png"
                alt="Opulent Touch Logo"
                width={140}
                height={40}
                className="object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="hidden md:flex items-center gap-6"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.id}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? "text-[#B6963B]"
                      : "text-gray-200 hover:text-[#B6963B]"
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-[#B6963B] to-[#d1a94e] rounded-full"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
<motion.div whileHover={{ scale: 1.05 }}>
  <Button
    size="sm"
    onClick={() => {
      const section = document.getElementById("contact")
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
        // Agar URL hash bhi dikhana ho toh:
        window.history.pushState(null, "", "#contact")
      }
    }}
    className="ml-2 bg-[#B6963B] text-black hover:bg-[#d1a94e] rounded-xl shadow-md hover:shadow-lg transition"
  >
    Request Consultation
  </Button>
</motion.div>
          </motion.div>

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
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="md:hidden bg-black/95 backdrop-blur-lg border-t border-[#B6963B]/30 shadow-lg"
        >
          <div className="px-4 pt-3 pb-5 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-base transition ${
                  activeSection === link.id
                    ? "text-[#B6963B] font-semibold"
                    : "text-gray-300 hover:text-[#B6963B]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <motion.div whileHover={{ scale: 1.03 }}>
              <Button className="mt-3 w-full bg-[#B6963B] text-black hover:bg-[#d1a94e] shadow-md hover:shadow-lg rounded-xl">
                Request Consultation
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
