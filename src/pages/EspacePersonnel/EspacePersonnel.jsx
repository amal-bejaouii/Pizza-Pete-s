import "./EspacePersonnel.css";

function EspacePersonnel({ user }) {
  return (
    <div className="espace-page">
      <div className="espace-card">
        <h2>Mon espace personnel</h2>
        <p>Bienvenue chez Pizza Pete's !</p>
        <p className="espace-email">Connecté en tant que : {user.email}</p>
      </div>
    </div>
  );
}

export default EspacePersonnel;
