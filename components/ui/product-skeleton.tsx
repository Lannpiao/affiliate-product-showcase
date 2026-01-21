export function ProductSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border p-4 space-y-4">
      {/* imagem */}
      <div className="h-40 bg-muted rounded-lg" />

      {/* título */}
      <div className="h-4 bg-muted rounded w-3/4" />

      {/* preço */}
      <div className="h-4 bg-muted rounded w-1/2" />
    </div>
  )
}
