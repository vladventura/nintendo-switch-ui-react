import "./GameCarousel.css";
import { Game } from "./Game";
import { games } from "../mock/";
const GameCarousel = () => {
  return (
    <div className="content">
      <ul className="carousel">
        {games.map((game) => (
          <Game name={game.name} image={game.image} key={game.name} />
        ))}
      </ul>
    </div>
  );
};

export { GameCarousel };
