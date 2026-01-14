import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/data/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Card className="group overflow-hidden border-border transition-all duration-300 hover:shadow-md">
      {/* Imagem */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        {product.badge && (
          <Badge className="absolute top-2 left-2 z-10 text-[10px] px-2 py-0.5 bg-primary text-primary-foreground">
            {product.badge}
          </Badge>
        )}

        {discount > 0 && (
          <Badge className="absolute top-2 right-2 z-10 text-[10px] px-2 py-0.5 bg-foreground text-card">
            -{discount}%
          </Badge>
        )}

        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      {/* Conteúdo */}
      <CardContent className="p-3 space-y-1.5">
        {/* Nome */}
        <h3 className="text-[13px] leading-tight font-normal text-foreground line-clamp-2 min-h-[34px]">
          {product.name}
        </h3>

        {/* Preços */}
        <div className="flex flex-col leading-none">
          <span className="text-[16px] font-bold text-primary">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>

          {product.originalPrice && (
            <span className="text-[11px] text-muted-foreground line-through mt-0.5">
              R$ {product.originalPrice.toFixed(2).replace(".", ",")}
            </span>
          )}
        </div>


        {/* Botão */}
        <Button
          asChild
          className="w-full h-8 text-[10px] sm:text-[11px] md:text-[13px] font-medium bg-primary hover:bg-primary/90"
        >
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex items-center justify-center gap-1.5"
            aria-label={`Comprar ${product.name} na Shopee`}
          >
            Comprar na Shopee
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
