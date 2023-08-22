import { LandingDate } from '../components/LandingDate';
import { handleButtonClick } from '../utils/buttonClickHandler';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { Buttons } from '../components/Buttons';
import '../styles/Landing.css';

export function Landing() {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            const timeout = setTimeout(() => {
                setIsLoading(false);
            }, 10000);
            
            return () => clearTimeout(timeout);
        }
    }, [isLoading]);

    return (
        <nav className='landing'>
            {isLoading && <Loading />}
            <div className='landing__container'>
                <h3 className='landing__header'>
                    Step back in time to <LandingDate />
                </h3>
                <p className='landing__description'>
                    Welcome to <bold>Retro Net</bold>, your ultimate time-travel portal to the digital past! Witness the pixelated charm, forgotten designs, and web trends that once defined the online landscape. Relive the nostalgia by shooting <bold>10 years back</bold> through a click of a button.
                </p>
                <Buttons handleButtonClick={(url) => handleButtonClick(url, setIsLoading)} />
            </div>
        </nav>
    )
};