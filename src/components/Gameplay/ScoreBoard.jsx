export default function ScoreBoard({ score, bestScore }) {
  return (
    <div className="scoreboard-container">
      <div className="score">{score}</div>
      <div className="best-score">{bestScore}</div>
    </div>
  );
}
