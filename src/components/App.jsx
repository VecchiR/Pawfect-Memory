import { useEffect, useState } from 'react';
import '../style/App.css';
import GameplayScreen from './Gameplay/GameplayScreen';
import getDogs from '../assets/dogImages';
import GameBoard from './Gameplay/GameBoard';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('home');
  const [dogsArr, setDogsArr] = useState(null);
  const [bestScore, setBestScore] = useState(null);
  const [score, SetScore] = useState(0);

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

      {/* <GameBoard score={score} bestScore={bestScore} dogsArr={dogsArr} /> */}

      <div>
        {dogsArr ? (
          <GameBoard score={score} bestScore={bestScore} dogsArr={dogsArr} />
        ) : (
          <p>Loading dogs...</p>
        )}
      </div>

      
    </>
  );
}
