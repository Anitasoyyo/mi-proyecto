import "../App.css";

function ResultDisplay({ numbers, stars }) {
  return (
    <div className="result">
      <h2>Números:</h2>
      <div className="balls">
        {numbers.map((n, i) => (
          <div className="ball number" key={i}>
            {n}
          </div>
        ))}
      </div>
      <h2>Estrellas:</h2>
      <div className="balls">
        {stars.map((s, i) => (
          <div className="ball star" key={i}>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultDisplay;

// "n" y "s" son los valores del elemento actual e "i"es el índice.
