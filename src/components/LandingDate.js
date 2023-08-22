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

// Calculates current year for typing text
const currentYear = today.getFullYear();
const yearTenYearsAgo = today.getFullYear() - 10;

// Animates the year: '2023 -> 2013'
function TypedAnimation() {

    const dateAnimation = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(dateAnimation.current, {
            strings: [`${currentYear}`, `${yearTenYearsAgo}`], 
            typeSpeed: 100
        });

        return () => {
            typed.destroy();
        };
    },  []);

    return (
        
        <span 
            ref={dateAnimation}
            className='landing__date-animation'
        />
    )
}

function LandingDate() {
    const currentDate = date + daySuffix + " " + month + " "

    return (
        <h2 className="landing__date">
            {currentDate} <TypedAnimation />
        </h2>
    )
}



export { LandingDate };