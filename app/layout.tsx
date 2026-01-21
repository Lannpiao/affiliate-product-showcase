import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Zivoo | Ofertas e Produtos da Shopee",
    template: "%s | Zivoo",
  },
  description:
    "Zivoo é uma vitrine inteligente de produtos da Shopee com links afiliados. Encontre eletrônicos, moda, casa, beleza e ofertas atualizadas.",
  keywords: [
    "ofertas shopee",
    "produtos shopee",
    "promoções shopee",
    "vitrine shopee",
    "links afiliados shopee",
  ],
  authors: [{ name: "Zivoo" }],
  creator: "Zivoo",
  metadataBase: new URL("https://zivoobuy.store/"),

  openGraph: {
    title: "Zivoo | Vitrine de Ofertas da Shopee",
    description:
      "Descubra produtos da Shopee com links diretos. Menos cliques, mais economia.",
    url: "https://zivoobuy.store/",
    siteName: "Zivoo",
    locale: "pt_BR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
