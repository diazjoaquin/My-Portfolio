import React from 'react';
import h from './Home.module.css';
import CV from '../../Díaz Joaquín - Full Stack Web Dev.pdf';
import Nav from '../Nav/Nav.jsx';


export default function Home () {
    return (
    <section className={h.Home}>
        <Nav/>
        <div className={h.presentation}>
            <div className={h.container}>
                <div className={h.text}>
                <p className={h.welcome}>Welcome</p>
                <h2>I'm Joaquín Díaz,<span className={h.full}> Full Stack Web Developer</span></h2></div>
                <img src="dev.svg" className={h.svg} alt='img'/>
            </div>
            <button><a className={h.button} href={CV} download>
                <span className={h.shadow}></span>
                <span className={h.edge}></span>
                <span className={h.front}>Download CV
                </span></a>
            </button>
        </div>
    </section>);
}