import "../App.css";

function StarRoulette({ spinning }) {
  return (
    <div className={`roulette ${spinning ? "spinning" : "stopped"}`}>
      <span className="roulette-label">Estrellas</span>
      {[...Array(8)].map((_, i) => (
        <div key={i} className="star">
          ⭐
        </div>
      ))}

      {/* Ovillos de lana animados debajo */}
      <div className="swimming-ball-container">
        <div className="swimming-ball">🧶</div>
        <div className="swimming-ball">🧶</div>
        <div className="swimming-ball">🧶</div>
        <div className="swimming-ball">🧶</div>
        <div className="swimming-ball">🧶</div>
        <div className="swimming-ball">🧶</div>
      </div>
    </div>
  );
}

export default StarRoulette;

//array(8): crea un array con 8 elementos
//Al ser una lista de elementos hay que aportarle a React una key que sería el índice "i".
//_: Convención para indicar que no usamos el elemento actual (que es undefined).
