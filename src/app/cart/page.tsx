"use client"

import { useCart } from "@/lib/cart"
import Image from "next/image"
import Link from "next/link"
import { Trash2 } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart()

  const handleRemoveItem = (productId: string) => {
    removeItem(productId)
    toast.success("Article retiré du panier")
  }

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Votre Panier</h1>

      {items.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xl mb-4">Votre panier est vide</p>
          <Link href="/products" className="text-primary hover:underline">
            Continuer vos achats
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex items-center border-b pb-4">
                <Image
                  src={item.product.images[0] || "/placeholder.svg"}
                  width={100}
                  height={100}
                  alt={item.product.name}
                  className="rounded-lg mr-4"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.product.name}</h3>
                  <p className="text-gray-600">{item.product.price.toLocaleString()} FCFA</p>
                </div>
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 border rounded-l"
                    onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
                  <button
                    className="px-2 py-1 border rounded-r"
                    onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <Button
                  className="ml-4 text-red-500 hover:text-red-700"
                  onClick={() => handleRemoveItem(item.product.id)}
                >
                  <Trash2 />
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div>
              <p className="text-xl font-semibold">Total: {total().toLocaleString()} FCFA</p>
            </div>
            <Link
              href="/checkout"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Procéder au paiement
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

