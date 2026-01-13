import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import type { Category } from "@/data/products"

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categorias?cat=${category.slug}`}>
      <Card className="group hover:shadow-md transition-shadow cursor-pointer border-border">
        <CardContent className="p-6 text-center">
          <span className="text-4xl mb-3 block">{category.icon}</span>
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{category.name}</h3>
        </CardContent>
      </Card>
    </Link>
  )
}
