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
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        {product.badge && (
          <Badge className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground">{product.badge}</Badge>
        )}
        {discount > 0 && (
          <Badge variant="secondary" className="absolute top-3 right-3 z-10 bg-foreground text-card">
            -{discount}%
          </Badge>
        )}
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4 space-y-3">
        <h3 className="font-medium text-foreground line-clamp-2 min-h-[48px]">{product.name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-primary">R$ {product.price.toFixed(2).replace(".", ",")}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              R$ {product.originalPrice.toFixed(2).replace(".", ",")}
            </span>
          )}
        </div>
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            Comprar na Shopee
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
