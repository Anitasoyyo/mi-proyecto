// import "../App.css";

// function StarRoulette({ spinning }) {
//   return (
//     <div className={`roulette stars ${spinning ? "spinning" : "stopped"}`}>
//       {[...Array(6)].map((_, i) => (
//         <div key={i} className="star-icon">
//           ⭐
//         </div>
//       ))}
//       <div className="label">ESTRELLAS</div>

//       {/* Estrellas animadas debajo */}
//       <div className="swimming-fish-container">
//         <div className="swimming-fish">⭐</div>
//         <div className="swimming-fish">⭐</div>
//         <div className="swimming-fish">⭐</div>
//         <div className="swimming-fish">⭐</div>
//         <div className="swimming-fish">⭐</div>
//       </div>
//     </div>
//   );
// }
// function StarRoulette({ spinning }) {
//   return (
//     <div className="number-roulette-container">
//       <div className={`roulette ${spinning ? "spinning" : "stopped"}`}>
//         {[...Array(8)].map((_, i) => (
//           <div key={i} className="fish">
//             🐟
//           </div>
//         ))}
//         <div className="label">NÚMEROS</div>
//       </div>

//       {/* Peces animados debajo */}
//       <div className="swimming-fish-container">
//         <div className="swimming-fish">⭐</div>
//         <div className="swimming-fish">⭐</div>
//         <div className="swimming-fish">⭐</div>
//         <div className="swimming-fish">⭐</div>
//         <div className="swimming-fish">⭐</div>
//         <div className="swimming-fish">⭐</div>
//         <div className="swimming-fish">⭐</div>
//       </div>
//     </div>
//   );
// }

// export default StarRoulette;
import React from "react";
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
