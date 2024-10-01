import { useEffect, useState } from 'react';
import '../style/App.css';
import GameplayScreen from './Gameplay/GameplayScreen';
import getDogs from '../assets/dogImages';
import GameBoard from './Gameplay/GameBoard';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('home');
  const [dogsArr, setDogsArr] = useState(null);

  useEffect(() => {
    async function fetchDogs() {
      const dogs = await getDogs();
      setDogsArr(dogs);
    }

    fetchDogs();
  }, []);

  return (
    <>
      {/* <GameplayScreen setActiveScreen={setActiveScreen} dogsArr={dogsArr} /> */}
      {/* <div>{dogsArr ? <p>LOAD GAMEPLAY SCREEN</p> : <p>Loading dogs...</p>}</div> */}
      {/* <div>{dogsArr ? <GameBoard/> : <p>Loading dogs...</p>}</div> */}
      <GameBoard/>
    </>
  );
}
