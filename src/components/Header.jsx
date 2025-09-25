"use client"

import React, { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isSheetOpen, setIsSheetOpen] = useState(false);


  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)

    // sections ka scroll detection
    const sections = document.querySelectorAll("section[id]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((sec) => observer.observe(sec))

    return () => {
      window.removeEventListener("scroll", onScroll)
      sections.forEach((sec) => observer.unobserve(sec))
    }
  }, [])

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Benefits", href: "/#benifits" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-black/90 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="perspective-[1000px]">
            <Image
              src="/logo-massage-app.png"
              alt="Partner Logo"
              width={40}
              height={40}
              className="object-cover animate-spin-horizontal"
            />
          </div>

          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
              duration: 1.5,
            }}
          >
            <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
              Opulent <span className="text-[#B6963B]">Touch</span>
            </Link>
          </motion.div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              pathname === "/login"
                ? false
                : activeSection === link.href.replace("/#", "#")

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  relative text-white transition-colors
                  hover:text-[#B6963B]
                  after:absolute after:left-1/2 after:-translate-x-1/2
                  after:bottom-[-6px] after:h-[2px]
                  after:bg-[#B6963B] after:rounded-full
                  after:transition-all after:duration-300
                  after:w-0 hover:after:w-[70%]
                  ${isActive ? "text-[#B6963B] after:w-[70%]" : ""}
                `}
              >
                {link.name}
              </Link>
            )
          })}

          {/* Login button */}
          <Link
            href="/login"
            className={`ml-4 px-4 py-2 border border-[#B6963B] text-[#B6963B] rounded-lg hover:bg-[#B6963B] hover:text-black transition ${
              pathname === "/login" ? "bg-[#B6963B] text-black" : ""
            }`}
          >
            Log In
          </Link>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
  <SheetTrigger>
    <Menu className="text-white h-6 w-6" />
  </SheetTrigger>

  <SheetContent side="right" className="bg-black text-white w-64">
    <nav className="flex flex-col gap-6 mt-10 px-3">
      {navLinks.map((link) => {
        const isActive =
          pathname === "/login" ? false : activeSection === link.href.replace("/#", "#");

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`text-lg ${isActive ? "text-[#B6963B]" : "text-white"}`}
            onClick={() => setIsSheetOpen(false)} // <-- Close sheet on click
          >
            {link.name}
          </Link>
        );
      })}
      <Link
        href="/login"
        className={`px-4 py-2 border border-[#B6963B] text-[#B6963B] rounded-lg hover:bg-[#B6963B] hover:text-black transition ${
          pathname === "/login" ? "bg-[#B6963B] text-black" : ""
        }`}
        onClick={() => setIsSheetOpen(false)} // <-- Close sheet on login click
      >
        Log In
      </Link>
    </nav>
  </SheetContent>
</Sheet>

        </div>
      </div>
    </header>
  )
}
