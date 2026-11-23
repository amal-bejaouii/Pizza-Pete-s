import './App.css';
function App() {
  return (
    <div className="home-page">

      {/* Partie gauche : Présentation */}
      <section className="presentation">
        <h1>Bienvenue chez Pizza Pete's !</h1>
        <p>
          Découvrez nos délicieuses pizzas
          et créez votre propre pizza.
        </p>
      </section>

      {/* Partie centrale : Nos pizzas */}
      <section className="pizzas">
        <h2>Découvrez nos pizzas</h2>
      </section>

      {/* Partie droite : Création de pizza */}
      <section className="create-pizza">
        <h2>Crée ta propre pizza</h2>
      </section>

    </div>
  );
}

export default App;

function App() {
  return (
    <div>
      <PizzaList />
    </div>
  );
}

export default App;