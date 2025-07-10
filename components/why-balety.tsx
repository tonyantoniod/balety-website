import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function WhyBalety() {
  return (
    <section id="por-que" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Mucho más que un proveedor.
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl">
              Somos un socio estratégico que aporta experiencia, producto y resultados.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <CheckCircle className="h-8 w-8 text-accent" />
              <CardTitle>Dominio absoluto del producto</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Conocemos a fondo cada producto que comercializamos, sus especificaciones, ventajas y aplicaciones.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <CheckCircle className="h-8 w-8 text-accent" />
              <CardTitle>Relaciones duraderas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Construimos relaciones comerciales sólidas y de largo plazo con nuestros distribuidores y clientes.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <CheckCircle className="h-8 w-8 text-accent" />
              <CardTitle>Selección curada y validada</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Cada producto en nuestro catálogo ha pasado por un riguroso proceso de selección y validación.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <CheckCircle className="h-8 w-8 text-accent" />
              <CardTitle>Compras con volumen y visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Operamos con volúmenes que garantizan disponibilidad y precios competitivos para nuestros clientes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
