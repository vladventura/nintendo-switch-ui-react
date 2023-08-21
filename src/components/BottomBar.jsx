import "./BottomBar.css";
import { NintendoSwitch } from "../icons"

export const BottomBar = () => {
    return <div>
        <hr />
        <div className="under-line-container">
            <NintendoSwitch className="nintendo-switch-icon" />
            <div className="console-button">
                <div className="console-button-shape">
                    <p>+</p>
                </div>
                <p className="console-button-text">
                    Options
                </p>
            </div>
            <div className="console-button">
                <div className="console-button-shape">
                    <p>A</p>
                </div>
                <p className="console-button-text">
                    Confirm
                </p>
            </div>
        </div>
    </div>
}