import "./GameCarousel.css";
import { Game } from "./Game";
import { games } from "../mock/";
import { useControls } from "../hooks/controls";
import { useContext, useEffect } from "react";
import { InputContext } from "../context/inputContext";

const activeSetIndex = 0;

const GameCarousel = () => {
  const context = useContext(InputContext);
  const activeSet = context.state.activeSet;
  const [onKeyDown, selectedIndex, setSelectedIndex, activate, deactivate, controlActive] = useControls(games.length);

  useEffect(() => {
    if (activeSet === activeSetIndex) {
      activate();
    } else {
      deactivate();
    }
  }, [activeSet]);

  return (
    <div className="content" onKeyDown={onKeyDown}>
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
