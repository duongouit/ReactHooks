import React, { useState } from 'react';
import './ColorBox.css';
function RanDomColor() {
    const color = ['red','black','green','blue'];
    const randomIndex = Math.trunc(Math.random() * 4);
    return color[randomIndex];
}
function ColorBox() {
    const [color, setColor] = useState(()=> {
        const initColor = localStorage.getItem("box") || 'red';
        console.log(initColor);
        return initColor;
    });
    function handleBoxClick() {
        const getColor = RanDomColor();
        setColor(getColor);
        localStorage.setItem("box",getColor);
    }
    return (
        <div className="rectangle" style={{backgroundColor: color}} onClick={handleBoxClick}>
        </div>
    );
}

export default ColorBox;