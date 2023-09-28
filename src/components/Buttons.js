import '../styles/Buttons.css';

export function Buttons({ handleButtonClick }) {
    return (
        <div className='buttons'>
            <div className='column'>
                <button 
                    type="button"
                    className="youtube" 
                    onClick={() => handleButtonClick('https://www.youtube.com')}
                >
                    YouTube
                </button>
                <button 
                    type="button"
                    className="reddit" 
                    onClick={() => handleButtonClick('https://www.reddit.com')}
                >
                    Reddit
                </button>
                <button 
                    type="button"
                    className="bloomberg" 
                    onClick={() => handleButtonClick('https://www.bloomberg.com')}
                >
                    Bloomberg
                </button>
                <button 
                    type="button"
                    className="wikipedia" 
                    onClick={() => handleButtonClick('https://en.wikipedia.org/wiki/Main_Page')}
                >
                    Wikipedia
                </button>
            </div>
            <div className='column'>
                <button 
                    type="button"
                    className="yahoo" 
                    onClick={() => handleButtonClick('https://www.yahoo.com')}
                >
                    Yahoo
                </button>
                <button 
                    type="button"
                    className="airbnb" 
                    onClick={() => handleButtonClick('https://www.airbnb.com')}
                >
                    Airbnb
                </button>
                <button 
                    type="button"
                    className="buzzfeed" 
                    onClick={() => handleButtonClick('https://www.buzzfeed.com')}
                >
                    Buzzfeed
                </button>
                <button 
                    type="button"
                    className="linkedin" 
                    onClick={() => handleButtonClick('https://www.linkedin.com')}
                >
                    LinkedIn
                </button>
            </div>
        </div>
    )
};