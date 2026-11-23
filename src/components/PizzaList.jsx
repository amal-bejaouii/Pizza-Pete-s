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

function PizzaList() {
  const [recherche, setRecherche] = useState("");

  const filtrees = pizzas.filter((p) =>
    p.nom.toLowerCase().includes(recherche.toLowerCase())
  );

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
        {filtrees.map((p) => (
          <div className="pizza-list-card" key={p.id}>
            <img src={p.image} alt={p.nom} />
            <h3>{p.nom}</h3>
            <p>{p.description}</p>
            <span className="pizza-list-price">{p.prix.toFixed(3)} DT</span>
            <button>Commander</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PizzaList;
