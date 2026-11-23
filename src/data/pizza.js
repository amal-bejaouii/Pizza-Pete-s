
const pizzas = [
  {
    id: 1,
    name: "Margherita",
    price: 12,
    description: "Une pizza italienne classique et savoureuse.",
    image: "🍕",
    ingredients: [
      "Sauce tomate",
      "Mozzarella",
      "Basilic",
      "Huile d'olive"
    ],
    characteristics: {
      size: "Moyenne",
      category: "Végétarienne",
      preparationTime: "15 minutes",
      spicy: "Non"
    }
  },

  {
    id: 2,
    name: "Reine",
    price: 16,
    description: "Une délicieuse pizza garnie de jambon et champignons.",
    image: "🍕",
    ingredients: [
      "Sauce tomate",
      "Mozzarella",
      "Jambon",
      "Champignons"
    ],
    characteristics: {
      size: "Grande",
      category: "Classique",
      preparationTime: "20 minutes",
      spicy: "Non"
    }
  },

  {
    id: 3,
    name: "4 Fromages",
    price: 18,
    description: "Une pizza généreuse avec quatre fromages.",
    image: "🧀",
    ingredients: [
      "Mozzarella",
      "Gorgonzola",
      "Parmesan",
      "Chèvre"
    ],
    characteristics: {
      size: "Grande",
      category: "Végétarienne",
      preparationTime: "20 minutes",
      spicy: "Non"
    }
  },

  {
    id: 4,
    name: "Pepperoni",
    price: 19,
    description: "Une pizza savoureuse avec du pepperoni.",
    image: "🍕",
    ingredients: [
      "Sauce tomate",
      "Mozzarella",
      "Pepperoni",
      "Origan"
    ],
    characteristics: {
      size: "Grande",
      category: "Viande",
      preparationTime: "20 minutes",
      spicy: "Oui"
    }
  }
];

export default pizzas;
