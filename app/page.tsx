"use client"

import { useEffect, useRef, useState } from "react"
import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/product-grid"
import { CategoryCard } from "@/components/category-card"
import { ProductSkeleton } from "@/components/ui/product-skeleton"
import { products, categories } from "@/data/products"

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
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
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
  /* Texto digitado na busca */
  const [search, setSearch] = useState("")

  /* Quantidade de produtos visíveis (scroll infinito) */
  const [visibleCount, setVisibleCount] =
    useState(PRODUCTS_PER_PAGE)

  /* Estado de loading do scroll infinito */
  const [isLoading, setIsLoading] = useState(false)

  /* Referência do gatilho do IntersectionObserver */
  const loaderRef = useRef<HTMLDivElement | null>(null)

  /* Texto da busca normalizado */
  const normalizedSearch =
    search.length < 2 ? "" : normalizeText(search)

  /**
   * Lista de produtos filtrados pela busca
   * Busca por nome e categoria
   * Aceita palavras fora de ordem
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
   * Produtos em destaque
   * Só usados quando NÃO há busca ativa
   */
  const featuredProducts = filteredProducts
    .filter((p) => p.badge)
    .slice(0, 5)

  /**
   * Scroll infinito
   * Carrega mais produtos quando o usuário
   * chega próximo ao final da lista
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

          // Simula tempo de carregamento (UX)
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

  /* Produtos realmente exibidos na tela */
  const visibleProducts = filteredProducts.slice(
    0,
    visibleCount
  )

  return (
    <>
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
        {/* 📂 Categorias só aparecem sem busca */}
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

        {/* ⭐ Destaques só aparecem sem busca */}
        {search.trim() === "" &&
          featuredProducts.length > 0 && (
            <ProductGrid
              products={featuredProducts}
              title="Destaques"
            />
          )}

        {/* 🛒 Lista principal de produtos */}
        <ProductGrid
          products={visibleProducts}
          title={
            search.trim()
              ? `Resultados para "${search}"`
              : "Todos os Produtos"
          }
        />

        {/* ⏳ Skeleton durante carregamento */}
        {isLoading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {Array.from({
              length: PRODUCTS_PER_PAGE,
            }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        )}

        {/* ❌ Nenhum resultado encontrado */}
        {!isLoading &&
          visibleProducts.length === 0 &&
          search && (
            <p className="text-center text-muted-foreground mt-12">
              Nenhum produto encontrado para "{search}"
            </p>
          )}

        {/* ♾️ Gatilho do scroll infinito */}
        {visibleCount < filteredProducts.length && (
          <div ref={loaderRef} className="h-10" />
        )}

        {/* 📄 Texto institucional */}
        <section className="mt-24 mb-24 max-w-4xl mx-auto px-4 text-sm text-muted-foreground">
          <h2 className="text-xl font-semibold mb-4 text-foreground">
            Ofertas e produtos da Shopee em um só lugar
          </h2>

          <p className="leading-relaxed">
            A Zivoo é uma vitrine digital que reúne produtos
            selecionados da Shopee, organizados por categoria
            e com links afiliados que levam direto ao produto
            oficial.
          </p>
        </section>
      </div>
    </>
  )
}
