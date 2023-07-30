import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

export const Clock = () => {
    const [timeString, setTimeString] = useState(DateTime.local().toFormat("hh:mma").toLowerCase());
    const [updateTimeInterval, setUpdateTimeInterval] = useState(null);

    useEffect(() => {
        if (updateTimeInterval === null) {
            const int = setInterval(() => {
                const localTime = DateTime.local();
                setTimeString(localTime.toFormat("hh:mma").toLowerCase());
            }, 1000);
            setUpdateTimeInterval(int);
        }
        return () => {
            clearInterval(updateTimeInterval);
        };
    }, [updateTimeInterval]);

    return <p>{timeString}</p>
}