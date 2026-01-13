export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  affiliateLink: string
  badge?: string
}

export interface Category {
  id: string
  name: string
  slug: string
  icon: string
}

export const categories: Category[] = [
  { id: "1", name: "Eletrônicos", slug: "eletronicos", icon: "📱" },
  { id: "2", name: "Moda", slug: "moda", icon: "👗" },
  { id: "3", name: "Casa", slug: "casa", icon: "🏠" },
  { id: "4", name: "Beleza", slug: "beleza", icon: "💄" },
  { id: "5", name: "Esportes", slug: "esportes", icon: "⚽" },
  { id: "6", name: "Brinquedos", slug: "brinquedos", icon: "🧸" },
]

export const products: Product[] = [
  {
    id: "1",
    name: "Fone de Ouvido Bluetooth TWS",
    price: 49.9,
    originalPrice: 89.9,
    image: "/wireless-earbuds-bluetooth-white.jpg",
    category: "eletronicos",
    affiliateLink: "https://shope.ee/example1",
    badge: "Mais Vendido",
  },
  {
    id: "2",
    name: "Smartwatch Fitness com Monitor Cardíaco",
    price: 129.9,
    originalPrice: 199.9,
    image: "/smartwatch-fitness-black-modern.jpg",
    category: "eletronicos",
    affiliateLink: "https://shope.ee/example2",
    badge: "Oferta",
  },
  {
    id: "3",
    name: "Camiseta Básica Algodão Premium",
    price: 39.9,
    originalPrice: 59.9,
    image: "/basic-cotton-tshirt-white-folded.jpg",
    category: "moda",
    affiliateLink: "https://shope.ee/example3",
  },
  {
    id: "4",
    name: "Tênis Esportivo Running",
    price: 159.9,
    originalPrice: 249.9,
    image: "/running-shoes-black-modern.jpg",
    category: "esportes",
    affiliateLink: "https://shope.ee/example4",
    badge: "Novo",
  },
  {
    id: "5",
    name: "Kit Skincare Facial Completo",
    price: 79.9,
    originalPrice: 129.9,
    image: "/skincare-products-set-minimalist.jpg",
    category: "beleza",
    affiliateLink: "https://shope.ee/example5",
  },
  {
    id: "6",
    name: "Luminária LED de Mesa Moderna",
    price: 69.9,
    originalPrice: 99.9,
    image: "/modern-led-desk-lamp-white.jpg",
    category: "casa",
    affiliateLink: "https://shope.ee/example6",
  },
  {
    id: "7",
    name: "Boneco de Pelúcia Urso Grande",
    price: 59.9,
    originalPrice: 89.9,
    image: "/teddy-bear-plush-toy-brown-cute.jpg",
    category: "brinquedos",
    affiliateLink: "https://shope.ee/example7",
  },
  {
    id: "8",
    name: "Carregador Portátil 20000mAh",
    price: 89.9,
    originalPrice: 149.9,
    image: "/power-bank-portable-charger-black.jpg",
    category: "eletronicos",
    affiliateLink: "https://shope.ee/example8",
    badge: "Top 10",
  },
  {
    id: "9",
    name: "Vestido Midi Elegante",
    price: 89.9,
    originalPrice: 139.9,
    image: "/elegant-midi-dress-feminine.jpg",
    category: "moda",
    affiliateLink: "https://shope.ee/example9",
  },
  {
    id: "10",
    name: "Organizador de Gavetas 6 peças",
    price: 34.9,
    originalPrice: 54.9,
    image: "/drawer-organizer-set-white-minimalist.jpg",
    category: "casa",
    affiliateLink: "https://shope.ee/example10",
  },
  {
    id: "11",
    name: "Halteres Kit 10kg",
    price: 119.9,
    originalPrice: 179.9,
    image: "/dumbbell-set-weights-fitness.jpg",
    category: "esportes",
    affiliateLink: "https://shope.ee/example11",
  },
  {
    id: "12",
    name: "Paleta de Sombras 18 Cores",
    price: 49.9,
    originalPrice: 79.9,
    image: "/eyeshadow-palette-makeup-colors.jpg",
    category: "beleza",
    affiliateLink: "https://shope.ee/example12",
  },
]
