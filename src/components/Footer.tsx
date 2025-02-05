import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">AutoParts Cameroun</h3>
            <p className="text-sm">Votre source fiable pour des pièces détachées automobiles de qualité au Cameroun.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-gray-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm hover:text-gray-300">
                  Produits
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">Douala, Cameroun</p>
            <p className="text-sm">Téléphone: +237 6XX XXX XXX</p>
            <p className="text-sm">Email: contact@autoparts-cameroun.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AutoParts Cameroun. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

