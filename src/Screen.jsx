import { GameCarousel } from "./components/GameCarousel";
import { Clock } from "./components/Clock";
import { Battery } from "./components/Battery";
import { PlayerIcon } from "./components/PlayerIcon";
import { UtilsRow } from "./components/UtilsRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { InputContext } from "./context/inputContext";
import { BottomBar } from "./components/BottomBar";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/themeContext";

export const Screen = () => {
  const { onKeyDown, setTotalSets, setNumber } = useContext(InputContext);
  const { theme, switchTheme } = useContext(ThemeContext);

  const handleKeyDown = (e) => {
    e.preventDefault();
    if (e.keyCode === 84 && !e.repeat) {
        switchTheme();
    }
    else onKeyDown(e);
  }

  useEffect(() => {
    if (setNumber !== 2)
      setTotalSets(2);
  }, [setNumber, setTotalSets])


    return (
        <div className={`screen ${theme}`} onKeyDown={handleKeyDown}>
          <div className="status-bar">
            <PlayerIcon />
            <div className="status-info">
              <Clock />
              <FontAwesomeIcon className="wifi-icon icon" icon={faWifi} />
              <Battery />
            </div>
          </div>
          <div className="main-container">
            <GameCarousel />
            <UtilsRow />
          </div>
          <BottomBar />
        </div>
      );
}