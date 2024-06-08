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

// Calculates current date
const today = new Date();
const date = today.getDate();
const month = monthNames[today.getMonth()];
const daySuffix = getDaySuffix(date);

// Animates year
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
            className="text-highlight font-jaro"
        />
    )
}

function LandingDate() {
    const currentDate = date + daySuffix + " " + month + " "
    const strings = [`${today.getFullYear()}`, `${today.getFullYear() - 10}`];
    const typeSpeed = 100;

    return (
        <h2 className="font-jaro text-primary text-3xl p-0 mt-4">
            {currentDate} 
            <TypedAnimation 
                strings={strings}
                typeSpeed={typeSpeed}
            />
        </h2>
    )
}

export default LandingDate;