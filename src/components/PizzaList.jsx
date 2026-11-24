
import { useState } from "react";
import "./PizzaList.css";

const pizzas = [
  {
    id: 1,
    nom: "Pizza Neptune",
    description: "Thon, olives, mozzarella, sauce tomate",
    prix: 18.900,
    image: "/image/thon.png"
  },
  {
    id: 2,
    nom: "Pizza Margarita",
    description: "Sauce tomate, mozzarella, basilic",
    prix: 12.500,
    image: "/image/margherita.png"
  },
  {
    id: 3,
    nom: "Pizza Pepperoni",
    description: "Sauce tomate, mozzarella, pepperoni",
    prix: 16.500,
    image: "/image/pepperoni.png"
  },
  {
    id: 4,
    nom: "Pizza 4 Fromages",
    description: "Mozzarella, cheddar, parmesan, fromage bleu",
    prix: 17.500,
    image: "/image/fromage.png"
  }
];

function PizzaList({ onAjouter }) {
  const [recherche, setRecherche] = useState("");

  const filtrees = pizzas.filter((pizza) =>
    pizza.nom.toLowerCase().includes(recherche.toLowerCase())
  );

  function ajouterPizza(pizza) {
    if (typeof onAjouter === "function") {
      onAjouter(pizza);
    } else {
      console.error("La fonction onAjouter est manquante dans App.jsx");
    }
  }

  return (
    <section className="pizza-list-section">
      <h2>Nos Pizzas</h2>
      <p>Choisissez votre pizza préférée</p>

      <input
        className="pizza-search"
        type="text"
        placeholder="Rechercher une pizza..."
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
      />

      <div className="pizza-list-grid">
        {filtrees.map((pizza) => (
          <div className="pizza-list-card" key={pizza.id}>
            <img src={pizza.image} alt={pizza.nom} />

            <h3>{pizza.nom}</h3>

            <p>{pizza.description}</p>

            <span className="pizza-list-price">
              {pizza.prix.toFixed(3)} DT
            </span>

            <button
              type="button"
              onClick={() => ajouterPizza(pizza)}
            >
              + Add 🛒
            </button>
          </div>
        ))}
      </div>

      {filtrees.length === 0 && (
        <p>Aucune pizza trouvée.</p>
      )}
    </section>
  );
}

export default PizzaList;
