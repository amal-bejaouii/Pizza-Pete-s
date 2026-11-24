
import "./Panier.css";

function Panier({ panier, ajouter, diminuer, supprimer }) {
  const total = panier.reduce(
    (somme, pizza) => somme + pizza.prix * pizza.quantite,
    0
  );

  return (
    <section className="panier">
      <h2>🛒 Mon Panier</h2>

      {panier.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          {panier.map((pizza) => (
            <div className="panier-item" key={pizza.id}>
              <img src={pizza.image} alt={pizza.nom} />

              <div>
                <h3>{pizza.nom}</h3>
                <p>{pizza.prix.toFixed(3)} DT</p>

                <button onClick={() => diminuer(pizza.id)}>
                  -
                </button>

                <span> {pizza.quantite} </span>

                <button onClick={() => ajouter(pizza)}>
                  +
                </button>

                <button onClick={() => supprimer(pizza.id)}>
                  Supprimer
                </button>
              </div>
            </div>
          ))}

          <h3>Total : {total.toFixed(3)} DT</h3>
        </>
      )}
    </section>
  );
}

export default Panier;
