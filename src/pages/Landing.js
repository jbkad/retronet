import { LandingDate } from '../components/LandingDate';
import { fetchArchiveData } from '../components/FetchData';
import { useEffect, useState } from 'react';
import '../styles/Landing.css';
import { Loading } from '../components/Loading';

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
                        <div 
                            className="youtube-btn block" 
                            onClick={() => handleButtonClick('http://www.youtube.com')}
                        >
                            YouTube
                        </div>
                        <div 
                            className="reddit-btn block" 
                            onClick={() => handleButtonClick('http://www.reddit.com')}
                        >
                            Reddit
                        </div>
                        <div 
                            class="bloomberg-btn block" 
                            onClick={() => handleButtonClick('http://www.bloomberg.com')}
                        >
                            Bloomberg
                        </div>
                        <div 
                            className="wikipedia-btn block" 
                            onClick={() => handleButtonClick('http://en.wikipedia.org/wiki/Main_Page')}
                        >
                            Wikipedia
                        </div>
                    </div>
                    <div className='column'>
                        <div 
                            class="yahoo-btn block" 
                            onClick={() => handleButtonClick('http://www.yahoo.com')}
                        >
                            Yahoo
                        </div>
                        <div 
                            class="airbnb-btn block" 
                            onClick={() => handleButtonClick('http://www.airbnb.com')}
                        >
                            Airbnb
                        </div>
                        <div 
                            class="buzzfeed-btn block" 
                            onClick={() => handleButtonClick('http://www.buzzfeed.com')}
                        >
                            Buzzfeed
                        </div>
                        <div 
                            class="linkedin-btn block" 
                            onClick={() => handleButtonClick('http://www.linkedin.com')}
                        >
                            LinkedIn
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};