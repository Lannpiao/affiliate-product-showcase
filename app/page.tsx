import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/product-grid"
import { CategoryCard } from "@/components/category-card"
import { products, categories } from "@/data/products"

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.badge).slice(0, 5)
  const latestProducts = products

  return (
    <>
      <Hero />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <section className="py-12">
          <h2 className="text-2xl font-bold text-foreground mb-8">Categorias</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        <ProductGrid products={featuredProducts} title="Destaques" />

        <ProductGrid products={latestProducts} title="Todos os Produtos" />
      </div>
    </>
  )
}
