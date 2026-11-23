
import { useParams, Link } from "react-router-dom";
import pizzas from "../../data/pizza";
import "./PizzaDetails.css";

function PizzaDetails() {

  const { id } = useParams();

  const pizza = pizzas.find(
    (item) => item.id === Number(id)
  );

  if (!pizza) {
    return (
      <div className="not-found">
        <h2>Pizza introuvable</h2>
        <Link to="/pizzas">
          Retour au menu
        </Link>
      </div>
    );
  }

  return (
    <div className="pizza-details">

      <Link to="/pizzas" className="back-link">
        ← Retour au menu
      </Link>

      <div className="details-container">

        <div className="details-image">
          {pizza.image}
        </div>

        <div className="details-content">

          <h1>{pizza.name}</h1>

          <p className="description">
            {pizza.description}
          </p>

          <h2 className="price">
            {pizza.price} TND
          </h2>

          <section className="ingredients-section">

            <h3>Ingrédients</h3>

            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient}
                </li>
              ))}
            </ul>

          </section>

          <section className="characteristics-section">

            <h3>Caractéristiques</h3>

            <ul>
              <li>
                Taille : {pizza.characteristics.size}
              </li>

              <li>
                Catégorie : {pizza.characteristics.category}
              </li>

              <li>
                Temps de préparation :
                {" "}{pizza.characteristics.preparationTime}
              </li>

              <li>
                Épicée : {pizza.characteristics.spicy}
              </li>
            </ul>

          </section>

        </div>

      </div>

    </div>
  );
}

export default PizzaDetails;
