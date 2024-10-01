import { useState } from 'react';


export default function HomeScreen({ setActiveScreen, setDifficulty, dogsArr }) {

  const goplay = () => {
    setDifficulty(1);
    setActiveScreen('gameplay');
  }

  return (
    <>
      <h2>This is the Home Screen</h2>
      <button onClick={goplay}>button</button>
      <div className="logo-home" >
        Logo
      </div>
    </>
  );
}
