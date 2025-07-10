import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Comercialización experta. Resultados que escalan.
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Somos una empresa sólida con experiencia real en distribución mayorista. Dominamos cada producto, cada
                industria y cada relación comercial.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-accent text-primary hover:bg-accent/90">
                <a href="#contacto">Contáctanos</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-transparent text-primary hover:bg-accent/10 bg-transparent"
              >
                <a href="#contacto">Solicita una reunión</a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block relative h-full min-h-[300px] overflow-hidden rounded-lg">
            <Image
              src="/hero-image.png"
              alt="Ejecutivos de Balety en reunión de negocios discutiendo estrategias de distribución mayorista"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent"></div>
    </section>
  )
}
