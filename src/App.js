import "./App.css";
import { GameCarousel } from "./components/GameCarousel";

function App() {
  return (
    <div className="screen">
      <div className="status-bar">
        <div className="player-icon">
          <p className="friends-count">2</p>
          <div className="player-icon-img-container">
            <img
              className="player-icon-img"
              alt="Player Icon"
              src="karin.jpg"
            />
          </div>
        </div>
        <div className="status-info">
          <p>7:32pm</p>
          <i className="fas fa-wifi wifi-icon icon"></i>
          <p>86%</p>
          <i className="fas fa-battery-half battery-icon icon"></i>
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
