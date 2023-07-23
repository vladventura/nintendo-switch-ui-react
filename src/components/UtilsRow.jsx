import './UtilsRow.css';
import { MessageIcon } from "../icons";
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const UtilsRow = () => {
    return <div className='rosso'>
        <div className="util-icon">
            <MessageIcon className="icon" />
        </div>
        <div className="util-icon">
            <FontAwesomeIcon className='icon' icon={faMessage} />
        </div>
    </div>
}