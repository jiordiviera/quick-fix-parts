"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold mb-4">Contactez-nous</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Notre équipe est là pour vous aider. N&apos;hésitez pas à nous contacter pour
          toute question concernant nos produits ou services.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-4 rounded-lg text-primary">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Téléphone</h3>
              <p className="text-gray-600">+237 6XX XXX XXX</p>
              <p className="text-gray-600">+237 6XX XXX XXX</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-4 rounded-lg text-primary">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-600">contact@autoparts-cameroun.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-4 rounded-lg text-primary">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Adresse</h3>
              <p className="text-gray-600">
                123 Rue du Commerce
                <br />
                Douala, Cameroun
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-4 rounded-lg text-primary">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Heures d&apos;ouverture</h3>
              <p className="text-gray-600">
                Lundi - Vendredi: 8h00 - 18h00
                <br />
                Samedi: 9h00 - 15h00
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <form className="bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <Input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <Input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet
                </label>
                <Input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                ></Textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Envoyer le message
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
