import '../styles/Buttons.css';

export function Buttons({ handleButtonClick }) {
    return (
        <div className='buttons-container'>
            <div className='buttons-column'>
                <button 
                    type="button"
                    className="youtube button" 
                    onClick={() => handleButtonClick('https://www.youtube.com')}
                >
                    YouTube
                </button>
                <button 
                    type="button"
                    className="reddit button" 
                    onClick={() => handleButtonClick('https://www.reddit.com')}
                >
                    Reddit
                </button>
                <button 
                    type="button"
                    className="bloomberg button" 
                    onClick={() => handleButtonClick('https://www.bloomberg.com')}
                >
                    Bloomberg
                </button>
                <button 
                    type="button"
                    className="wikipedia button" 
                    onClick={() => handleButtonClick('https://en.wikipedia.org/wiki/Main_Page')}
                >
                    Wikipedia
                </button>
            </div>
            <div className='buttons-column'>
                <button 
                    type="button"
                    className="yahoo button" 
                    onClick={() => handleButtonClick('https://www.yahoo.com')}
                >
                    Yahoo
                </button>
                <button 
                    type="button"
                    className="airbnb button" 
                    onClick={() => handleButtonClick('https://www.airbnb.com')}
                >
                    Airbnb
                </button>
                <button 
                    type="button"
                    className="buzzfeed button" 
                    onClick={() => handleButtonClick('https://www.buzzfeed.com')}
                >
                    Buzzfeed
                </button>
                <button 
                    type="button"
                    className="linkedin button" 
                    onClick={() => handleButtonClick('https://www.linkedin.com')}
                >
                    LinkedIn
                </button>
            </div>
        </div>
    )
};