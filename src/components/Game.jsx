import "./Game.css";
import { ScrollText } from "./ScrollText";

const Game = ({ name, className, image }) => {
  return (
    <li className={`game${className ? " " + className : ""}`}>
      <ScrollText text={name} />
      <img alt={name} src={image} />
    </li>
  );
};

export { Game };
