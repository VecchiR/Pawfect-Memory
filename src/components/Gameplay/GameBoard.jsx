/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import '../../style/App.css';
import '../../style/index.css';
import Card from './Card';
import '../../style/GameBoard.css';

export default function GameBoard({
  dogsArr,
  numberOfCards,
  handleGameOver,
  updateScoreboard,
}) {
  const [cardsToShowArr, setCardsToShowArr] = useState(null);
  const [shuffledCards, setShuffledCards] = useState(null);

  useEffect(() => {
    if (dogsArr) {
      const dogsArrDeepCopy = JSON.parse(JSON.stringify(dogsArr.slice(0, numberOfCards)));

      setCardsToShowArr([...dogsArrDeepCopy]);
      setShuffledCards([...dogsArrDeepCopy]);
    }
  }, [dogsArr, numberOfCards]);

  const invokeCards = () => {
    return (
      <>
        {shuffledCards &&
          shuffledCards.map((dog, index) => {
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
    function handleCardAlreadyClicked() {
      alert('this dog was already clicked');
      handleGameOver(false);
    }

    function checkAllCardsClicked(breedIndex) {
      let allClickStatus = [];
      cardsToShowArr.forEach((dog, i) => {
        if (i != breedIndex) {
          dog.clicked ? allClickStatus.push('yes') : allClickStatus.push('no');
        }
      });
      return allClickStatus.every((status) => status === 'yes');
    }

    function handleAllCardsClicked() {
      alert('you won, babyyyyyyyyyyyyyyy');
      handleGameOver(true);
    }

    function shuffleCards() {
      let copy = [...cardsToShowArr];

      //Fisher-Yates algorith - https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj#:~:text=Fisher%2DYates%20algorith
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
      }

      setShuffledCards([...copy]);
    }

    function markCard(breed) {
      let copy = [...cardsToShowArr];
      copy[copy.findIndex((dog) => dog.breed === breed)].clicked = true;
      setCardsToShowArr([...copy]);
    }

    const breed = e.currentTarget.firstChild.alt;
    const breedIndex = cardsToShowArr.findIndex((dog) => dog.breed === breed);
    const isClicked = cardsToShowArr[breedIndex].clicked ? true : false;
    if (breedIndex >= 0) {
      if (!isClicked) {
        markCard(breed);
        updateScoreboard();
        checkAllCardsClicked(breedIndex) ? handleAllCardsClicked() : null;
        shuffleCards();
      } else {
        handleCardAlreadyClicked();
      }
    }
  };

  return (
    <>
      <div className={`gameboard grid-${numberOfCards}`}>
        {shuffledCards ? invokeCards() : <p>Loading dogs...</p>}
      </div>
    </>
  );
}
