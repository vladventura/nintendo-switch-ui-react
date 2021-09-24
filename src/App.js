import "./App.css";
import { useState, useEffect } from "react";
import { GameCarousel } from "./components/GameCarousel";
import {
  BatteryEmpty,
  BatteryQuarter,
  BatteryHalf,
  BatteryThreeQuarters,
  BatteryFull,
} from "./icons";
import profilePic from "./assets/karin.jpg";
import { useDate } from "./hooks/useDate";

function App() {
  const [batteryPercentage, setBatteryPercentage] = useState("");
  const [batteryIcon, setBatteryIcon] = useState("");
  const { timeString } = useDate();

  const getBatteryIcon = () => {
    switch (batteryIcon) {
      case "battery-empty":
        return <BatteryEmpty className="battery-icon" />;
      case "battery-quarter":
        return <BatteryQuarter className="battery-icon" />;
      case "battery-half":
        return <BatteryHalf className="battery-icon" />;
      case "battery-three-quarters":
        return <BatteryThreeQuarters className="battery-icon" />;
      case "battery-full":
      default:
        return <BatteryFull className="battery-icon" />;
    }
  };

  const handleBattery = (BatteryManager) => {
    let percentage = Math.floor(BatteryManager.level * 100);

    if (percentage > 75) {
      setBatteryIcon("battery-full");
    } else if (percentage <= 75 && percentage > 50) {
      setBatteryIcon("battery-three-quarters");
    } else if (percentage <= 50 && percentage > 21) {
      setBatteryIcon("battery-half");
    } else if (percentage <= 21 && percentage > 5) {
      setBatteryIcon("battery-quarter");
    } else {
      setBatteryIcon("battery-empty");
    }
    setBatteryPercentage(percentage);
  };

  useEffect(() => {
    let hasBatteryInNavigator = "getBattery" in navigator;
    if (hasBatteryInNavigator) {
      let bmPromise = navigator.getBattery();
      bmPromise.then((BatteryManager) => {
        handleBattery(BatteryManager);
        BatteryManager.addEventListener("levelchange", (ev) => {
          handleBattery(BatteryManager);
        });
      });
    } else {
      handleBattery(100);
    }
  }, []);

  return (
    <div className="screen">
      <div className="status-bar">
        <div className="player-icon">
          <p className="friends-count">2</p>
          <div className="player-icon-img-container">
            <img
              className="player-icon-img"
              alt="Player Icon"
              src={profilePic}
            />
          </div>
        </div>
        <div className="status-info">
          <p>{timeString}</p>
          <i className="fas fa-wifi wifi-icon icon"></i>
          <p>{batteryPercentage}%</p>
          {getBatteryIcon()}
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
