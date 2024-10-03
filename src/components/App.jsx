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

    // fetchDogs();    // THIS IS THE REAL DEAL: uncomment this and comment the "setDogsArr" below to fetch dogs from api
    
    setDogsArr([ // THIS IS A MOCK, just to avoid fetching this array everytime I want to update the app
      {
        breed: 'Shiba',
        url: 'https://images.dog.ceo/breeds/shiba/shiba-17.jpg',
      },
      {
        breed: 'Australian Shepherd',
        url: 'https://images.dog.ceo/breeds/australian-shepherd/pepper2.jpg',
      },
      {
        breed: 'Pembroke',
        url: 'https://images.dog.ceo/breeds/pembroke/n02113023_2482.jpg',
      },
      {
        breed: 'Chippiparai Indian',
        url: 'https://images.dog.ceo/breeds/chippiparai-indian/Indian-Chippiparai.jpg',
      },
      {
        breed: 'Weimaraner',
        url: 'https://images.dog.ceo/breeds/weimaraner/n02092339_1521.jpg',
      },
      {
        breed: 'Hound Basset',
        url: 'https://images.dog.ceo/breeds/hound-basset/n02088238_7232.jpg',
      },
      {
        breed: 'Mudhol Indian',
        url: 'https://images.dog.ceo/breeds/mudhol-indian/Indian-Mudhol.jpg',
      },
      {
        breed: 'Spaniel Brittany',
        url: 'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_2021.jpg',
      },
      {
        breed: 'Malamute',
        url: 'https://images.dog.ceo/breeds/malamute/n02110063_5829.jpg',
      },
      {
        breed: 'Terrier Kerryblue',
        url: 'https://images.dog.ceo/breeds/terrier-kerryblue/n02093859_855.jpg',
      },
      {
        breed: 'Pointer Germanlonghair',
        url: 'https://images.dog.ceo/breeds/pointer-germanlonghair/hans4.jpg',
      },
      {
        breed: 'Terrier Westhighland',
        url: 'https://images.dog.ceo/breeds/terrier-westhighland/n02098286_1591.jpg',
      },
      {
        breed: 'Mexicanhairless',
        url: 'https://images.dog.ceo/breeds/mexicanhairless/n02113978_700.jpg',
      },
      {
        breed: 'Germanshepherd',
        url: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_248.jpg',
      },
      {
        breed: 'Doberman',
        url: 'https://images.dog.ceo/breeds/doberman/n02107142_14636.jpg',
      },
      {
        breed: 'Havanese',
        url: 'https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191126134713895_COVER.jpg',
      },
      {
        breed: 'Mastiff Tibetan',
        url: 'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_572.jpg',
      },
      {
        breed: 'Dalmatian',
        url: 'https://images.dog.ceo/breeds/dalmatian/cooper1.jpg',
      },
      {
        breed: 'Samoyed',
        url: 'https://images.dog.ceo/breeds/samoyed/n02111889_5532.jpg',
      },
      {
        breed: 'Keeshond',
        url: 'https://images.dog.ceo/breeds/keeshond/n02112350_10254.jpg',
      },
      {
        breed: 'Affenpinscher',
        url: 'https://images.dog.ceo/breeds/affenpinscher/n02110627_8949.jpg',
      },
      {
        breed: 'Basenji',
        url: 'https://images.dog.ceo/breeds/basenji/n02110806_3911.jpg',
      },
      {
        breed: 'Saluki',
        url: 'https://images.dog.ceo/breeds/saluki/n02091831_7846.jpg',
      },
      {
        breed: 'Terrier Wheaten',
        url: 'https://images.dog.ceo/breeds/terrier-wheaten/n02098105_3387.jpg',
      },
      {
        breed: 'Bouvier',
        url: 'https://images.dog.ceo/breeds/bouvier/n02106382_3756.jpg',
      },
    ]);

  }, []);

  return (
    <>
      {activeScreen === 'home' ? (
        <HomeScreen
          dogsArr={dogsArr}
          setDifficulty={setDifficulty}
          setActiveScreen={setActiveScreen}
        />
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
