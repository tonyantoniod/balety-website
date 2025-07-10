export function StructuredData() {
  // Datos estructurados para la organización
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Balety | Distribución y Comercio",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://balety.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://balety.com"}/logo-light.png`,
    description:
      "Empresa mexicana especializada en comercialización mayorista de productos en 4 industrias clave: Hogar & Decoración, Materiales & Construcción, Mobiliario de oficina & hogar, e Higiene personal.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ciudad de México",
      addressRegion: "CDMX",
      addressCountry: "MX",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+52-55-1234-5678",
      contactType: "customer service",
      email: "ventas@balety.com",
      availableLanguage: "Spanish",
    },
    sameAs: ["https://www.linkedin.com/company/balety"],
  }

  // Datos estructurados para el sitio web
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Balety | Distribución y Comercio",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://balety.com",
    potentialAction: {
      "@type": "SearchAction",
      target: `${process.env.NEXT_PUBLIC_SITE_URL || "https://balety.com"}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  )
}
