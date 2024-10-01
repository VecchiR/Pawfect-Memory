import { useState } from 'react';
import '../../style/App.css';
import '../../style/index.css';
import Card from './Card';
import '../../style/GameBoard.css';
import ScoreBoard from './ScoreBoard';
import HelpBadge from '../HelpBadge';

export default function GameBoard({ difficulty = 1, score, bestScore, dogsArr }) {
  const numberOfCards = difficulty === 1 ? 9 : difficulty < 3 ? 16 : 25;

  const cardsToShowArr = dogsArr.slice(0, numberOfCards);

  const invokeCards = () => {
    try {
      return (
        <>
          {cardsToShowArr.map((dog, index) => {
            console.log('inside the each. Now going through: ', dog);
            return <Card imgUrl={dog.url} breedName={dog.breed} />;
          })}
        </>
      );
    } catch (error) {
      console.log('cardsToShowArr: ', cardsToShowArr);
    }
  };

  return (
    <>
      <ScoreBoard />
      <HelpBadge />
      <div className={`gameboard grid-${numberOfCards}`}>
        {dogsArr ? invokeCards() : <p>Loading...</p>}
      </div>

    </>
  );
}
