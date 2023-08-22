import { LandingDate } from '../components/LandingDate';
import { fetchArchiveData } from '../components/FetchData';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import '../styles/Landing.css';

export function Landing() {

    const [isLoading, setIsLoading] = useState(false);

    const today = new Date();

    function handleButtonClick(websiteUrl) {
        setIsLoading(true);

        const archivedUrlPromise = fetchArchiveData(websiteUrl, today);

        archivedUrlPromise.then(archivedUrl => {
            if (archivedUrl) {
                window.open(archivedUrl, '_blank');
            }   else {
                console.log(`Sorry! We don't have website data for $(url) for this specific date.`);
            }
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    useEffect(() => {
        if (!isLoading) {
            const timeout = setTimeout(() => {
                setIsLoading(false);
            }, 10);
            
            return () => clearTimeout(timeout);
        }
    }, [isLoading]);

    return (
        <nav className='landing'>
            {isLoading && <Loading />}
            <div className='landing__container'>
                <h3 className='landing__header'>
                    Step back in time to
                    <LandingDate />
                </h3>
                <p className='landing__body'>
                    Welcome to <bold>Retro Net</bold>, your ultimate time-travel portal to the digital past! Witness the pixelated charm, forgotten designs, and web trends that once defined the online landscape. Relive the nostalgia by shooting <bold>10 years back</bold> through a click of a button.
                </p>
                <div className='landing__websites'>
                    <div className='column'>
                        <button 
                            className="youtube-btn block" 
                            onClick={() => handleButtonClick('http://www.youtube.com')}
                        >
                            YouTube
                        </button>
                        <button 
                            className="reddit-btn block" 
                            onClick={() => handleButtonClick('http://www.reddit.com')}
                        >
                            Reddit
                        </button>
                        <button 
                            class="bloomberg-btn block" 
                            onClick={() => handleButtonClick('http://www.bloomberg.com')}
                        >
                            Bloomberg
                        </button>
                        <button 
                            className="wikipedia-btn block" 
                            onClick={() => handleButtonClick('http://en.wikipedia.org/wiki/Main_Page')}
                        >
                            Wikipedia
                        </button>
                    </div>
                    <div className='column'>
                        <button 
                            class="yahoo-btn block" 
                            onClick={() => handleButtonClick('http://www.yahoo.com')}
                        >
                            Yahoo
                        </button>
                        <button 
                            class="airbnb-btn block" 
                            onClick={() => handleButtonClick('http://www.airbnb.com')}
                        >
                            Airbnb
                        </button>
                        <button 
                            class="buzzfeed-btn block" 
                            onClick={() => handleButtonClick('http://www.buzzfeed.com')}
                        >
                            Buzzfeed
                        </button>
                        <button 
                            class="linkedin-btn block" 
                            onClick={() => handleButtonClick('http://www.linkedin.com')}
                        >
                            LinkedIn
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
};