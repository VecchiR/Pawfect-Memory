import { useState } from 'react';
import '../../style/App.css';
import '../../style/index.css';
import Card from './Card';
import '../../style/GameBoard.css';
import ScoreBoard from './ScoreBoard';

export default function GameBoard({ difficulty = 1, score, bestScore, dogsArr }) {
  const numberOfCards = difficulty === 1 ? 9 : difficulty < 3 ? 16 : 25;

  var cardsToShowArr;

  const areCardsReady = () => {
    if (dogsArr) {
      cardsToShowArr = dogsArr.slice(0, numberOfCards);
      return true;
    }
    return false;
  };

  const invokeCards = () => {
    try {
      return (
        <>
          {cardsToShowArr.map((dog, index) => {
            console.log('inside the each. Now going through: ', dog);
            return <Card key={index} imgUrl={dog.url} breedName={dog.breed} />;
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

      <div className={`gameboard grid-${numberOfCards}`}>
        {areCardsReady() ? invokeCards() : <p>Loading dogs...</p>}
      </div>
    </>
  );
}
