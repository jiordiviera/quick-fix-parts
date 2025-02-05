import Link from "next/link"

export default function ConfirmationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold mb-4">Merci pour votre commande !</h1>
      <p className="mb-8">Votre commande a été passée avec succès. Vous recevrez bientôt un email de confirmation.</p>
      <Link href="/" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
        Retour à l&apos;accueil
      </Link>
    </div>
  )
}

