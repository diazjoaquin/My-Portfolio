import React from 'react';
import a from './About.module.css';
import Nav from '../Nav/Nav.jsx';
import { Link } from 'react-router-dom';

export default function About () {

    return (
        <section id='about-me' className={a.about}>
            <Nav/>
            
            {/* <div className={a.imgcont}>
                <img src='photoRoom.png' alt=''/>
            </div> */}
            <div className={a.aboutme}>
                <p className={a.title}>About Me</p>
                <p className={a.description}>I've a curious mind, and great passion and capacity to learn, I'm interested in understand the behavior of everything, to accomplish the better results. I'm a person whit a lot of energy and initiative, and a great capacity to adapt to changes.
                Capable of perform effectively both in group enviroments and in individual enviroments.</p>
                <p className={a.description}>I´ve strong experience in front-end development using technologies such as React,
                as well as back-end development using Node.js. I have also worked with databases
                like MongoDB and PostgreSQL to build full-stack applications.
                </p>
                <p className={a.description}>As a Full Stack Web Developer, I am excited about the opportunity to work with a company that values
                innovation and creativity in technology, in wich I can improve my programming skills and knowledge.</p>
        <Link to={'/projects'}>
            <button>
                <span className={a.label}>My projects</span>
                <span className={a.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                </span>
            </button>
        </Link>
            </div>
        </section>
    )
}