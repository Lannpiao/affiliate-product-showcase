import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Product } from "../data/types/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const discount =
    product.original_price &&
    product.original_price > product.price
      ? Math.round(
          ((product.original_price - product.price) /
            product.original_price) *
            100
        )
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
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>

      {/* Conteúdo */}
      <CardContent className="p-3 space-y-1.5">
        <h3 className="text-[14px] leading-tight font-semibold text-foreground line-clamp-2 min-h-[34px]">
          {product.name}
        </h3>

        {/* Preços */}
        <div className="flex flex-col leading-none">
          <span className="text-[16px] font-bold text-primary">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>

          {product.original_price && (
            <span className="text-[11px] text-muted-foreground line-through mt-0.5">
              R$ {product.original_price
                .toFixed(2)
                .replace(".", ",")}
            </span>
          )}

          {product.sold > 0 && (
            <span className="text-[11px] text-muted-foreground mt-0.5">
              {product.sold.toLocaleString("pt-BR")} vendidos
            </span>
          )}
        </div>

        {/* Botão */}
        <Button
          asChild
          className="w-full h-8 text-[10px] sm:text-[11px] md:text-[13px] font-medium bg-primary hover:bg-primary/90"
        >
          <a
            href={product.link}
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
