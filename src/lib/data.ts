import { Product } from "./types";

export const products: Product[] = [
  {
    id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    slug: "plaquettes-frein-toyota-corolla",
    name: "Plaquettes de frein Toyota Corolla",
    description: "Plaquettes de frein avant de haute qualité pour Toyota Corolla. Offrent une excellente performance de freinage et une longue durée de vie.",
    price: 25000,
    category: "Freinage",
    brand: "Toyota",
    compatibility: [
      "Toyota Corolla 2014-2022",
      "Toyota Auris 2012-2018"
    ],
    images: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    stock: 45,
    specifications: {
      "Matériau": "Semi-métallique",
      "Position": "Avant",
      "Durée de vie estimée": "40,000 km",
      "Garantie": "1 an"
    },
    reference: "04465-02220",
    featured: true
  },
  {
    id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
    slug: "filtre-huile-toyota-hilux",
    name: "Filtre à huile Toyota Hilux",
    description: "Filtre à huile d'origine pour Toyota Hilux. Assure une filtration optimale et protège votre moteur contre l'usure.",
    price: 12000,
    category: "Filtration",
    brand: "Toyota",
    compatibility: [
      "Toyota Hilux 2005-2023",
      "Toyota Fortuner 2005-2023",
      "Toyota Land Cruiser Prado 2002-2023"
    ],
    images: [
      "https://images.unsplash.com/photo-1635773054018-22c8ad65b85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    stock: 120,
    specifications: {
      "Type": "Cartouche",
      "Diamètre": "68mm",
      "Hauteur": "85mm",
      "Filetage": "M20x1.5"
    },
    reference: "90915-YZZD3"
  },
  {
    id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b",
    slug: "amortisseur-mercedes-classe-c",
    name: "Amortisseur Mercedes Classe C",
    description: "Amortisseur avant gauche pour Mercedes-Benz Classe C. Performance et confort optimal garantis.",
    price: 185000,
    category: "Suspension",
    brand: "Mercedes-Benz",
    compatibility: [
      "Mercedes-Benz Classe C (W204) 2007-2014",
      "Mercedes-Benz Classe C (W205) 2014-2021"
    ],
    images: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    stock: 8,
    specifications: {
      "Position": "Avant Gauche",
      "Type": "Hydraulique",
      "Course": "150mm",
      "Garantie": "2 ans"
    },
    reference: "204-323-1200"
  },
  {
    id: "7ec2bd7f-11c0-43da-975e-2a8ad9ebae0c",
    slug: "batterie-varta-70ah",
    name: "Batterie Varta 70Ah",
    description: "Batterie haute performance 70Ah pour véhicules européens et asiatiques. Excellente capacité de démarrage.",
    price: 95000,
    category: "Électricité",
    brand: "Varta",
    compatibility: [
      "Multiples véhicules",
      "Consultez le guide de compatibilité"
    ],
    images: [
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    stock: 25,
    specifications: {
      "Capacité": "70 Ah",
      "Voltage": "12V",
      "CCA": "680A",
      "Dimensions": "278x175x190mm",
      "Polarité": "Droite+"
    },
    reference: "E23",
    featured: true
  },
  {
    id: "8ec2bd7f-11c0-43da-975e-2a8ad9ebae0d",
    slug: "courroie-distribution-renault",
    name: "Kit Courroie de Distribution Renault",
    description: "Kit complet courroie de distribution pour moteurs Renault 1.5 dCi. Inclut courroie, galets et pompe à eau.",
    price: 75000,
    category: "Distribution",
    brand: "Renault",
    compatibility: [
      "Renault Mégane 1.5 dCi 2002-2023",
      "Renault Clio 1.5 dCi 2001-2023",
      "Dacia Duster 1.5 dCi 2010-2023"
    ],
    images: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    stock: 15,
    specifications: {
      "Nombre de dents": "123",
      "Largeur": "25mm",
      "Inclus": "Courroie, Galets, Pompe à eau",
      "Intervalle de remplacement": "60,000 km ou 5 ans"
    },
    reference: "130C17529R"
  }
];

export const categories = [
  {
    id: "1ec0bd7f-11c0-43da-975e-2a8ad9ebae0a",
    name: "Freinage",
    slug: "freinage",
    description: "Systèmes et composants de freinage pour tous véhicules",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: "2ec0bd7f-11c0-43da-975e-2a8ad9ebae0b",
    name: "Filtration",
    slug: "filtration",
    description: "Filtres à huile, air et carburant",
    image: "https://images.unsplash.com/photo-1635773054018-22c8ad65b85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: "3ec0bd7f-11c0-43da-975e-2a8ad9ebae0c",
    name: "Suspension",
    slug: "suspension",
    description: "Amortisseurs, ressorts et composants de suspension",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: "4ec0bd7f-11c0-43da-975e-2a8ad9ebae0d",
    name: "Électricité",
    slug: "electricite",
    description: "Batteries, alternateurs et composants électriques",
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: "5ec0bd7f-11c0-43da-975e-2a8ad9ebae0e",
    name: "Distribution",
    slug: "distribution",
    description: "Courroies, chaînes et kits de distribution",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  }
];

export const brands = [
  {
    id: "1dc0bd7f-11c0-43da-975e-2a8ad9ebae0a",
    name: "Toyota",
    slug: "toyota",
    logo: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    description: "Pièces d'origine Toyota pour véhicules japonais"
  },
  {
    id: "2dc0bd7f-11c0-43da-975e-2a8ad9ebae0b",
    name: "Mercedes-Benz",
    slug: "mercedes-benz",
    logo: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    description: "Pièces premium pour véhicules Mercedes-Benz"
  },
  {
    id: "3dc0bd7f-11c0-43da-975e-2a8ad9ebae0c",
    name: "Renault",
    slug: "renault",
    logo: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    description: "Pièces d'origine pour véhicules Renault"
  },
  {
    id: "4dc0bd7f-11c0-43da-975e-2a8ad9ebae0d",
    name: "Varta",
    slug: "varta",
    logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    description: "Batteries et composants électriques de haute qualité"
  }
];
