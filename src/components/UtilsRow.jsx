import './UtilsRow.css';
import { MessageIcon } from "../icons";
import { faBagShopping, faImage, faGamepad, faGear, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const UtilsRow = () => {
    return <div className='rosso'>
        <div className="util-icon">
            <FontAwesomeIcon className='icon messages' icon={faMessage} />
        </div>
        <div className="util-icon">
            <FontAwesomeIcon className='icon shop' icon={faBagShopping} />
        </div>
        <div className="util-icon">
            <FontAwesomeIcon className='icon gallery' icon={faImage} />
        </div>
        <div className="util-icon">
            <FontAwesomeIcon className='icon' icon={faGamepad} />
        </div>
        <div className="util-icon">
            <FontAwesomeIcon className='icon' icon={faGear} />
        </div>
        <div className="util-icon">
            <FontAwesomeIcon className='icon' icon={faPowerOff} />
        </div>
    </div>
}