import { useState, useEffect } from 'react';
import '../../style/App.css';
import '../../style/index.css';
import Card from './Card';
import '../../style/GameBoard.css';
import ScoreBoard from './ScoreBoard';

export default function GameBoard({ difficulty = 1, score, bestScore, dogsArr }) {
  const numberOfCards = difficulty === 1 ? 9 : difficulty < 3 ? 16 : 25;
  const [cardsToShowArr, setCardsToShowArr] = useState(null);
  const [shuffledCards, setShuffledCards] = useState(null);

  useEffect(() => {
    if (dogsArr) {
      setCardsToShowArr(dogsArr.slice(0, numberOfCards));
      setShuffledCards(dogsArr.slice(0, numberOfCards));
    }
  }, [dogsArr, numberOfCards]);

  const invokeCards = () => {
    return (
      <>
        {shuffledCards &&
          shuffledCards.map((dog, index) => {
            // console.log('inside the each. Now going through: ', dog);
            return (
              <Card
                key={index}
                imgUrl={dog.url}
                breedName={dog.breed}
                handleCardClick={handleCardClick}
              />
            );
          })}
      </>
    );
  };

  const handleCardClick = (e) => {
    const breed = e.currentTarget.firstChild.alt;
    const breedIndex = cardsToShowArr.findIndex((dog) => dog.breed === breed);
    const isClicked = cardsToShowArr[breedIndex].clicked ? true : false;
    if (breedIndex >= 0) {
      if (!isClicked) {
        markCard(breed);

        // AFTER marking, are ALL cards clicked NOW?
        let allClickStatus = [];
        cardsToShowArr.forEach((dog, i) => {
          if(i != breedIndex) {
            dog.clicked ? allClickStatus.push('yes') : allClickStatus.push('no');
          }
        })
          
        if (allClickStatus.every(status => status === 'yes')) {
          alert('you won, babyyyyyyyyyyyyyyy');
        }

        shuffleCards();
      } 
      
      else {
        alert('this dog was already clicked');
      }
    }
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

    setShuffledCards([...copy]);
  };

  const markCard = (breed) => {
    console.log(breed);
    let copy = [...cardsToShowArr];
    copy[copy.findIndex((dog) => dog.breed === breed)].clicked = true;
    setCardsToShowArr([...copy]);
  };

  return (
    <>
      <ScoreBoard />

      <div className={`gameboard grid-${numberOfCards}`}>
        {/* {areCardsReady() ? invokeCards() : <p>Loading dogs...</p>} */}
        {shuffledCards ? invokeCards() : <p>Loading dogs...</p>}
      </div>
    </>
  );
}
