import "./GameCarousel.css";
import { Game } from "./Game";
import { games } from "../mock/";
import { useControls } from "../hooks/controls";
import { useContext, useEffect } from "react";
import { InputContext } from "../context/inputContext";

const activeSetIndex = 0;

const GameCarousel = () => {
  // const [selectedIndex, setSelectedIndex] = useState(0);
  const { activeSet } = useContext(InputContext);
  const [onKeyDown, selectedIndex, setSelectedIndex, toggleControls, controlActive] = useControls(games.length);

  useEffect(() => {
    if (activeSet === activeSetIndex && !controlActive) {
      toggleControls();
    }
  }, [activeSet]);

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
