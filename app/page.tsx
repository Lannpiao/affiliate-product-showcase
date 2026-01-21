"use client"

import { useEffect, useRef, useState } from "react"
import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/product-grid"
import { CategoryCard } from "@/components/category-card"
import { ProductSkeleton } from "@/components/ui/product-skeleton"
import { products, categories } from "@/data/products"

const PRODUCTS_PER_PAGE = 8

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.badge).slice(0, 5)

  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE)
  const [isLoading, setIsLoading] = useState(false)
  const loaderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setIsLoading(true)

          // simula tempo de carregamento (UX mais natural)
          setTimeout(() => {
            setVisibleCount((prev) =>
              prev >= products.length
                ? prev
                : prev + PRODUCTS_PER_PAGE
            )
            setIsLoading(false)
          }, 600)
        }
      },
      { threshold: 0.8 }
    )

    if (loaderRef.current) observer.observe(loaderRef.current)

    return () => observer.disconnect()
  }, [isLoading])

  const visibleProducts = products.slice(0, visibleCount)

  return (
    <>
      <Hero />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <section className="py-12">
          <h2 className="text-2xl font-bold mb-8">Categorias</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        <ProductGrid
          products={featuredProducts}
          title="Destaques"
        />

        <ProductGrid
          products={visibleProducts}
          title="Todos os Produtos"
        />

        {/* Skeletons enquanto carrega */}
        {isLoading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {Array.from({ length: PRODUCTS_PER_PAGE }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Gatilho do scroll infinito */}
        {visibleCount < products.length && (
          <div
            ref={loaderRef}
            className="h-10"
          />
        )}
        <section className="mt-24 mb-24 max-w-4xl mx-auto px-4 text-sm text-muted-foreground">
          <h2 className="text-xl font-semibold mb-4 text-foreground">
            Ofertas e produtos da Shopee em um só lugar
          </h2>

          <p className="leading-relaxed">
            A Zivoo é uma vitrine digital que reúne produtos selecionados
            da Shopee, organizados por categoria e com links afiliados
            que levam direto ao produto oficial. Ideal para quem busca
            praticidade, economia e ofertas atualizadas.
          </p>
        </section>
      </div>
      

    </>
  )
}
