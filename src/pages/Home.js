import { LandingDate } from '../components/LandingDate';
import { handleButtonClick } from '../utils/buttonClickHandler';
import { useEffect, useState } from 'react';
import { Loading } from './Loading';
import { Buttons } from '../components/Buttons';
import '../styles/Home.css';

export function Home() {

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
        <nav className='home'>
            {isLoading && <Loading />}
            <div className='container'>
                <div className='header'>
                    Step back in time to <LandingDate />
                </div>
                <p className='description'>
                    Welcome to <strong>Retro Net</strong>, your ultimate time-travel portal to the digital past! Witness the pixelated charm, forgotten designs, and web trends that once defined the online landscape. Relive the nostalgia by shooting <strong>10 years back</strong> through a click of a button.
                </p>
                <p className='note'>
                    (Please ensure that popup windows are enabled in your browser!)
                </p>
                <Buttons handleButtonClick={(url) => handleButtonClick(url, setIsLoading)} />
            </div>
        </nav>
    )
};