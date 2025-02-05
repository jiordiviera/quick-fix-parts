"use client";

import { motion } from "framer-motion";
import { ChevronRight, Car,  Shield, Phone, MapPin, Clock, PenTool } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/50">
          <Image
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Auto parts"
            className="w-full h-full object-cover mix-blend-overlay"
            width={200}
            height={200}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">
              Pièces Détachées de Qualité au Cameroun
            </h1>
            <p className="text-xl mb-8">
              Trouvez toutes les pièces dont vous avez besoin pour votre véhicule.
              Qualité garantie et livraison rapide partout au Cameroun.
            </p>
            <div className="flex gap-4">
              <Link
                href="/catalogue"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all"
              >
                Voir le catalogue <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg flex items-center gap-2 transition-all"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Pourquoi nous choisir ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous nous engageons à fournir les meilleures pièces détachées avec un service client exceptionnel.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Car className="w-8 h-8" />,
                title: "Large Gamme",
                description: "Plus de 10,000 pièces disponibles pour toutes les marques"
              },
              {
                icon: <PenTool className="w-8 h-8" />,
                title: "Qualité Garantie",
                description: "Toutes nos pièces sont authentiques et garanties"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Service Expert",
                description: "Une équipe d'experts pour vous conseiller"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Téléphone</h3>
                    <p className="text-gray-600">+237 6XX XXX XXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Adresse</h3>
                    <p className="text-gray-600">Douala, Cameroun</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Heures d&apos;ouverture</h3>
                    <p className="text-gray-600">Lun - Sam: 8h00 - 18h00</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Votre message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Envoyer le message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
