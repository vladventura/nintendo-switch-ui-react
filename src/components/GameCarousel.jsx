import "./GameCarousel.css";
import { Game } from "./Game";
import { games } from "../mock/";
import { useState } from "react";

const GameCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onKeyDown = (e) => {
    e.preventDefault();
    if (e.type === "keydown") {
      if (e.keyCode === 65) {
        if (selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
      }
      if (e.keyCode === 68) {
        if (selectedIndex < games.length - 1)
          setSelectedIndex(selectedIndex + 1);
      }
    }
  };

  return (
    <div className="content" onKeyDown={onKeyDown} onClick={onKeyDown}>
      <ul
        className="carousel"
        onScroll={(e) => e.preventDefault()}
        onScrollCapture={(e) => e.preventDefault()}
        onKeyDown={(e) => e.preventDefault()}
        onClick={(e) => e.preventDefault()}
      >
        {games.map((game, index) => {
          return (
            <Game
              onClick={() => setSelectedIndex(index)}
              name={game.name}
              image={game.image}
              key={game.name}
              tabIndex={index}
              active={selectedIndex === index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export { GameCarousel };
