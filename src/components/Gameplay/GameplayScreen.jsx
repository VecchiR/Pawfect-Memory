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

  const scoreBoard = {
    score: score,
    bestScore: bestScore,
    updateScoreboard: () => {
      const newScore = score + 1;
      setScore(newScore);

      const diff = difficulty === 1 ? 'easy' : difficulty === 2 ? 'medium' : 'hard';
      const bestScoreCOPY = { ...bestScore };
      if (newScore > bestScoreCOPY[`${diff}`]) {
        bestScoreCOPY[`${diff}`] = newScore;
        setBestScore({ ...bestScoreCOPY });
      }
    },

    resetScore: () => {
      setScore(0);
    },
  };

  const goHome = () => {
    setActiveScreen('home');
  };

  const handleGameOver = () => {
    scoreBoard.resetScore();
    setActiveScreen('gameover');
  };

  return (
    <>
      <div className="logo-small" onClick={goHome}>
        {' '}
        Logo{' '}
      </div>

      {activeScreen === 'gameover' ? (
        <GameOverScreen />
      ) : (
        <>
          <h2>This is the Gameplay Screen</h2>
          <ScoreBoard
            score={scoreBoard.score}
            bestScore={
              scoreBoard.bestScore[
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
              scoreBoard={scoreBoard}
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
