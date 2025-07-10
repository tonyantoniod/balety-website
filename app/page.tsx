import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Industries } from "@/components/industries"
import { WhyBalety } from "@/components/why-balety"
import { Testimonials } from "@/components/testimonials"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { StructuredData } from "@/components/structured-data"

// Metadatos específicos de la página principal
export const metadata: Metadata = {
  title: "Balety | Comercialización Mayorista Experta en México",
  description:
    "Somos una empresa sólida con experiencia real en distribución mayorista. Dominamos cada producto, cada industria y cada relación comercial. Pedidos mínimos de $500,000 MXN.",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <StructuredData />
      <Header />
      <Hero />
      <Experience />
      <Industries />
      <WhyBalety />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  )
}
