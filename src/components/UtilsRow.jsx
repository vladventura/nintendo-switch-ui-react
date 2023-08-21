import './UtilsRow.css';
import { faBagShopping, faImage, faGamepad, faGear, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { Util } from './Util';
import { useControls } from '../hooks/controls';
import { useContext } from 'react';
import { InputContext } from '../context/inputContext';

const activeSetIndex = 1;

const icons = [
    ["messages", faMessage, "News"],
    ["shop", faBagShopping, "Nintendo Shop"],
    ["gallery", faImage, "Gallery"],
    ["common", faGamepad, "Controllers"],
    ["common", faGear, "Settings"],
    ["common", faPowerOff, "Power"],
];


export const UtilsRow = () => {
    const {activeSet} = useContext(InputContext);
    const [onKeyDown, selectedIndex, setSelectedIndex] = useControls(icons.length);

    return <div className='utils-row-container'>
        <div
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
                active={selectedIndex === index && activeSet === activeSetIndex}
                utilName={i[2]}
            />
        )}
    </div>
    </div>
}