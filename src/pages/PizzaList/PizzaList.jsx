
import pizzas from "../../data/pizza";
import PizzaCard from "../../components/PizzaCard/PizzaCard";

function PizzaList() {
  return (
    <div className="pizza-list-page">

      <h1>Notre Menu</h1>

      <p>Découvrez nos délicieuses pizzas !</p>

      <div className="pizza-list">

        {pizzas.map((pizza) => (
          <PizzaCard
            key={pizza.id}
            pizza={pizza}
          />
        ))}

      </div>

    </div>
  );
}

export default PizzaList;
