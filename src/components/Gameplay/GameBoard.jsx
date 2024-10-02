import { useState, useEffect } from 'react';
import '../../style/App.css';
import '../../style/index.css';
import Card from './Card';
import '../../style/GameBoard.css';
import ScoreBoard from './ScoreBoard';

export default function GameBoard({ difficulty = 1, score, bestScore, dogsArr }) {
  const numberOfCards = difficulty === 1 ? 9 : difficulty < 3 ? 16 : 25;

  const [cardsToShowArr, setCardsToShowArr] = useState(null);
  useEffect(() => {
    if (dogsArr) {
      setCardsToShowArr(dogsArr.slice(0, numberOfCards));
    }
  }, [dogsArr, numberOfCards]);

  // let cardsToShowArr;
  // const areCardsReady = () => {
  //   if (dogsArr) {
  //     // cardsToShowArr = dogsArr.slice(0, numberOfCards);
  //     setCardsToShowArr(dogsArr.slice(0, numberOfCards));
  //     return true;
  //   }
  //   return false;
  // };

  const invokeCards = () => {
    return (
      <>
        {cardsToShowArr &&
          cardsToShowArr.map((dog, index) => {
            // console.log('inside the each. Now going through: ', dog);
            return (
              <Card
                key={index}
                imgUrl={dog.url}
                breedName={dog.breed}
                shuffleCards={shuffleCards}
              />
            );
          })}
      </>
    );
  };

  const shuffleCards = () => {
    let copy = [...cardsToShowArr];
    

    //Fisher-Yates algorith - https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj#:~:text=Fisher%2DYates%20algorith
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }


    setCardsToShowArr([...copy]);
  }

  return (
    <>
      <ScoreBoard />

      <div className={`gameboard grid-${numberOfCards}`}>
        
        {/* {areCardsReady() ? invokeCards() : <p>Loading dogs...</p>} */}
        {cardsToShowArr ? invokeCards() : <p>Loading dogs...</p>}      

      </div>
    </>
  );
}
