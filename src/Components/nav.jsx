import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb as lightbulb } from '@fortawesome/free-regular-svg-icons'
import { faLightbulb as darkbulb } from '@fortawesome/free-solid-svg-icons'
const themes = [
    "Light",
    "Dark",
]
const Nav = ({ changeSectionClassName }) => {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme && themes.includes(storedTheme) ? storedTheme : "Light";
    });
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme && themes.includes(storedTheme)) {
            setTheme(storedTheme);
        }
    }, [theme]);

    const toggleTheme = () => {
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        const nextTheme = themes[nextIndex];
        localStorage.setItem('theme', nextTheme);
        setTheme(nextTheme);
        changeSectionClassName(nextTheme);
    };

    useEffect(() => {
        changeSectionClassName(theme);
    }, [theme, changeSectionClassName]);
    return (
        <div className='nav'>
            <div className="logo">Blogs.</div>
            <div className="link">
                <ul>
                    <Link to="/">Home</Link>
                    <li><a href="https://precisegoals.pages.dev/">Portfolio</a></li>
                    <li><a href="https://radium.pages.dev/">Radium</a></li>
                    <li>
                        <button className='switch'>
                            <a href="/" className='switch' onClick={(e) => { e.preventDefault(); toggleTheme(); }}>
                                {theme === 'Light' ? (
                                    <>
                                        Light <FontAwesomeIcon icon={lightbulb} />
                                    </>
                                ) : (
                                    <>
                                        Dark <FontAwesomeIcon icon={darkbulb} />
                                    </>
                                )}
                            </a>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
