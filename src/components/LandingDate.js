import React from "react";
import Typed from 'typed.js';

const monthNames = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June",
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
];

function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
        return "th";
    }

    switch (day % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
};

// Calculates current date for 'Step back in time' text
const today = new Date();
const date = today.getDate();
const month = monthNames[today.getMonth()];
const daySuffix = getDaySuffix(date);

// Animates the year: '2023 -> 2013'
function TypedAnimation({ strings, typeSpeed }) {

    const dateAnimation = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(dateAnimation.current, {
            strings: strings, 
            typeSpeed: typeSpeed
        });

        return () => {
            typed.destroy();
        };
    },  [strings, typeSpeed]);

    return (
        <span 
            ref={dateAnimation}
            className='animation'
        />
    )
}

function LandingDate() {
    const currentDate = date + daySuffix + " " + month + " "
    const strings = [`${today.getFullYear()}`, `${today.getFullYear() - 10}`];
    const typeSpeed = 100;

    return (
        <h2 className="date">
            {currentDate} 
            <TypedAnimation 
                strings={strings}
                typeSpeed={typeSpeed}
            />
        </h2>
    )
}

export { LandingDate };