import React from 'react';
import x from './Nav.module.css';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

// AiOutlineBars



export default function Nav () {

    


    return (
        <div className={x.header}>
            <nav className={x.nav}>
                <ul>
                    <Link to={'/'}>
                    <li>HOME</li></Link>
                    <Link to={'/about'}>
                    <li>ABOUT ME</li></Link>
                    <Link to={'/technologies'}>
                    <li>TECHNOLOGIES</li></Link>
                    <Link to={'/projects'}>
                    <li>PROJECTS</li></Link>
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