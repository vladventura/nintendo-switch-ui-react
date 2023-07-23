import "./App.css";
import { GameCarousel } from "./components/GameCarousel";
import { Clock } from "./components/Clock";
import { Battery } from "./components/Battery";
import { PlayerIcon } from "./components/PlayerIcon";
import { UtilsRow } from "./components/UtilsRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { InputContext } from "./context/inputContext";

function App() {

  const { onKeyDown, setTotalSets } = useContext(InputContext);

  setTotalSets(2);

  return (
    <div className="screen" onKeyDown={onKeyDown}>
      <div className="status-bar">
        <PlayerIcon />
        <div className="status-info">
          <Clock />
          <FontAwesomeIcon className="wifi-icon icon" icon={faWifi} />
          {/* <i className="fas fa-wifi wifi-icon icon"></i> */}
          <Battery />
        </div>
      </div>
      <div className="main-container">
        <GameCarousel />
        <UtilsRow />
      </div>
      <div className="bottom-bar"></div>
    </div>
  );
}

export default App;
