import ScoreBoard from './ScoreBoard';
import GameBoard from './GameBoard';
import HelpBadge from '../HelpBadge';
import { useState } from 'react';

export default function GameplayScreen({ setActiveScreen, difficulty, dogsArr }) {

  const goHome = () => {
    setActiveScreen('home');
  };

  return (
    <>
      <h2>This is the Gameplay Screen</h2>
      <div className="logo-small" onClick={goHome}>
        Logo
      </div>
      <ScoreBoard />
      <GameBoard difficulty={difficulty}/>
      <HelpBadge />

      


    </>
  );
}
