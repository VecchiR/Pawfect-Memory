import '../../style/App.css';
import '../../style/index.css';

export default function GameBoard({difficulty}) {
  
  const cardsToShow = difficulty === 1 ? 8 : difficulty < 3 ? 14 : 20;
  const cardsToShowArr = Array.from({ length: cardsToShow }, (_, index) => (
    <div key={index} className="card">
      Card {index + 1}
    </div>
  ));

  return (
    <div className="gameboard">
      {cardsToShowArr}
    </div>
  );
  }