"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function AdminPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const ADMIN_EMAILS = ["helenilson21345@gmail.com"]

  // 🔐 Verifica autenticação
  useEffect(() => {
    async function checkAuth() {
        const {
        data: { session },
        } = await supabase.auth.getSession()

        if (!session) {
        router.push("/admin/login")
        return
        }

        const email = session.user.email

        if (!email || !ADMIN_EMAILS.includes(email)) {
        router.push("/")
        return
        }

        setLoading(false)
    }

    checkAuth()
    }, [router])


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Verificando acesso...
      </div>
    )
  }

  // 📝 Envio do formulário
  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const product = {
      name: formData.get("name") as string,
      price: Number(formData.get("price")),
      original_price: formData.get("original_price")
        ? Number(formData.get("original_price"))
        : null,
      category: formData.get("category") as string,
      sold: Number(formData.get("sold")) || 0,
      badge: (formData.get("badge") as string) || null,
      image: formData.get("image") as string,
      link: formData.get("link") as string,
    }

    const { error } = await supabase
      .from("products")
      .insert([product])

    if (error) {
      console.error(error)
      alert(error.message)
      return
    }

    alert("Produto cadastrado com sucesso!")
    e.currentTarget.reset()
  }

  return (
    <div className="p-8 max-w-xl">
      <h1 className="text-2xl font-bold mb-6">
        Cadastrar produto
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nome */}
        <input
          name="name"
          placeholder="Nome do produto"
          required
          className="w-full border p-2 rounded"
        />

        {/* Preço */}
        <input
          name="price"
          type="number"
          step="0.01"
          placeholder="Preço atual"
          required
          className="w-full border p-2 rounded"
        />

        {/* Preço original */}
        <input
          name="original_price"
          type="number"
          step="0.01"
          placeholder="Preço original (opcional)"
          className="w-full border p-2 rounded"
        />

        {/* Categoria */}
        <input
          name="category"
          placeholder="Categoria (ex: tv, fone, gamer)"
          required
          className="w-full border p-2 rounded"
        />

        {/* Vendidos */}
        <input
          name="sold"
          type="number"
          placeholder="Quantidade vendida"
          className="w-full border p-2 rounded"
        />

        {/* Badge */}
        <input
          name="badge"
          placeholder='Badge (ex: OFERTA, MAIS VENDIDO)'
          className="w-full border p-2 rounded"
        />

        {/* Imagem */}
        <input
          name="image"
          placeholder="URL da imagem"
          required
          className="w-full border p-2 rounded"
        />

        {/* Link Shopee */}
        <input
          name="link"
          placeholder="Link da Shopee"
          required
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}
