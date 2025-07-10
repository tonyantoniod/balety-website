"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CallToAction() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  // Función para validar el formulario
  const validateForm = (formData: FormData): boolean => {
    const errors: Record<string, string> = {}
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string

    // Validar email con una expresión regular básica
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Por favor ingresa un correo electrónico válido"
    }

    // Validar teléfono (formato básico)
    if (phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(phone)) {
      errors.phone = "Por favor ingresa un número de teléfono válido"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Validar el formulario antes de enviar
    if (!validateForm(formData)) {
      setIsSubmitting(false)
      return
    }

    try {
      // Enviar datos a la nueva API route que usa Resend
      const response = await fetch("/api/send-lead-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          industry: formData.get("industry"),
          message: formData.get("message"),
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: "¡Gracias! Tu solicitud ha sido enviada. Nos pondremos en contacto contigo pronto.",
        })

        // Limpiar el formulario después de un envío exitoso
        const form = document.getElementById("contact-form") as HTMLFormElement
        if (form) form.reset()

        // Limpiar errores
        setFormErrors({})
      } else {
        setSubmitStatus({
          success: false,
          message: result.message || "Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente.",
        })
      }
    } catch (error: any) {
      console.error("Error en el formulario:", error)
      setSubmitStatus({
        success: false,
        message:
          "Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente o contáctanos directamente a tony@balety.com",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¿Listo para trabajar con los mejores?
              </h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Solo vendemos a mayoreo. Si buscas calidad, volumen y confianza, hablemos.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-accent text-primary hover:bg-accent/90">
                <a href="#form">Solicita una cotización personalizada</a>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="/cta-image.png"
              alt="Videollamada entre comprador y ejecutivo de Balety discutiendo oportunidades de negocio"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div id="form" className="mt-12 max-w-md mx-auto">
          <form id="contact-form" action={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium leading-none">
                Nombre completo
              </label>
              <input
                id="name"
                name="name"
                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                placeholder="Ingresa tu nombre"
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="company" className="text-sm font-medium leading-none">
                Empresa
              </label>
              <input
                id="company"
                name="company"
                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                placeholder="Nombre de tu empresa"
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium leading-none">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={`flex h-10 w-full rounded-md border ${
                  formErrors.email ? "border-red-500" : "border-gray-200"
                } bg-white px-3 py-2 text-sm text-gray-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
                placeholder="tu@empresa.com"
                required
              />
              {formErrors.email && <p className="text-red-300 text-xs mt-1">{formErrors.email}</p>}
            </div>
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-sm font-medium leading-none">
                Teléfono
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className={`flex h-10 w-full rounded-md border ${
                  formErrors.phone ? "border-red-500" : "border-gray-200"
                } bg-white px-3 py-2 text-sm text-gray-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
                placeholder="+52 55 1234 5678"
                required
              />
              {formErrors.phone && <p className="text-red-300 text-xs mt-1">{formErrors.phone}</p>}
            </div>
            <div className="grid gap-2">
              <label htmlFor="industry" className="text-sm font-medium leading-none">
                Industria de interés
              </label>
              <select
                id="industry"
                name="industry"
                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Selecciona una industria
                </option>
                <option value="home-decor">Hogar & Decoración</option>
                <option value="construction">Materiales & Construcción</option>
                <option value="furniture">Mobiliario de oficina & hogar</option>
                <option value="hygiene">Higiene personal</option>
              </select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium leading-none">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                className="flex min-h-[100px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                placeholder="Cuéntanos sobre tus necesidades de producto"
                required
              ></textarea>
            </div>
            <Button type="submit" className="bg-accent text-primary hover:bg-accent/90 w-full" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar solicitud"}
            </Button>

            {submitStatus && (
              <div
                className={`p-3 rounded-md ${submitStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
              >
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
