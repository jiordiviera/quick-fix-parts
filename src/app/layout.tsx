import "./globals.css"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type React from "react"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

export const metadata: Metadata = {
  title: "AutoParts Cameroun - Pièces Détachées de Qualité",
  description:
    "Votre source fiable pour des pièces détachées automobiles de qualité au Cameroun. Large gamme de pièces disponibles avec livraison dans tout le pays.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}

