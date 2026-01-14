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
    name: "Jogo de Lençol Cama Casal Queen King Solteiro Berço 400 Fios Micropercal Com Fronha em Ponto Palito",
    price: 37.90,
    originalPrice: 57.9,
    image: "/LençolCamaCasalQueen.jpeg",
    category: "casa",
    affiliateLink: "https://s.shopee.com.br/3VdzU9v7o0",
    badge: "Mais Vendido",
  },
  {
    id: "2",
    name: "Kit Shampoo + Condicionador 1L | Hidratação Profunda e Brilho | Uso Diário Profissional",
    price: 29.9,
    originalPrice: 49.9,
    image: "/shampookamell.jpeg",
    category: "beleza",
    affiliateLink: "https://s.shopee.com.br/1qVlVx27zY",
    badge: "Oferta",
  },
  {
    id: "3",
    name: "Escova Onda Finalizadora Beauty Flash Definição de Cachos e Finalização para Cabelo Cacheado Crespo",
    price: 13.97,
    originalPrice: 29.9,
    image: "/escovafinalizadorabeauty.jpeg",
    category: "beleza",
    affiliateLink: "https://s.shopee.com.br/7pmyfkCxa8",
  },
  {
    id: "4",
    name: "Shorts compressão 2 em 1 feminino para academia caminhadas e corrida",
    price: 38.9,
    originalPrice: 49.9,
    image: "/shortscompressao2em1.jpeg",
    category: "esportes",
    affiliateLink: "https://s.shopee.com.br/4VWWi12Q8o",
    badge: "Novo",
  },
  {
    id: "5",
    name: "Xícara de café kit com 12 peças de Cerâmica em porcelana",
    price: 68.0,
    originalPrice: 89.9,
    image: "/conjuntoxicarasprocelana.jpeg",
    category: "casa",
    affiliateLink: "https://s.shopee.com.br/2VlSKa42n7",
  },
  
]
