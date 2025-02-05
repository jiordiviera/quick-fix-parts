"use client";

import { motion } from "framer-motion";
import { Search, Filter, ShoppingCart } from 'lucide-react';
import { useState } from "react";
import { products } from "@/lib/data";
import Image from "next/image";
import { useCart } from "@/lib/cart";
import Link from "next/link";
import { toast } from "sonner";
import { Product } from "@/lib/types";

export default function ProductsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const { addItem, items } = useCart();

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesCategory =
            selectedCategory === "all" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleAddToCart = (product:Product) => {
        addItem(product);
        toast.success(`${product.name} ajouté au panier`);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Catalogue de Pièces Détachées</h1>
                <Link href="/cart" className="flex items-center text-primary hover:text-primary-dark">
                    <ShoppingCart className="w-6 h-6 mr-2" />
                    <span className="font-semibold">{items.length} article(s)</span>
                </Link>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Rechercher une pièce..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <Filter className="text-gray-400" />
                    <select
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="all">Toutes les catégories</option>
                        <option value="Filtres">Filtres</option>
                        <option value="Freinage">Freinage</option>
                        <option value="Suspension">Suspension</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <Image
                            src={product.images[0] || "/placeholder.svg"}
                            width={400}
                            height={400}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-lg">
                                    {product.price.toLocaleString()} FCFA
                                </span>
                                <button
                                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    Ajouter au panier
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
