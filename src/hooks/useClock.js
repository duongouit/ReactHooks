import React, { useState, useEffect } from 'react';

function formatDate(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours} : ${minutes} : ${seconds}`;
}
export function useClock() {
    const [timeString,setTimeString] = useState('');
    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            const format = formatDate(now);
            setTimeString(format);
        }, 1000);
        return () => {
            clearInterval(clockInterval);
        }
    }, []);
    return {timeString};
}
