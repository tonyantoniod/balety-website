import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export function Testimonials() {
  return (
    <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Empresas que ya confían en nosotros.
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl">
              Trabajamos con más de 50 distribuidores y cadenas comerciales en México.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="/testimonial-image.png"
              alt="Clientes satisfechos trabajando con productos distribuidos por Balety"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <CardHeader className="text-lg font-semibold">Distribuidora Nacional S.A.</CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "La calidad de los productos y el servicio de Balety han sido fundamentales para nuestro crecimiento
                  en el sector de muebles y decoración."
                </p>
              </CardContent>
              <CardFooter className="text-sm text-gray-500">Director Comercial</CardFooter>
            </Card>
            <Card>
              <CardHeader className="text-lg font-semibold">Grupo Ferretero del Norte</CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Llevamos 5 años trabajando con Balety y su conocimiento del mercado de herramientas nos ha permitido
                  diferenciarnos de la competencia."
                </p>
              </CardContent>
              <CardFooter className="text-sm text-gray-500">Gerente de Compras</CardFooter>
            </Card>
            <Card>
              <CardHeader className="text-lg font-semibold">Electrónica Moderna</CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "El soporte y la capacidad de respuesta de Balety son excepcionales. Siempre cumplen con los plazos y
                  volúmenes acordados."
                </p>
              </CardContent>
              <CardFooter className="text-sm text-gray-500">Director General</CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
