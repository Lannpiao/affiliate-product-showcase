import { ShoppingBag, Shield, Heart, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: ShoppingBag,
    title: "Produtos Selecionados",
    description: "Escolhemos cuidadosamente cada produto para garantir qualidade e bons preços.",
  },
  {
    icon: Shield,
    title: "Compra Segura",
    description: "Todos os links direcionam para a Shopee, garantindo segurança na sua compra.",
  },
  {
    icon: Heart,
    title: "Ofertas Exclusivas",
    description: "Buscamos as melhores ofertas e descontos para nossos visitantes.",
  },
  {
    icon: Sparkles,
    title: "Atualização Constante",
    description: "Nosso catálogo é atualizado regularmente com novos produtos.",
  },
]

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-3xl font-bold text-foreground mb-4">Sobre a Zivoo</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A Zivoo é uma vitrine online dedicada a apresentar os melhores produtos disponíveis na Shopee. Nossa missão é
          facilitar sua busca por produtos de qualidade com preços acessíveis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {features.map((feature) => (
          <Card key={feature.title} className="border-border">
            <CardContent className="p-6">
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-secondary rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">Sobre os Links de Afiliados</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Este site utiliza links de afiliados da Shopee. Isso significa que podemos receber uma pequena comissão quando
          você realiza uma compra através dos nossos links, sem nenhum custo adicional para você. Essa comissão nos
          ajuda a manter o site funcionando e a continuar buscando as melhores ofertas.
        </p>
      </div>
    </div>
  )
}
