import { useState, useRef, useEffect } from "react";
import "./Game.css";
import { ScrollText } from "./ScrollText";

const Game = ({ name, className, image, tabIndex, active, onClick }) => {
  let gameRef = useRef(null);
  const [showName, setShowName] = useState(false);

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
    setShowName(true);
  };

  const onBlur = () => setShowName(false);

  return (
    <li
      ref={gameRef}
      tabIndex={tabIndex}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={(e) => e.preventDefault()}
      className={`game${className ? " " + className : ""}${
        active ? " active" : ""
      }`}
    >
      <div className="game-content">
        <ScrollText text={name} showText={showName} />
        <img alt={name} src={image} />
      </div>
    </li>
  );
};

export { Game };
