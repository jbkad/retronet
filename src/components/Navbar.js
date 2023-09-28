import { useContext } from 'react';
import { ReactComponent as MenuIcon } from '../assests/MenuIcon.svg';
import { ReactComponent as LightThemeIcon } from '../assests/LightThemeIcon.svg';
import { ReactComponent as DarkThemeIcon } from '../assests/DarkThemeIcon.svg';
import { ThemeContext } from './ThemeToggle';
import '../styles/Navbar.css';

export function Navbar() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className='navbar'>
            <div className='container'>
                <h1 className='title'>
                    <MenuIcon />
                    Retro Net
                </h1>
                <div
                    className='toggle'
                    onClick={() => toggleTheme()}
                >
                    {theme === "dark-theme" ? (
                        <LightThemeIcon />
                    ) : (
                        <DarkThemeIcon />
                    )}
                </div>
            </div>
        </nav>
    )
};