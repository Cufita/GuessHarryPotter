import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import charactersData from "../charactersData.json";
import "./GuessingGame.css";

const GuessingGame = () => {
  const [currentCharacter, setCurrentCharacter] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * charactersData.length);
    setCurrentCharacter(charactersData[randomIndex]);
  }, []);

  return (
    <div className="guessing-game">
      <div className="characters-container">
        <CharacterCard
          id={currentCharacter?.id}
          nombre={currentCharacter?.nombre}
          imagen={currentCharacter?.imagen}
          imagennegra={currentCharacter?.imagennegra}
        />
      </div>
    </div>
  );
};

export default GuessingGame;
