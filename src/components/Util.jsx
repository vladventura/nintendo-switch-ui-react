import { useEffect, useRef } from 'react';
import './Util.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Util = ({ iconClass, faIcon, active, tabIndex, onClick, utilName }) => {
    let utilRef = useRef(null);

    useEffect(() => {
        if (utilRef.current && active) {
            utilRef.current.focus();
        } else utilRef.current.blur();
    }, [active]);

    const onFocus = (e) => {
        e?.preventDefault();
        onClick?.();
    }

    return <div className='util-container'>
        <div
            className={`util-icon${active ? " active " : ""}`}
            onClick={(e) => e.preventDefault()}
            tabIndex={tabIndex}
            ref={utilRef}
            onFocus={onFocus}
        >
            <FontAwesomeIcon className={`icon ${iconClass}`} icon={faIcon} />
        </div>
        <div className="util-name-container">
            {active && <span className="util-name">{utilName}</span>}
        </div>
    </div>
};
