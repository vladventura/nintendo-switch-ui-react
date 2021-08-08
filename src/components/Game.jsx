import "./Game.css";
import { useRef, useEffect } from "react";
import { ScrollText } from "./ScrollText";

const Game = ({ name, className, image, tabIndex, active, onClick }) => {
  let gameRef = useRef(null);

  useEffect(() => {
    if (gameRef.current && active) {
      gameRef.current.focus();
    } else gameRef.current.blur();
  }, [active]);

  const onFocus = (e) => {
    e?.preventDefault();
    onClick?.();
    console.log("Scrolled");
    gameRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  };


  return (
    <li
      ref={gameRef}
      tabIndex={tabIndex}
      onFocus={onFocus}
      onClick={(e) => e.preventDefault()}
      className={`game${className ? " " + className : ""}${
        active ? " active" : ""
      }`}
    >
      <div className="game-content">
        <ScrollText text={name} showText={active} />
        <div className="game-image-container">
          <img alt={name} src={image} />
        </div>
      </div>
    </li>
  );
};

export { Game };
