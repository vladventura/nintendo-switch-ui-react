import { useState } from "react";

export const useControls = (items = []) => {
    const [itemCount, setItemCount] = useState(items);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [controlActive, setControlActive] = useState(true);
    const toggleControls = () => {
        if (controlActive) {
            setSelectedIndex(-1);
        } else {
            setSelectedIndex(0);
        }
        setControlActive(!controlActive);
    }
    const onKeyDown = (e) => {
        if (controlActive) {
            e.preventDefault();
            if (e.keyCode === 65 && selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
            if (e.keyCode === 68 && selectedIndex < itemCount.length - 1) setSelectedIndex(selectedIndex + 1);
        }
        if (e.keyCode === 67) {
            toggleControls();
            console.log("Pressed the c");
        }
    };

    return [onKeyDown, selectedIndex, setSelectedIndex];
}