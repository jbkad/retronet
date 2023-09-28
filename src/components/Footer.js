import { ReactComponent as ScrollIcon } from '../assests/ScrollIcon.svg';
import '../styles/Footer.css';

export function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            delay: 0
        })
    };

    return (
        <footer className='footer'>
            <div className='container'>
                <h3 
                    className='note'
                >
                    <a
                        href="https://www.linkedin.com/in/jbkad/"
                        target='_blank' 
                        rel="noreferrer"
                    >
                        Made by Joyce Kadibu
                    </a>
                </h3>
                <div 
                    className='scroll'
                    data-testid='footer__scroll-btn'
                    onClick={() => {
                        scrollToTop(); 
                    }}
                >
                    <ScrollIcon />
                </div>
            </div>
        </footer>
    )
};