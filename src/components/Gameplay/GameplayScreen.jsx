/* eslint-disable react/prop-types */
import ScoreBoard from './ScoreBoard';
import GameBoard from './GameBoard';
import GameOverScreen from '../Game Over/GameOverScreen';
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

  const numberOfCards = difficulty === 1 ? 9 : difficulty < 3 ? 16 : 25;

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
  }

  return (
    <>
      <div className="logo-small" onClick={goHome}>
        Logo
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
          <h2>This is the Gameplay Screen</h2>
          <ScoreBoard
            score={score}
            bestScore={
              bestScore[
                `${difficulty === 1 ? 'easy' : difficulty === 2 ? 'medium' : 'hard'}`
              ]
            }
            numberOfCards={numberOfCards}
          />

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
    </>
  );
}
