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
  {
    id: "6",
    name: "Kit 4 Organizador de Geladeira 1,9 Litros Cesto Com Tampa Multiuso Alimento Verdura e Vegetal",
    price: 99.9,
    originalPrice: 109.9,
    image: "/organizadordegeladeira.jpeg",
    category: "casa",
    affiliateLink: "https://s.shopee.com.br/AUnkOWlna6",
    badge: "Novo",
  },
  {
    id: "7",
    name: "Shorts Esportivo Masculino Para Academia Corrida Treino",
    price: 23.97,
    originalPrice: 59.9,
    image: "/shortsesportivomasc.jpeg",
    category: "esportes",
    affiliateLink: "https://s.shopee.com.br/6puS1wMaZc",
    badge: "Novo",
  },
  {
    id: "8",
    name: "Aderência de mão Hand grip 5-60KG Exercite a força do antebraço e dos dedos",
    price: 16.99,
    originalPrice: 29.9,
    image: "/handgrip.jpeg",
    category: "esportes",
    affiliateLink: "https://s.shopee.com.br/9Kbn0pNKZ3",
    badge: "Novo",
  },
  {
    id: "9",
    name: "Conjunto Academia Feminino Top + Legging Zero Transparência Fitness",
    price: 59.9,
    originalPrice: 89.9,
    image: "/kit3conjuntoacademiafeminino.png",
    category: "esportes",
    affiliateLink: "https://s.shopee.com.br/9fEdZM6oqM",
    badge: "Novo",
  },
  {
    id: "10",
    name: "Kit 3 Unidades Sabonete Líquido Chá Branco 500 ml",
    price: 39.9,
    originalPrice: 42.9,
    image: "/saboneteliquido.jpeg",
    category: "beleza",
    affiliateLink: "https://s.shopee.com.br/2VlT2qQPNr",
    badge: "Novo",
  },
  {
    id: "11",
    name: "Fatiador Profissional Multifuncional De Aço Inoxidável 16 Em 1 Para Vegetais/Frutas/Legumes",
    price: 35.9,
    originalPrice: 79.0,
    image: "/fatiadorprofissional.jpeg",
    category: "casa",
    affiliateLink: "https://s.shopee.com.br/5AmEDyarW4",
    badge: "Novo",
  },
  {
    id: "12",
    name: "Kit Treino Funcional 10/15/20kg Halteres Barra Supino Kettlebell Preto",
    price: 192.95,
    originalPrice: 227.0,
    image: "/alterespesos.png",
    category: "esportes",
    affiliateLink: "https://s.shopee.com.br/2qOJS0FbB9",
    badge: "Novo",
  },
  {
    id: "13",
    name: "Kit Treino Funcional 10/15/20kg Halteres Barra Supino Kettlebell Preto",
    price: 59.9,
    originalPrice: 99.9,
    image: "/tenisesportivomasculinoorg.jpeg",
    category: "esportes",
    affiliateLink: "https://s.shopee.com.br/4VWXRGzk10",
    badge: "Novo",
  },
  {
    id: "14",
    name: "Headset Fone Gamer Led RGB com microfone USB e P2 Para PC Computador Headphone Videogame",
    price: 49.98,
    originalPrice: 59.9,
    image: "/headsetgamerpretocomled.jpeg",
    category: "eletronicos",
    affiliateLink: "https://s.shopee.com.br/5q1v1zsGXy",
    badge: "Novo",
  },
  
]
