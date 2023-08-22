import { scroll_icon } from '../styles/Constants';
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
            <div className='footer__container'>
                <h3 
                    className='footer__note'
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
                    className='footer__scroll-btn'
                    data-testid='footer__scroll-btn'
                    onClick={() => {
                        scrollToTop(); 
                    }}
                >
                    {scroll_icon}
                </div>
            </div>
        </footer>
    )
};