import { useContext } from 'react';
import { navbar_icon, lightTheme_icon, darkTheme_icon } from '../styles/Constants';
import { ThemeContext } from './ThemeToggle';
import '../styles/Navbar.css';

export function Navbar() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className='navbar'>
            <div className='navbar__container'>
                <h1 className='navbar__title'>
                    {navbar_icon}
                    Retro Net
                </h1>
                <div
                    className='navbar__toggle'
                    onClick={() => toggleTheme()}
                >
                    {theme === "dark-theme" ? (
                        [lightTheme_icon]
                    ) : (
                        [darkTheme_icon]
                    )}
                </div>
            </div>
        </nav>
    )
};