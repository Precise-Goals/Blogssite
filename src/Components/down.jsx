import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { faGithub, faInstagram, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import '../App.css'

export const Footer = () => {
    return (
        <div className="footer">
            <h1 className='logo'>Blogs.</h1>
            <p>Hi, My name is Sarthak. Sometimes I create Blog and Share my thoughts and actual research on it.I like to Code, Write, Create and solve Pyqs. Some more Content By me enlisted Below</p>
            <div className="links">
                <ul>
                    <li>
                        Official Site : <a href="https://precisegoals.pages.dev">Precise Goals</a>
                    </li>
                    <li>
                        Radium App : <a href="https://radium.pages.dev/">Radium App</a>
                    </li>
                </ul>
            </div>
            <div className="socials">
                <ul>
                    <li>
                        <a href="https://www.instagram.com/precisegoals.in/"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li>
                    <li>
                        <a href="https://precisegoals.pages.dev/"><FontAwesomeIcon icon={faUser} /></a>
                    </li>
                    <li>
                        <a href="https://github.com/Precise-Goals"><FontAwesomeIcon icon={faGithub} /></a>
                    </li>
                    <li>
                        <a href="https://open.spotify.com/user/31s4ssb5ucxgvzm6qonffom5aagm?si=b9a3cd369717458b"><FontAwesomeIcon icon={faSpotify} /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/sarthak-tulsidas-patil-11914b24a/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                </ul>
            </div>
            <p className='copyright'>Written and Created by Sarthak - 2023</p>
        </div>
    )
}
