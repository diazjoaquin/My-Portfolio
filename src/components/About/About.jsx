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
                <p className={a.description}>I've a curious mind, and great passion and capacity to learn, I'm interested in understand the behavior of all things, to accomplish the better results. I'm a person whit a lot of energy and initiative, and a great capacity to adapt to changes.
    Capable of perform effectively both in group enviroments and in individual enviroments.</p>
    <p className={a.description}>My first contact with programation was about my early adolescence, when I enjoyed
     editing text in forums, using HTML.
    </p>
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

    // Con una mente muy curiosa, y una gran pasión y capacidad para el aprendizaje. Me interesa entender el funcionamiento de las cosas, para así lograr los mejores resultados.
    //       Mi primer contacto con la programación fue durante mi temprana adolesencia, en donde me divertía editanto textos en foros, usando HTML.
    //       Soy una persona con mucha energía e iniciativa. Con una gran capacidad para adaptarme a los cambios. Capaz de desempeñarme de manera efectiva tanto en entornos grupales, como así también en entornos individuales.
