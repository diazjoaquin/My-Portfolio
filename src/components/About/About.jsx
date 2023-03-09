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
                Capable of perform effectively both in group enviroments and in individual enviroments.
                <br />
                I´ve strong experience in front-end development using technologies such as React,
                as well as back-end development using Node.js. I have also worked with databases
                like MongoDB and PostgreSQL to build full-stack applications.
                <br />
                As a Full Stack Web Developer, I am excited about the opportunity to work with a company that values
                innovation and creativity in technology, in wich I can improve my programming skills and knowledge.</p>
                <p className={a.description}>I am graduated from Henry Bootcamp as a Full Stack Web Developer. 
                During the course, I learned and developed skills in technologies such as: Javascript, Typescript, React, Node.js, SQL, Express, and more. I am currently working on personal projects, in which I seek to improve my programming skills, as well as learn new technologies (such Angular, Vue.js, and MongoDB), which allow me archieve the professional profile in that I want to develop myself in the future.
                <br />
                Prior to this, I studied during for years a Bachelor of Biological Sciences, at the University of Buenos Aires. During the career, I studied subjects such as Mathematics, Physics and Algebra, which allowed me to develop the logical thinking necessary to be a good programmer.
                <br />
                During my adolescence, I studied English at Buckingham English Institute, in Buenos Aires, for five years. Currently, I am dedicated to improving this language in a self-taught way.</p>
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