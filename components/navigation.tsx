"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/geek", label: "Geek Mode", className: "font-mono text-purple-600 dark:text-purple-400" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-white/30 dark:border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-primary">
            Chisomo Misomali
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${item.className || 'text-foreground hover:text-primary'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden backdrop-blur-sm bg-white/30 dark:bg-white/20 border border-white/30 dark:border-white/20 hover:bg-white/40 dark:hover:bg-white/30"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-slate-900 border-b border-white/30 dark:border-white/10 shadow-lg">
              <div className="flex flex-col space-y-1 p-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors py-2 ${item.className || 'text-foreground hover:text-primary'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
