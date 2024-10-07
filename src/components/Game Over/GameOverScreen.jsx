export default function GameOverScreen({ levelBeaten, numberOfCards, score, tryAgain, goHome }) {
  return (
    <>
      {levelBeaten ?
      <h2>{`SUCCESS! You clicked all the ${numberOfCards} cards only once!`}</h2> 
      :
      (<><h2>{`FAIL! You scored ${score} out of ${numberOfCards}`}</h2>
      <button onClick={tryAgain}>Try again</button>
      </>)
    }
    <button onClick={goHome}>Go home</button>
    </>
  );
}
