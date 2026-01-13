import Link from "next/link"
import { ShoppingBag } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Zivoo</span>
            </div>
            <p className="text-sm text-card/70">Sua vitrine online de produtos selecionados com as melhores ofertas.</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm text-card/70">
              <li>
                <Link href="/" className="hover:text-card transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/categorias" className="hover:text-card transition-colors">
                  Categorias
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-card transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-card transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2 text-sm text-card/70">
              <li>
                <Link href="/categorias?cat=eletronicos" className="hover:text-card transition-colors">
                  Eletrônicos
                </Link>
              </li>
              <li>
                <Link href="/categorias?cat=moda" className="hover:text-card transition-colors">
                  Moda
                </Link>
              </li>
              <li>
                <Link href="/categorias?cat=casa" className="hover:text-card transition-colors">
                  Casa
                </Link>
              </li>
              <li>
                <Link href="/categorias?cat=beleza" className="hover:text-card transition-colors">
                  Beleza
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Informações</h3>
            <ul className="space-y-2 text-sm text-card/70">
              <li>Este site contém links de afiliados</li>
              <li>Preços sujeitos a alteração</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-card/20 pt-8 text-center text-sm text-card/60">
          <p>© {new Date().getFullYear()} Zivoo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
