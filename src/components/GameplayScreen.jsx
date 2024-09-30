import Scoreboard from './Scoreboard';
import Gameboard from './Gameboard';
import HelpBadge from './HelpBadge';
import { useState } from 'react';

export default function GameplayScreen({ setActiveScreen, difficulty }) {

  const goHome = () => {
    setActiveScreen('home');
  };

  return (
    <>
      <h2>This is the Gameplay Screen</h2>
      <div className="logo-small" onClick={goHome}>
        Logo
      </div>
      <Scoreboard />
      <Gameboard difficulty={difficulty}/>
      <HelpBadge />
    </>
  );
}
