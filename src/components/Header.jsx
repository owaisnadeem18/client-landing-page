"use client"
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-500 overflow-hidden ${
        scrolled
          ? "bg-gradient-to-r from-rose-50/80 via-white/80 to-rose-50/80 backdrop-blur-md shadow-md"
          : "bg-gradient-to-r from-rose-50 via-white to-rose-50"
      }`}
    >
      {/* Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="absolute w-16 h-16 bg-rose-200/30 rounded-full blur-xl animate-float"
            style={{
              left: `${20 * i}%`,
              animationDelay: `${i * 3}s`,
            }}
          ></span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo with glow + breathing */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-44 h-44 drop-shadow-lg"
          >
            <Image
              src="/logo-massage-app.png"
              alt="MassageSpa Logo"
              fill
              className="object-cover rounded-md"
            />
          </motion.div>

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
                  className="relative text-sm font-medium text-gray-700 transition-colors hover:text-rose-600 
                  after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 
                  after:bg-rose-400 after:transition-all after:duration-500 hover:after:w-full"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Button size="sm" className="ml-2 shadow-md hover:shadow-lg">
                Book Now
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none transition"
            >
              {mobileOpen ? <X /> : <Menu />}
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
          className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-sm"
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
                  className="block py-2 text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors"
                >
                  {l.name}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.02 }}>
              <Button className="mt-2 w-full shadow-md hover:shadow-lg">
                Book Now
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

