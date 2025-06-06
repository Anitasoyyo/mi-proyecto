const Navbar = ({ onInfoClick }) => {
  return (
    <nav className="navbar">
      <button className="info-btn" onClick={onInfoClick}>
        🐾 Información
      </button>
      <p className="slogan">
        Catmillón , el michi elige números y tú eliges la mansión...
      </p>
    </nav>
  );
};

export default Navbar;

// el navbar nos renderiza el botón (al hacer click sobre él ocurre la función onInfoClick ) y el slogan .
