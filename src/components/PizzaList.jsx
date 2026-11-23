import pizzas from "../data/pizzas";
import PizzaCard from "./PizzaCard";
import "./PizzaList.css";

// T07 : affichage de la liste des pizzas
function PizzaList() {
  return (
    <section className="pizza-list">
      <h2>Nos pizzas</h2>
      <div className="pizza-grid">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </section>
  );
}

export default PizzaList;
