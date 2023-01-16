import React from 'react';
import Nav from '../Nav/Nav';
import p from './Projects.module.css';
import { AiOutlineGithub, AiOutlineRightCircle } from "react-icons/ai";

export default function Projects () {
    return (
        <section id='projects' className={p.projects}>
            <Nav/>
            <h3 className={p.title}>MY PROJECTS</h3>
            <div className={p.fila}>
                <div className={p.project}>
                    <div className={p.overlay}></div>
                    <img src='pokemon.png' alt=''/>
                    <div className={p.info}>
                        <h4>Web application based on a Pokémon topic where the user can search for their
                        favorite pokemons; it has features such as the creation of a personalized pokemon.
                        The following technologies were used: JavaScript, React.js, Redux, CSS, HTML,
                        Node.js, Sequelize, PostgreSQL, Express.js</h4>
                        <a className={p.icon} href='https://github.com/diazjoaquin/IP-Pokemon'><AiOutlineGithub/></a>
                        <a className={p.icon} href='https://my-pokedex-ip.web.app/'><AiOutlineRightCircle/></a>
                    </div>
                </div>
                <div className={p.project}>
                    <div className={p.overlay}></div>
                    <img src='easylearning.png' alt=''/>
                    <div className={p.info}>
                        <h4>E-learning is a platform where the user can buy, create and sell their own courses.
                        The following technologies were used: JavaScript, React.js, Redux, Node.js,
                        PostgreSQL, Sequelize, Express.js, Chakra UI.
                        </h4>
                        <a className={p.icon} href='https://github.com/diazjoaquin/EasyLearning-FP'><AiOutlineGithub/></a>
                        <a className={p.icon} href='https://easylearning-fp.web.app/'><AiOutlineRightCircle/></a>         
                    </div>
                </div>
            </div>
            {/* <div className={p.fila}>
                <div className={p.project}>
                    <div className={p.overlay}></div>
                    <img src='1.jpg' alt=''/>
                    <div className={p.info}>
                    <h4>Project Description</h4>
                    </div>
                </div>
                <div className={p.project}>
                    <div className={p.overlay}></div>
                    <img src='1.jpg' alt=''/>
                    <div className={p.info}>
                    <h4>Project Description</h4>
                    </div>
                </div>
            </div> */}
        </section>
        
    )
}