import React from "react";
// import { Link } from "react-router-dom";
import '../styles/Popup.css';

export function Popup({ setShowPopup }) {

    const handleButtonClick = (choice) => {
        if (choice === 'yes') {
            // window.location.href = 'https://www.youtube.com';
        } else {
            setShowPopup(false);
        }
    }

    return (
        <div className="popup">
            <h1>Uh oh!</h1>
            <p className="text">Unfortunately, no data from <strong>this website</strong> was captured <strong>on this date.</strong> Wanna visit another day instead? </p>
            <div className="button">
                <button 
                    type="button"
                    className="yes" 
                    onClick={() => handleButtonClick('yes')}
                >
                    Yes!
                </button>
                <button 
                    type="button"
                    className="no" 
                    onClick={() => handleButtonClick('no')}
                >
                    No, I'll return to the homepage
                </button>
            </div>
        </div>
    )
}
