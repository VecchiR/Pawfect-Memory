/* eslint-disable react/prop-types */
import ScoreBoard from './ScoreBoard';
import GameBoard from './GameBoard';
import GameOverScreen from '../Game Over/GameOverScreen';
import '../../style/gameplayScreen.css';
import logo from '../../assets/shiba-logo-no-shadow.png';
import { useState } from 'react';

export default function GameplayScreen({
  setActiveScreen,
  activeScreen,
  difficulty,
  dogsArr,
  bestScore,
  setBestScore,
}) {
  const [score, setScore] = useState(0);

  // const numberOfCards = difficulty === 1 ? 9 : difficulty < 3 ? 16 : 25;
  const numberOfCards = difficulty === 1 ? 8 : difficulty < 3 ? 12 : 18;


  const updateScoreboard = () => {
    const newScore = score + 1;
    setScore(newScore);

    const diff = difficulty === 1 ? 'easy' : difficulty === 2 ? 'medium' : 'hard';
    const bestScoreCOPY = { ...bestScore };
    if (newScore > bestScoreCOPY[`${diff}`]) {
      bestScoreCOPY[`${diff}`] = newScore;
      setBestScore({ ...bestScoreCOPY });
    }
  };

  const resetScore = () => {
    setScore(0);
  };

  const goHome = () => {
    setActiveScreen('home');
  };

  const handleGameOver = (levelBeaten) => {
    setActiveScreen({ gameover: true, levelBeaten: levelBeaten });
  };

  const tryAgain = () => {
    resetScore();
    setActiveScreen('gameplay');
  };

  return (
    <div className='gameplay-screen'>
      <div className="header">
        <div className="logo-container">
          <div className="logo-small" onClick={goHome}>
            Pawfect Memory
          </div>
          <img src={logo} alt="" onClick={goHome} />
        </div>
        {activeScreen.gameover ? null : (
          <ScoreBoard
            score={score}
            bestScore={
              bestScore[`${difficulty === 1 ? 'easy' : difficulty === 2 ? 'medium' : 'hard'}`]
            }
            numberOfCards={numberOfCards}
          />
        )}
      </div>

      {activeScreen.gameover ? (
        <GameOverScreen
          levelBeaten={activeScreen.levelBeaten}
          numberOfCards={numberOfCards}
          score={score}
          tryAgain={tryAgain}
          goHome={goHome}
        />
      ) : (
        <>
          {dogsArr != null ? (
            <GameBoard
              difficulty={difficulty}
              dogsArr={dogsArr}
              numberOfCards={numberOfCards}
              updateScoreboard={updateScoreboard}
              handleGameOver={handleGameOver}
            />
          ) : (
            <p>Loading dogs...</p>
          )}
        </>
      )}
    </div>
  );
}
