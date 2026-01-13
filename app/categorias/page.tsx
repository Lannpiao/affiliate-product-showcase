"use client"

import { useSearchParams } from "next/navigation"
import { useState, Suspense } from "react"
import { ProductGrid } from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { products, categories } from "@/data/products"
import { cn } from "@/lib/utils"

function CategoriasContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("cat")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam)

  const filteredProducts = selectedCategory ? products.filter((p) => p.category === selectedCategory) : products

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Categorias</h1>
        <p className="text-muted-foreground">Explore nossos produtos por categoria</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          onClick={() => setSelectedCategory(null)}
          className={cn(selectedCategory === null && "bg-primary text-primary-foreground")}
        >
          Todos
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.slug ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.slug)}
            className={cn(selectedCategory === category.slug && "bg-primary text-primary-foreground")}
          >
            {category.icon} {category.name}
          </Button>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Nenhum produto encontrado nesta categoria.</p>
        </div>
      )}
    </div>
  )
}

export default function CategoriasPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">Carregando...</div>}>
      <CategoriasContent />
    </Suspense>
  )
}
