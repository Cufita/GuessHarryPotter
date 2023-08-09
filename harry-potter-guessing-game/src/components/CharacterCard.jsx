import React, { useState } from "react";
import "./CharacterCard.css";

const CharacterCard = ({ id, nombre, imagen, imagennegra }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="character-card">
      <div
        className="character-card_div"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={hovered ? imagen : imagennegra}
          alt={nombre}
          className="character-image"
        />
      </div>

      <div className="character-name">
        <p className="character-name_p">{hovered ? nombre : "?"}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
