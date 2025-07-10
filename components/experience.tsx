import Image from "next/image"

export function Experience() {
  return (
    <section id="experiencia" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="/experience-image.png"
              alt="Equipo de Balety analizando productos y estrategias de distribución mayorista"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Más de una década comercializando con inteligencia.
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                No improvisamos. Sabemos lo que vendemos porque conocemos cada industria desde adentro.
              </p>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Trabajamos con empresas que entienden el valor de tener un proveedor experto, confiable y preparado para
                crecer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
