import { useState } from 'react';
import '../../style/App.css';
import '../../style/index.css';
import Card from './Card';
import '../../style/GameBoard.css';

export default function GameBoard({ difficulty = 1, score, bestScore, dogsArr }) {
  const numberOfCards = difficulty === 1 ? 9 : difficulty < 3 ? 16 : 25;

  // const dogsArr = [
  //   {
  //     breed: 'Schnauzer Miniature',
  //     url: 'https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_2871.jpg',
  //   },
  //   {
  //     breed: 'Germanshepherd',
  //     url: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_27186.jpg',
  //   },
  //   {
  //     breed: 'Setter English',
  //     url: 'https://images.dog.ceo/breeds/setter-english/n02100735_9865.jpg',
  //   },
  //   {
  //     breed: 'Schipperke',
  //     url: 'https://images.dog.ceo/breeds/schipperke/n02104365_5781.jpg',
  //   },
  //   {
  //     breed: 'Australian Shepherd',
  //     url: 'https://images.dog.ceo/breeds/australian-shepherd/forest.jpg',
  //   },
  //   {
  //     breed: 'Terrier Tibetan',
  //     url: 'https://images.dog.ceo/breeds/terrier-tibetan/n02097474_401.jpg',
  //   },
  //   {
  //     breed: 'Labradoodle',
  //     url: 'https://images.dog.ceo/breeds/labradoodle/labradoodle-forrest.jpg',
  //   },
  //   {
  //     breed: 'Entlebucher',
  //     url: 'https://images.dog.ceo/breeds/entlebucher/n02108000_1512.jpg',
  //   },
  //   {
  //     breed: 'Bullterrier Staffordshire',
  //     url: 'https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_4658.jpg',
  //   },
  //   {
  //     breed: 'Terrier Lakeland',
  //     url: 'https://images.dog.ceo/breeds/terrier-lakeland/n02095570_324.jpg',
  //   },
  //   {
  //     breed: 'Shihtzu',
  //     url: 'https://images.dog.ceo/breeds/shihtzu/n02086240_5042.jpg',
  //   },
  //   {
  //     breed: 'Sheepdog Indian',
  //     url: 'https://images.dog.ceo/breeds/sheepdog-indian/Himalayan_Sheepdog.jpg',
  //   },
  //   {
  //     breed: 'Pointer German',
  //     url: 'https://images.dog.ceo/breeds/pointer-german/n02100236_689.jpg',
  //   },
  //   {
  //     breed: 'Spaniel Cocker',
  //     url: 'https://images.dog.ceo/breeds/spaniel-cocker/n02102318_487.jpg',
  //   },
  //   {
  //     breed: 'Dalmatian',
  //     url: 'https://images.dog.ceo/breeds/dalmatian/cooper1.jpg',
  //   },
  //   {
  //     breed: 'Keeshond',
  //     url: 'https://images.dog.ceo/breeds/keeshond/n02112350_8278.jpg',
  //   },
  //   {
  //     breed: 'Terrier Patterdale',
  //     url: 'https://images.dog.ceo/breeds/terrier-patterdale/patterdale-terrier-1330018870tnN.jpg',
  //   },
  //   {
  //     breed: 'Poodle Miniature',
  //     url: 'https://images.dog.ceo/breeds/poodle-miniature/n02113712_1541.jpg',
  //   },
  //   {
  //     breed: 'Waterdog Spanish',
  //     url: 'https://images.dog.ceo/breeds/waterdog-spanish/20181023_072736.jpg',
  //   },
  //   {
  //     breed: 'Maltese',
  //     url: 'https://images.dog.ceo/breeds/maltese/n02085936_4070.jpg',
  //   },
  // ];

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
    <div className={`gameboard grid-${numberOfCards}`}>
      {dogsArr ? invokeCards() : <p>Loading...</p>}
    </div>
  );
}
