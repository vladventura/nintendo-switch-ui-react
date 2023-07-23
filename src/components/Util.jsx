import { useEffect, useRef } from 'react';
import './Util.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Util = ({ iconClass, faIcon, active, tabIndex, onClick }) => {
    let utilRef = useRef(null);

    useEffect(() => {
        if (utilRef.current && active) {
            utilRef.current.focus();
        } else utilRef.current.blur();
    }, [active]);

    const onFocus = (e) => {
        e?.preventDefault();
        onClick?.();
        utilRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
    }

    return <div 
            className={`util-icon${active ? " active " : ""}`}
            onClick={(e) => e.preventDefault()}
            tabIndex={tabIndex}
            ref={utilRef}
            onFocus={onFocus}
        >
        <FontAwesomeIcon className={`icon ${iconClass}`} icon={faIcon} />
    </div>
};
