import { useEffect, useState } from 'react'
import '../style/App.css'
import GameplayScreen from './Gameplay/GameplayScreen'
import getDogs from '../assets/dogImages'

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
      <GameplayScreen setActiveScreen={setActiveScreen} />
      <div>
        {dogsArr ? (
          dogsArr.map((dog, index) => (
            <div key={index}>
              <h3>{dog.breed}</h3>
              <img src={dog.url} alt={dog.breed} />
            </div>
          ))
        ) : (
          <p>Loading dogs...</p>
        )}
      </div>
    </>
  );
}

