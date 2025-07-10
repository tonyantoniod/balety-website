import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

// Metadatos optimizados para SEO
export const metadata: Metadata = {
  title: "Balety | Distribución y Comercio Mayorista en México",
  description:
    "Empresa mexicana especializada en comercialización mayorista de productos en 4 industrias clave: Hogar & Decoración, Materiales & Construcción, Mobiliario de oficina & hogar, e Higiene personal. Pedidos mínimos de $500,000 MXN.",
  keywords: [
    "distribución mayorista México",
    "comercio mayorista",
    "productos hogar mayoreo",
    "materiales construcción mayorista",
    "mobiliario oficina mayorista",
    "productos higiene personal mayoreo",
    "Balety",
    "distribuidores México",
  ],
  authors: [{ name: "Balety", url: "https://balety.com" }],
  creator: "Balety",
  publisher: "Balety",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://balety.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://balety.com",
    title: "Balety | Distribución y Comercio Mayorista en México",
    description:
      "Empresa mexicana especializada en comercialización mayorista de productos en 4 industrias clave. Somos expertos en cada industria que atendemos.",
    siteName: "Balety | Distribución y Comercio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Balety | Distribución y Comercio Mayorista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balety | Distribución y Comercio Mayorista en México",
    description:
      "Empresa mexicana especializada en comercialización mayorista de productos en 4 industrias clave. Somos expertos en cada industria que atendemos.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0D1B2A",
      },
    ],
  },
  manifest: "/site.webmanifest",
  applicationName: "Balety | Distribución y Comercio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Primary favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* PNG favicons for different sizes */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

        {/* SVG favicon for modern browsers */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Safari Pinned Tab */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0D1B2A" />

        {/* Android Chrome Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#0D1B2A" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Theme Colors */}
        <meta name="theme-color" content="#0D1B2A" />
        <meta name="msapplication-navbutton-color" content="#0D1B2A" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Canonical URL */}
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || "https://balety.com"} />

        {/* Preload critical resources */}
        <link rel="preload" href="/balety-logo.svg" as="image" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
