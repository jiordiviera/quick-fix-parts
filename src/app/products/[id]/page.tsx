"use client";

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/lib/cart';
import { products } from '@/lib/data';
import { toast } from 'sonner';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addItem } = useCart();

  if (!product) {
    return <div className="text-center py-12">Produit non trouvé</div>;
  }

  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.name} ajouté au panier`);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link href="/products" className="text-primary hover:underline mb-6 inline-block">
        &larr; Retour aux produits
      </Link>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="relative">
          <Image
            src={product.images[currentImageIndex] || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={600}
            className="rounded-lg object-cover w-full h-[400px]"
          />
          {product.images.length > 1 && (
            <>
              <Button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </>
          )}
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-4">{product.price.toLocaleString()} FCFA</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Spécifications :</h2>
            <ul className="list-disc list-inside">
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key}>
                  <span className="font-medium">{key}:</span> {value}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Compatibilité :</h2>
            <ul className="list-disc list-inside">
              {product.compatibility.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}
