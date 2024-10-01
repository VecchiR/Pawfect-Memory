import { useState } from 'react';


export default function HomeScreen({ setActiveScreen, setDifficulty, dogsArr }) {

  const goPlay = (n) => {
    setDifficulty(n);
    setActiveScreen('gameplay');
  }

  return (
    <>
      <h2>This is the Home Screen</h2>
      <div className="logo-home" >
        Logo
      </div>
      <button onClick={() => goPlay(1)}>Easy</button>
      <button onClick={() => goPlay(2)}>Medium</button>
      <button onClick={() => goPlay(3)}>Hard</button>
    </>
  );
}
