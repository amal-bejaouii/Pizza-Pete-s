
import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !motDePasse) {
      setErreur("Veuillez remplir tous les champs.");
      return;
    }

    setErreur("");

    // T19 : la vérification avec Spring Boot
    // sera ajoutée ici.
    alert("Formulaire rempli. Connexion à configurer.");
  }

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Connexion</h2>
        <p>Bienvenue chez Pizza Pete's !</p>

        <label htmlFor="email">Adresse e-mail</label>
        <input
          id="email"
          type="email"
          placeholder="Entrez votre e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Mot de passe</label>
        <input
          id="password"
          type="password"
          placeholder="Entrez votre mot de passe"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
          required
        />

        {erreur && <p className="erreur">{erreur}</p>}

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
