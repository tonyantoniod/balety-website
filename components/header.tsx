"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("mobile-menu-open")
    } else {
      document.body.classList.remove("mobile-menu-open")
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("mobile-menu-open")
    }
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/balety-main-logo.svg"
            alt="Balety | Distribución y Comercio"
            width={280}
            height={80}
            className="h-16 w-auto md:h-18 md:w-auto max-w-[240px] md:max-w-[280px]"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#experiencia" className="transition-colors hover:text-accent">
            Experiencia
          </Link>
          <Link href="#industrias" className="transition-colors hover:text-accent">
            Industrias
          </Link>
          <Link href="#por-que" className="transition-colors hover:text-accent">
            ¿Por qué Balety?
          </Link>
          <Link href="#testimonios" className="transition-colors hover:text-accent">
            Testimonios
          </Link>
          <Link href="#contacto">
            <Button className="bg-primary text-white hover:bg-accent hover:text-primary">Contáctanos</Button>
          </Link>
        </nav>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button relative z-60"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-24 z-50 mobile-menu-overlay">
          <div className="container p-6 flex flex-col space-y-4 min-h-full">
            <div className="bg-white/95 dark:bg-slate-900/95 rounded-lg shadow-xl border border-border/50 p-6 space-y-4">
              <Link
                href="#experiencia"
                onClick={() => setIsMenuOpen(false)}
                className="mobile-menu-item block py-3 px-4 rounded-md text-lg font-medium"
              >
                Experiencia
              </Link>
              <Link
                href="#industrias"
                onClick={() => setIsMenuOpen(false)}
                className="mobile-menu-item block py-3 px-4 rounded-md text-lg font-medium"
              >
                Industrias
              </Link>
              <Link
                href="#por-que"
                onClick={() => setIsMenuOpen(false)}
                className="mobile-menu-item block py-3 px-4 rounded-md text-lg font-medium"
              >
                ¿Por qué Balety?
              </Link>
              <Link
                href="#testimonios"
                onClick={() => setIsMenuOpen(false)}
                className="mobile-menu-item block py-3 px-4 rounded-md text-lg font-medium"
              >
                Testimonios
              </Link>
              <div className="pt-4 border-t border-border/30">
                <Link href="#contacto" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-primary text-white hover:bg-accent hover:text-primary py-4 text-lg font-semibold shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02]">
                    Contáctanos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
