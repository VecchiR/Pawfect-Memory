import ScoreBoard from './ScoreBoard';
import GameBoard from './GameBoard';
import { useState } from 'react';

export default function GameplayScreen({ setActiveScreen, difficulty, dogsArr, score, bestScore }) {
  const goHome = () => {
    setActiveScreen('home');
  };

  const handleEndGame = () => {};

  return (
    <>
      <div className="logo-small" onClick={goHome}>
        Logo
      </div>
      <h2>This is the Gameplay Screen</h2>
      <ScoreBoard score={score} bestScore={bestScore} />

      {dogsArr != null ? (
        <GameBoard difficulty={difficulty} dogsArr={dogsArr} />
      ) : (
        <p>Loading dogs...</p>
      )}
    </>
  );
}
