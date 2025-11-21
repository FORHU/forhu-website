"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Logo } from "./logo"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Philosophy", href: "#philosophy" },
    { label: "SCL", href: "#scl" },
    { label: "Research", href: "#research" },
    { label: "About", href: "#about" },
  ]

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-70 transition-opacity">
            <Logo className="w-20 h-20 sm:w-24 sm:h-24 text-foreground" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="#contact"
              onClick={handleContactClick}
              className="px-4 py-2 text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              className="p-2 -mr-2 text-foreground hover:bg-secondary/50 rounded-md transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-border/50 md:hidden animate-fade-in-up">
            <div className="space-y-1 px-2 py-4 bg-background/95 backdrop-blur-md">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-3 text-base font-light text-muted-foreground hover:text-foreground hover:bg-secondary/30 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block px-3 py-3 text-base font-light text-muted-foreground hover:text-foreground hover:bg-secondary/30 rounded-md transition-colors"
                onClick={handleContactClick}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
