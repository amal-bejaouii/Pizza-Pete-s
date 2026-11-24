
import { useEffect, useState } from "react";
import "./App.css";

import PizzaList from "./components/PizzaList.jsx";
import Panier from "./components/Panier.jsx";
import Login from "./pages/Login/Login.jsx";
import EspacePersonnel from "./pages/EspacePersonnel/EspacePersonnel.jsx";

function App() {
  const [user, setUser] = useState(null);
  // Le panier est relu depuis le navigateur pour survivre à un rechargement
  const [panier, setPanier] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("panier")) ?? [];
    } catch {
      return [];
    }
  });

  // T31 : sauvegarder le panier après chaque modification
  useEffect(() => {
    localStorage.setItem("panier", JSON.stringify(panier));
  }, [panier]);

  // T29 + T31 : ajouter une pizza et actualiser la quantité
  function ajouterAuPanier(pizza) {
    setPanier((ancien) => {
      const existe = ancien.find((p) => p.id === pizza.id);

      if (existe) {
        return ancien.map((p) =>
          p.id === pizza.id
            ? { ...p, quantite: p.quantite + 1 }
            : p
        );
      }

      return [...ancien, { ...pizza, quantite: 1 }];
    });
  }

  // Diminuer la quantité
  function diminuerQuantite(id) {
    setPanier((ancien) =>
      ancien
        .map((p) =>
          p.id === id
            ? { ...p, quantite: p.quantite - 1 }
            : p
        )
        .filter((p) => p.quantite > 0)
    );
  }

  // Supprimer une pizza
  function supprimerDuPanier(id) {
    setPanier((ancien) =>
      ancien.filter((p) => p.id !== id)
    );
  }

  // US05 : vérifier la session utilisateur
  useEffect(() => {
    async function verifierSession() {
      try {
        const res = await fetch("/api/auth/me", {
          credentials: "include"
        });

        if (res.ok) {
          setUser(await res.json());
        }
      } catch {
        // Le serveur est indisponible
      }
    }

    verifierSession();
  }, []);

  // US05 : espace personnel après connexion
  if (user) {
    return <EspacePersonnel user={user} />;
  }

  return (
    <>
      <div className="home-page">

        {/* Présentation */}
        <section className="presentation">
          <h1>Bienvenue chez Pizza Pete's !</h1>
          <p>
            Découvrez nos délicieuses pizzas
            et créez votre propre pizza.
          </p>
        </section>

        {/* US02 : Liste des pizzas */}
        <section className="pizzas">
          <h2>Découvrez nos pizzas</h2>
          <PizzaList onAjouter={ajouterAuPanier} />
        </section>

        {/* Personnalisation */}
        <section className="create-pizza">
          <h2>Crée ta propre pizza</h2>
        </section>

      </div>

      {/* US10 : Panier */}
      <Panier
        panier={panier}
        ajouter={ajouterAuPanier}
        diminuer={diminuerQuantite}
        supprimer={supprimerDuPanier}
      />

      {/* US05 : Connexion */}
      <Login onLogin={setUser} />
    </>
  );
}

export default App;
