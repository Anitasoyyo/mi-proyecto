const InfoModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div
        className="modal-content"
        style={{
          backgroundImage: `url('/imagenes/cat.webp')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <button className="close-btn" onClick={onClose}>
          ✖️
        </button>
        <div className="info-box">
          <h2>Cómo usar la app</h2>
          <p>
            ¿Pero ...aún no eres millonario como yo?¿A qué esperas? ¡Ya es hora
            de hacer algo por tu futuro! Solamente tienes que tocar la pantalla
            para generar números aleatorios del Euromillón.Con cada toque se irá
            generando un número y así sucesivamente hasta completar los 5
            números y 2 estrellas del Euromillón. ¡Pulsa para empezar!
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
