import { useState } from "react";

export const useControls = (itemCount = 0) => {
    const [memoryIndex, setMemoryIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [controlActive, setControlActive] = useState(true);

    const activate = () => {
        setSelectedIndex(memoryIndex);
        console.log("Called");
    }

    const deactivate = () => {
        setMemoryIndex(selectedIndex);
        setSelectedIndex(-1);
        console.log("Called");
    }

    const onKeyDown = (e) => {
        if (controlActive) {
            e.preventDefault();
            if (e.keyCode === 65 && selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
            if (e.keyCode === 68 && selectedIndex < itemCount - 1) setSelectedIndex(selectedIndex + 1);
        }
        if (e.keyCode === 67) {
            console.log("Pressed the c");
        }
    };

    return [onKeyDown, selectedIndex, setSelectedIndex, activate, deactivate, controlActive];
}