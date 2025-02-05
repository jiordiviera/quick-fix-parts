"use client"

import Link from "next/link"
import { ShoppingCart, Menu } from "lucide-react"
import { useCart } from "@/lib/cart"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "./ui/button"

export default function Header() {
    const { items } = useCart()
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    const NavItems = () => (
        <>
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
        </>
    )

    return (
        <header className="bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link href="/" className="font-bold text-2xl font-heading">
                        AutoParts Cameroun
                    </Link>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6">
                            <NavItems />
                        </ul>
                    </nav>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button className="p-2">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-primary text-white">
                            <nav className="mt-6">
                                <ul className="flex flex-col space-y-4">
                                    <NavItems />
                                </ul>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

