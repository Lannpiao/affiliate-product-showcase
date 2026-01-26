"use client"

import { useEffect, useRef, useState } from "react"
import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/product-grid"
import { CategoryCard } from "@/components/category-card"
import { ProductSkeleton } from "@/components/ui/product-skeleton"
import { categories } from "@/data/categories"
import { getProducts } from "@/lib/get-products"

const PRODUCTS_PER_PAGE = 8

/**
 * Normaliza textos para a busca:
 * - lowercase
 * - remove acentos
 * - converte plural simples → singular
 */
function normalizeText(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .map((word) => {
      if (word.endsWith("es")) return word.slice(0, -2)
      if (word.endsWith("s")) return word.slice(0, -1)
      return word
    })
    .join(" ")
    .trim()
}

export default function HomePage() {
  /* 🔥 PRODUTOS VINDOS DO SUPABASE */
  const [products, setProducts] = useState<any[]>([])

  /* Texto digitado na busca */
  const [search, setSearch] = useState("")

  /* Scroll infinito */
  const [visibleCount, setVisibleCount] =
    useState(PRODUCTS_PER_PAGE)

  const [isLoading, setIsLoading] = useState(false)
  const loaderRef = useRef<HTMLDivElement | null>(null)

  /* 🔗 Busca os produtos do Supabase ao carregar a página */
  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts()
      setProducts(data)
    }

    loadProducts()
  }, [])

  /* Texto da busca normalizado */
  const normalizedSearch =
    search.length < 2 ? "" : normalizeText(search)

  /**
   * Produtos filtrados pela busca
   */
  const filteredProducts = products.filter((product) => {
    if (!normalizedSearch) return true

    const name = normalizeText(product.name)
    const category = normalizeText(product.category)

    const searchWords = normalizedSearch.split(" ")

    return searchWords.every(
      (word) =>
        name.includes(word) || category.includes(word)
    )
  })

  /**
   * Destaques (somem quando há busca)
   */
  const featuredProducts = filteredProducts
    .filter((p) => p.badge)
    .slice(0, 5)

  /**
   * Scroll infinito
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !isLoading &&
          visibleCount < filteredProducts.length
        ) {
          setIsLoading(true)

          setTimeout(() => {
            setVisibleCount((prev) =>
              Math.min(
                prev + PRODUCTS_PER_PAGE,
                filteredProducts.length
              )
            )
            setIsLoading(false)
          }, 600)
        }
      },
      { threshold: 0.8 }
    )

    if (loaderRef.current) observer.observe(loaderRef.current)
    return () => observer.disconnect()
  }, [isLoading, visibleCount, filteredProducts.length])

  const visibleProducts = filteredProducts.slice(
    0,
    visibleCount
  )

  return (
    <>
      <link rel="canonical" href="https://SEUSITE.com/pagina-principal" />

      <Hero />

      {/* 🔍 Campo de busca */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8 mt-8">
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setVisibleCount(PRODUCTS_PER_PAGE)
          }}
          className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* 📂 Categorias só sem busca */}
        {search.trim() === "" && (
          <section className="py-12">
            <h2 className="text-2xl font-bold mb-8">
              Categorias
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                />
              ))}
            </div>
          </section>
        )}

        {/* ⭐ Destaques só sem busca */}
        {search.trim() === "" &&
          featuredProducts.length > 0 && (
            <ProductGrid
              products={featuredProducts}
              title="Destaques"
            />
          )}

        {/* 🛒 Produtos */}
        <ProductGrid
          products={visibleProducts}
          title={
            search.trim()
              ? `Resultados para "${search}"`
              : "Todos os Produtos"
          }
        />

        {/* ⏳ Skeleton */}
        {isLoading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {Array.from({
              length: PRODUCTS_PER_PAGE,
            }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        )}

        {/* ❌ Nenhum resultado */}
        {!isLoading &&
          visibleProducts.length === 0 &&
          search && (
            <p className="text-center text-muted-foreground mt-12">
              Nenhum produto encontrado para "{search}"
            </p>
          )}

        {/* ♾️ Scroll trigger */}
        {visibleCount < filteredProducts.length && (
          <div ref={loaderRef} className="h-10" />
        )}
      </div>
    </>
  )
}
