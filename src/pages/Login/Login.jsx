
import { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !motDePasse) {
      setErreur("Veuillez remplir tous les champs.");
      return;
    }

    setErreur("");

    try {
      // 1. Récupérer le token CSRF (et la session) auprès de Spring Boot
      const csrfRes = await fetch("/api/auth/csrf", {
        credentials: "include",
      });
      const csrf = await csrfRes.json();

      // 2. Envoyer l'email et le mot de passe
      const res = await fetch("/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          [csrf.headerName]: csrf.token,
        },
        body: new URLSearchParams({ email, motDePasse }),
      });

      if (res.ok) {
        const me = await fetch("/api/auth/me", { credentials: "include" });
        const user = await me.json();
        onLogin(user);
      } else if (res.status === 401) {
        setErreur("Email ou mot de passe incorrect.");
      } else {
        setErreur("Erreur serveur (" + res.status + ").");
      }
    } catch {
      setErreur("Impossible de joindre le serveur.");
    }
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
