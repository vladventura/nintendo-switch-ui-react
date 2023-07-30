import "./BottomBar.css";
import { NintendoSwitch } from "../icons"

export const BottomBar = () => {
    return <div className="bottom-bar">
        <hr />
        <div className="under-line-container">
            <NintendoSwitch className="nintendo-switch-icon" />
            <div className="console-button">
                <p className="console-button-shape">
                    +
                </p>
                <p className="console-button-text">
                    Options
                </p>
            </div>
            <div className="console-button">
                <p className="console-button-shape">
                    A
                </p>
                <p className="console-button-text">
                    Confirm
                </p>
            </div>
        </div>
    </div>
}