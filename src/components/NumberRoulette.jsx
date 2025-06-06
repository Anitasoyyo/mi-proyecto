import "../App.css";

function NumberRoulette({ spinning }) {
  return (
    <div className="number-roulette-container">
      <div className={`roulette ${spinning ? "spinning" : "stopped"}`}>
        <span className="roulette-label">Números</span>
        {[...Array(8)].map((_, i) => (
          <div key={i} className="fish">
            🐟
          </div>
        ))}
      </div>

      {/* Peces animados debajo */}
      <div className="swimming-fish-container">
        <div className="swimming-fish">🐠</div>
        <div className="swimming-fish">🐠</div>
        <div className="swimming-fish">🐠</div>
        <div className="swimming-fish">🐠</div>
        <div className="swimming-fish">🐠</div>
        <div className="swimming-fish">🐠</div>
        <div className="swimming-fish">🐠</div>
      </div>
    </div>
  );
}
export default NumberRoulette;

//array(8): crea un array con 8 elementos
//Al ser una lista de elementos hay que aportarle a React una key que sería el índice "i".
//_: Convención para indicar que no usamos el elemento actual (que es undefined).
