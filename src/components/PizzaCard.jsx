// T08 : afficher le prix de chaque pizza
function PizzaCard({ pizza }) {
  return (
    <article className="pizza-card">
      <h3>{pizza.nom}</h3>
      <p className="pizza-ingredients">{pizza.ingredients}</p>
      <p className="pizza-prix">{pizza.prix.toFixed(2)} DT</p>
    </article>
  );
}

export default PizzaCard;
