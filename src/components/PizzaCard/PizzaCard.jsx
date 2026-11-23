
import { Link } from "react-router-dom";
import "./PizzaCard.css";

function PizzaCard({ pizza }) {
  return (
    <div className="pizza-card">

      <div className="pizza-card-image">
        {pizza.image}
      </div>

      <div className="pizza-card-content">

        <h3>{pizza.name}</h3>

        <p>{pizza.description}</p>

        <h4>{pizza.price} TND</h4>

        <Link
          to={`/pizzas/${pizza.id}`}
          className="details-button"
        >
          Voir les détails
        </Link>

      </div>

    </div>
  );
}

export default PizzaCard;
