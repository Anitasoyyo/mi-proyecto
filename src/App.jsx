import { useState, useRef, useEffect } from "react";
import NumberRoulette from "./components/NumberRoulette";
import StarRoulette from "./components/StarRoulette";
import ResultDisplay from "./components/ResultDisplay";
import Navbar from "./components/Navbar";
import InfoModal from "./components/InfoModal";
import "./App.css";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [stars, setStars] = useState([]);
  const [isSpinning, setIsSpinning] = useState(true); //inicializamos la ruleta activa .
  const [showModal, setShowModal] = useState(false);

  // Referencias para los audios
  const casinoRef = useRef(null); //useRef es un hook que me permite guardar una referencia del elemento para más adelante usarlo (con .current .play)
  const plopRef = useRef(null);

  // Efecto para reproducir el sonido cuando termina la combinación
  useEffect(() => {
    if (!isSpinning && numbers.length === 5 && stars.length === 2) {
      casinoRef.current && casinoRef.current.play(); //apuntamos al elemento y luego lo repoducimos.
    } // si la ruletas no está ya girando y ya se han completado los 5 nº y las 2 estrellas es cuando se reproduce el sonido.
  }, [isSpinning, numbers, stars]); //se ejecuta cada vez que alguno de éstos valores cambie .

  const handleTap = () => {
    if (!isSpinning) return;

    if (numbers.length < 5) {
      let newNumber;
      do {
        newNumber = Math.floor(Math.random() * 50) + 1;
      } while (numbers.includes(newNumber)); //si number incluye ese newNumber quiere decir que el nº es repetido , el bucle se vuelve a ejecutar y genera otro nº aleatorio.
      const updatedNumbers = [...numbers, newNumber]; //crea un nuevo array con los números anteriores y añade el nuevo al final.
      setNumbers(updatedNumbers);

      // Reproduce sonido plop al añadir número
      if (plopRef.current) {
        //volvemos a recuperar la referencia del audio
        plopRef.current.currentTime = 0; //pone el audio al inicio, en el segundo 0.
        plopRef.current.play(); //y lo ejecuta .
      }

      if (updatedNumbers.length === 5 && stars.length === 2) {
        setIsSpinning(false); //paramos la ruleta cuando ya esté la combinación completa .
      }
    } else if (stars.length < 2) {
      let newStar;
      do {
        newStar = Math.floor(Math.random() * 12) + 1;
      } while (stars.includes(newStar));
      const updatedStars = [...stars, newStar];
      setStars(updatedStars);

      // Reproduce sonido plop al añadir estrella
      if (plopRef.current) {
        plopRef.current.currentTime = 0;
        plopRef.current.play();
      }

      if (numbers.length === 5 && updatedStars.length === 2) {
        setIsSpinning(false);
      }
    }
  };

  //función para reiniciar el juego . Vacía todo y vuelve a dejarlo como al principio .
  const resetGame = () => {
    setNumbers([]);
    setStars([]);
    setIsSpinning(true);
  };

  // AVISO: Solo mostrar la app si el ancho es de tablet
  if (window.innerWidth > 900) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "100px",
          color: "#fff",
          fontSize: "2em",
        }}
      >
        Esta app está diseñada para tablet para que los gatos puedan interactuar
        con ella.
        <br />
        Por favor, reduce el tamaño de la ventana o usa una tablet para verla
        correctamente.
      </div>
    );
  }
  return (
    <>
      <div className="tablet-frame">
        {/* Audios */}
        <audio ref={casinoRef} src="/imagenes/casino.mp3" preload="auto" />
        <audio ref={plopRef} src="/imagenes/plop.mp3" preload="auto" />
        <Navbar onInfoClick={() => setShowModal(true)} />
        <div className="app" onClick={handleTap}>
          <h1>
            🎰 CATMILLON
            <img
              className="logo-cat"
              src="/imagenes/gato-logo.png"
              alt="Logo del gato"
              style={{ verticalAlign: "middle", height: "2em" }}
            />
            🎰
          </h1>

          <ResultDisplay numbers={numbers} stars={stars} />

          {!isSpinning && numbers.length === 5 && stars.length === 2 && (
            <div className="congrats-message">
              ¡ Ya tenemos la combinación ! Ahora sólo falta cruzar las patas
              <br />y a comer sardinas .
            </div>
          )}
          {!isSpinning && (
            <button className="reset-btn" onClick={resetGame}>
              Reiniciar
            </button>
          )}

          <div className="roulette-section">
            {numbers.length < 5 && <NumberRoulette spinning={isSpinning} />}
            {numbers.length === 5 && stars.length < 2 && (
              <StarRoulette spinning={isSpinning} />
            )}
          </div>
        </div>
        {showModal && <InfoModal onClose={() => setShowModal(false)} />}
      </div>
    </>
  );
}

export default App;
