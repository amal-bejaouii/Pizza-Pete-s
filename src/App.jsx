import "./App.css";
import PizzaList from "./components/PizzaList.jsx";
import Login from "./pages/Login/Login.jsx";

function App() {
  return (
    <>
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
          <PizzaList />
        </section>

        {/* Partie droite : Création de pizza */}
        <section className="create-pizza">
          <h2>Crée ta propre pizza</h2>
        </section>
      </div>

      <Login />
    </>
  );
}

export default App;
