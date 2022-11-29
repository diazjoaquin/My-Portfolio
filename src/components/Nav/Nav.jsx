import React from 'react';
import x from './Nav.module.css';
import { AiFillLinkedin, AiOutlineBars, AiOutlineGithub } from 'react-icons/ai';
import { useState } from 'react';



export default function Nav ({onClick}) {

    const [activeNav, setActiveNav] = useState('#')


    return (
        <div className={x.header}>
            <nav className={x.nav}>
                <ul>
                    <li><a href='#home' className={activeNav === '#home' ? 'active' : ''} onClick={() => setActiveNav('#home')}>HOME</a></li>
                    <li><a href='#about-me' className={activeNav === '#about-me' ? 'active' : ''} onClick={() => setActiveNav('#about-me')}>ABOUT ME</a></li>
                    <li><a href='#technologies' className={activeNav === '#technologies' ? 'active' : ''} onClick={() => setActiveNav('#technologies')}>TECHNOLOGIES</a></li>
                    <li><a href='#projects' className={activeNav === '#projects' ? 'active' : ''} onClick={() => setActiveNav('#projects')}>PROJECTS</a></li>
                    <li><a href='https://www.linkedin.com/in/joaqu%C3%ADn-d%C3%ADaz-b004b31a7/'>CONTACT ME</a></li>
                </ul>
            <div className={x.redes}>
                <a className={x.icon} href='https://www.linkedin.com/in/joaqu%C3%ADn-d%C3%ADaz-b004b31a7/'><AiFillLinkedin/></a>
                <a className={x.icon} href='https://github.com/diazjoaquin'><AiOutlineGithub/></a>
            </div>
            </nav>
        </div>
    )
}