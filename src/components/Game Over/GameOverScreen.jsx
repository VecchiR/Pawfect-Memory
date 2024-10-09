import '../../style/gameoverScreen.css';

export default function GameOverScreen({ levelBeaten, numberOfCards, score, tryAgain, goHome }) {
  return (
    <div className="gameover-screen">
      {levelBeaten ? (
        <>
          <h2>{`SUCCESS! You clicked all the ${numberOfCards} cards only once!`}</h2>
          <button onClick={goHome}>Go home</button>
        </>
      ) : (
        <>
          <h2>{`FAIL! You scored ${score} out of ${numberOfCards}`}</h2>
          <div className="gameover-button-container">
            <button onClick={tryAgain}>Try again</button>
            <button onClick={goHome}>Go home</button>
          </div>
        </>
      )}
    </div>
  );
}
