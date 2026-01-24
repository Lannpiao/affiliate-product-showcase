export interface Product {
  id: number
  name: string
  price: number
  original_price?: number | null
  category: string
  sold: number
  badge?: string | null
  image: string
  link: string
  created_at: string
}
