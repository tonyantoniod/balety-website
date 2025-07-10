import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sofa, HardHat, Briefcase, ShowerHeadIcon as Shower } from "lucide-react"

export function Industries() {
  return (
    <section id="industrias" className="w-full py-12 md:py-24 lg:py:32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Especialización que marca la diferencia.
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl">
              Nuestro mayor diferenciador: somos expertos en las industrias que operamos.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <Card className="overflow-hidden">
            <div className="relative h-48 bg-gradient-to-br from-accent/20 to-primary/20">
              <div className="flex items-center justify-center h-full">
                <Sofa className="h-16 w-16 text-accent" />
              </div>
            </div>
            <CardHeader className="flex flex-row items-center gap-4">
              <Sofa className="h-8 w-8 text-accent" />
              <CardTitle>Hogar & Decoración</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Diseño, calidad y funcionalidad para crear espacios acogedores y estéticamente atractivos.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-48 bg-gradient-to-br from-secondary/20 to-primary/20">
              <div className="flex items-center justify-center h-full">
                <HardHat className="h-16 w-16 text-secondary" />
              </div>
            </div>
            <CardHeader className="flex flex-row items-center gap-4">
              <HardHat className="h-8 w-8 text-accent" />
              <CardTitle>Materiales & Construcción</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Materiales y soluciones de calidad para proyectos constructivos de cualquier escala.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="flex items-center justify-center h-full">
                <Briefcase className="h-16 w-16 text-primary" />
              </div>
            </div>
            <CardHeader className="flex flex-row items-center gap-4">
              <Briefcase className="h-8 w-8 text-accent" />
              <CardTitle>Mobiliario de oficina & hogar</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Soluciones funcionales y ergonómicas para espacios de trabajo y vivienda.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-48 bg-gradient-to-br from-accent/20 to-secondary/20">
              <div className="flex items-center justify-center h-full">
                <Shower className="h-16 w-16 text-accent" />
              </div>
            </div>
            <CardHeader className="flex flex-row items-center gap-4">
              <Shower className="h-8 w-8 text-accent" />
              <CardTitle>Higiene personal</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Productos de calidad para el cuidado e higiene personal diaria.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
