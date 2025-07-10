import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 lg:py-20 bg-gray-900 text-gray-300">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2" aria-label="Balety - Página principal">
              <Image
                src="/balety-logo.svg"
                alt="Logo de Balety | Distribución y Comercio"
                width={200}
                height={50}
                className="h-12 w-auto max-w-[180px] brightness-0 invert"
              />
            </Link>
            <p className="max-w-[400px] text-gray-400">
              Empresa mexicana especializada en comercialización mayorista de productos, con enfoque estratégico en 4
              industrias clave.
            </p>
            <p className="text-accent font-semibold">Solo ventas al por mayor. No atendemos menudeo.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-4">Información de contacto</h3>
              <ul className="grid gap-3">
                <li className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
                  <span>Ciudad de México, México</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
                  <span>+52 55 1234 5678</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
                  <span>ventas@balety.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5 text-accent" aria-hidden="true" />
                  <a href="#" className="hover:text-accent">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="grid gap-3">
                <li>
                  <Link href="#experiencia" className="hover:text-accent">
                    Nuestra experiencia
                  </Link>
                </li>
                <li>
                  <Link href="#industrias" className="hover:text-accent">
                    Industrias que atendemos
                  </Link>
                </li>
                <li>
                  <Link href="#por-que" className="hover:text-accent">
                    ¿Por qué Balety?
                  </Link>
                </li>
                <li>
                  <Link href="#testimonios" className="hover:text-accent">
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="hover:text-accent">
                    Contáctanos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Balety | Distribución y Comercio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
