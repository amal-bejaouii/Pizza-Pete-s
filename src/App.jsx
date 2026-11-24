import { useEffect, useState } from "react";
import "./App.css";
import PizzaList from "./components/PizzaList.jsx";
import Login from "./pages/Login/Login.jsx";
import EspacePersonnel from "./pages/EspacePersonnel/EspacePersonnel.jsx";

function App() {
  const [user, setUser] = useState(null);

  // Si une session existe déjà, aller directement à l'espace personnel
  useEffect(() => {
    async function verifierSession() {
      try {
        const res = await fetch("/api/auth/me", {
          credentials: "include",
          redirect: "manual",
        });
        if (res.ok) {
          setUser(await res.json());
        }
      } catch {
        // backend injoignable : on reste sur la page d'accueil
      }
    }
    verifierSession();
  }, []);

  // T20 : après connexion, rediriger vers l'espace personnel
  if (user) {
    return <EspacePersonnel user={user} />;
  }

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

      <Login onLogin={setUser} />
    </>
  );
}

export default App;
