"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState, Suspense } from "react"
import { ProductGrid } from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { categories } from "@/data/categories"
import { supabase } from "@/lib/supabase"
import { cn } from "@/lib/utils"
import type { Product } from "@/data/types/products"

function CategoriasContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("cat")

  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categoryParam
  )
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProducts() {
      setLoading(true)

      let query = supabase.from("products").select("*")

      if (selectedCategory) {
        query = query.eq("category", selectedCategory)
      }

      const { data, error } = await query.order("created_at", {
        ascending: false,
      })

      if (error) {
        console.error(error)
      } else {
        setProducts(data || [])
      }

      setLoading(false)
    }

    loadProducts()
  }, [selectedCategory])

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Categorias
        </h1>
        <p className="text-muted-foreground">
          Explore nossos produtos por categoria
        </p>
      </div>

      {/* Botões de categoria */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          onClick={() => setSelectedCategory(null)}
          className={cn(
            selectedCategory === null &&
              "bg-primary text-primary-foreground"
          )}
        >
          Todos
        </Button>

        {categories.map((category) => (
          <Button
            key={category.id}
            variant={
              selectedCategory === category.slug
                ? "default"
                : "outline"
            }
            onClick={() => setSelectedCategory(category.slug)}
            className={cn(
              selectedCategory === category.slug &&
                "bg-primary text-primary-foreground"
            )}
          >
            {category.icon} {category.name}
          </Button>
        ))}
      </div>

      {/* Conteúdo */}
      {loading ? (
        <p className="text-center py-12 text-muted-foreground">
          Carregando produtos...
        </p>
      ) : products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Nenhum produto encontrado nesta categoria.
          </p>
        </div>
      )}
    </div>
  )
}

export default function CategoriasPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          Carregando...
        </div>
      }
    >
      <CategoriasContent />
    </Suspense>
  )
}
