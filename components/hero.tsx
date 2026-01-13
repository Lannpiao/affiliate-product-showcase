import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-foreground text-card">
      <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary mb-4">Vitrine de Ofertas</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            Descubra produtos incríveis com os melhores preços
          </h1>
          <p className="mt-6 text-lg text-card/80 leading-relaxed">
            Selecionamos os melhores produtos da Shopee para você. Encontre ofertas exclusivas e economize em suas
            compras.
          </p>
          <div className="mt-10 flex gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/categorias">
                Ver Produtos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-card/30 text-card hover:bg-card/10 bg-transparent"
            >
              <Link href="/sobre">Saiba Mais</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
