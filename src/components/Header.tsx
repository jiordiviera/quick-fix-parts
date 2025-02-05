'use client'

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart"
import { Badge } from "@/components/ui/badge"

export default function Header() {
  const { items } = useCart()
  return (
    <header className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="font-bold text-2xl font-heading">
            AutoParts Cameroun
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/products" className="hover:text-gray-200">
                  Produits
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/cart" className="flex items-center hover:text-gray-200">
                  <div className="relative">
                    <ShoppingCart className="w-5 h-5 mr-1" />
                    {items.length > 0 && (
                      <Badge variant="destructive" className="absolute -top-2 -right-2 px-2 py-1 text-xs">
                        {items.length}
                      </Badge>
                    )}
                  </div>
                  Panier
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

