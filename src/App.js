import "./App.css";
import { GameCarousel } from "./components/GameCarousel";
import { Clock } from "./components/Clock";
import { Battery } from "./components/Battery";
import { PlayerIcon } from "./components/PlayerIcon";

function App() {

  return (
    <div className="screen">
      <div className="status-bar">
        <PlayerIcon />
        <div className="status-info">
          <Clock />
          <i className="fas fa-wifi wifi-icon icon"></i>
          <Battery />
        </div>
      </div>
      <div className="main-container">
        <GameCarousel />
        <div className="utils-column"></div>
      </div>
      <div className="bottom-bar"></div>
    </div>
  );
}

export default App;
