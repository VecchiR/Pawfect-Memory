export default function ScoreBoard({ score, bestScore, numberOfCards }) {
  return (
    <div className="scoreboard-container">
      <div className="score">{`SCORE: ${score} / ${numberOfCards}`}</div>
      <div className="best-score">{`BEST SCORE: ${bestScore}`}</div>
    </div>
  );
}
