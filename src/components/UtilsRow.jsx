import './UtilsRow.css';
import { MessageIcon } from "../icons";
import { faBagShopping, faImage, faGamepad, faGear, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const icons = [
    ["messages", faMessage],
    ["shop", faBagShopping],
    ["gallery", faImage],
    ["", faGamepad],
    ["", faGear],
    ["", faPowerOff],
];


export const UtilsRow = () => {
    return <div className='rosso'>
        {icons.map((i, n) => 
        <div className="util-icon">
            <FontAwesomeIcon key={"icon"+n} className={`icon ${i[0]}`} icon={i[1]} />
        </div>
        )}
    </div>
}