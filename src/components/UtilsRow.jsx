import './UtilsRow.css';
import { faBagShopping, faImage, faGamepad, faGear, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { Util } from './Util';
import { useControls } from '../hooks/controls';
import { useContext, useEffect } from 'react';
import { InputContext } from '../context/inputContext';

const activeSetIndex = 1;

const icons = [
    ["messages", faMessage],
    ["shop", faBagShopping],
    ["gallery", faImage],
    ["", faGamepad],
    ["", faGear],
    ["", faPowerOff],
];


export const UtilsRow = () => {
    const context = useContext(InputContext);
    const activeSet = context.state.activeSet;
    const [onKeyDown, selectedIndex, setSelectedIndex, activate, deactivate] = useControls(icons.length);

    useEffect(() => {
        if (activeSet === activeSetIndex) {
            activate();
        } else {
            deactivate();
        }
    }, [activeSet]);

    return <div
        onKeyDown={onKeyDown}
        onScroll={(e) => e.preventDefault()}
        onScrollCapture={(e) => e.preventDefault()}
        onClick={(e) => e.preventDefault()}
        className='utils-row'>
        {icons.map((i, index) =>
            <Util
                key={"util" + index}
                iconClass={i[0]}
                faIcon={i[1]}
                onClick={() => setSelectedIndex(index)}
                tabIndex={index}
                active={selectedIndex === index}
            />
        )}
    </div>
}