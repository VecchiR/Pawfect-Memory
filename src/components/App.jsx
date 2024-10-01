import { useEffect, useState } from 'react';
import '../style/App.css';
import GameplayScreen from './Gameplay/GameplayScreen';
import getDogs from '../assets/dogImages';
import GameBoard from './Gameplay/GameBoard';
import HomeScreen from './Home/HomeScreen';
import HelpBadge from './HelpBadge';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('home');
  const [difficulty, setDifficulty] = useState(null);
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

      {/* <div>
        {dogsArr ? (
          <GameBoard score={score} bestScore={bestScore} dogsArr={dogsArr} difficulty={difficulty}/>
        ) : (
          <p>Loading dogs...</p>
        )}
      </div> */}

      {/* <div>
        {dogsArr ? (
          <HomeScreen dogsArr={dogsArr} difficulty={difficulty} setActiveScreen={setActiveScreen}/>
          ) : (
            <p>Loading dogs...</p>
            )}
            </div> */}

      {activeScreen === 'home' ? (
        <HomeScreen dogsArr={dogsArr} setDifficulty={setDifficulty} setActiveScreen={setActiveScreen} />
      ) : (
        <GameplayScreen
          setActiveScreen={setActiveScreen}
          difficulty={difficulty}
          dogsArr={dogsArr}
        />
      )}
      <HelpBadge />
    </>
  );
}
