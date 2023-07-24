import { useState } from "react";

export const useControls = (itemCount = 0) => {
    const [memoryIndex, setMemoryIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const activate = () => {
        setSelectedIndex(memoryIndex);
    }

    const deactivate = () => {
        setMemoryIndex(selectedIndex);
        setSelectedIndex(-1);
    }

    const onKeyDown = (e) => {
        e.preventDefault();
        if (e.keyCode === 65 && selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
        if (e.keyCode === 68 && selectedIndex < itemCount - 1) setSelectedIndex(selectedIndex + 1);
    };

    return [onKeyDown, selectedIndex, setSelectedIndex, activate, deactivate];
}