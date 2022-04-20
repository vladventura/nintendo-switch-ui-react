import './Battery.css';
import React, { useState, useEffect } from 'react';
import { BatteryEmpty, BatteryQuarter, BatteryHalf, BatteryThreeQuarters, BatteryFull } from "../icons";

export const Battery = () => {
    const [batteryPercentage, setBatteryPercentage] = useState("");
    const [batteryIcon, setBatteryIcon] = useState("");

    const handleBattery = (BatteryManager) => {
        const percent = Math.floor(BatteryManager.level * 100);
        if (percent > 75) setBatteryIcon("battery-full");
        else if (percent <= 75 && percent > 50) setBatteryIcon("battery-three-quarters");
        else if (percent <= 50 && percent > 21) setBatteryIcon("battery-half");
        else if (percent <= 21 && percent > 5) setBatteryIcon("battery-quarter");
        else setBatteryIcon("battery-empty");
        setBatteryPercentage(percent);
    };

    useEffect(() => {
        const hasBatteryInNavigator = 'getBattery' in navigator;
        if (hasBatteryInNavigator) {
            navigator.getBattery().then(BatteryManager => {
                handleBattery(BatteryManager);
                BatteryManager.addEventListener('levelchange', (ev) => handleBattery(BatteryManager));
            });
        } else handleBattery({ level: 1 });
    }, []);

    const getIcon = () => {
        switch (batteryIcon) {
            case "battery-empty": return <BatteryEmpty className="battery-icon" />
            case "battery-quarter": return <BatteryQuarter className="battery-icon" />
            case "battery-half": return <BatteryHalf className="battery-icon" />;
            case "battery-three-quarters": return <BatteryThreeQuarters className="battery-icon" />
            case "battery-full":
            default:
                return <BatteryFull className="battery-icon" />
        }
    };

    return <>
    <p className="battery-percentage">{batteryPercentage}%</p>
    {getIcon()}
    </>;

}