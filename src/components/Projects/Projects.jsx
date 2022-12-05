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
                        <h4>Project from Henry Bootcamp: A SPA (Single Page Application) where you can find your favourites pokemons, and create your own pokemons. Technologies used: React.js, Redux, Sequelize, Node.js and PostgreSQL.</h4>
                        <a className={p.icon} href='https://github.com/diazjoaquin/IP-Pokemon'><AiOutlineGithub/></a>
                        <a className={p.icon} href='https://my-pokedex-ip.web.app/'><AiOutlineRightCircle/></a>
                        {/* <a href=''></a> */}
                    </div>
                </div>
                <div className={p.project}>
                    <div className={p.overlay}></div>
                    <img src='1.jpg' alt=''/>
                    <div className={p.info}>
                    <h4>Project Description</h4>                  
                    </div>
                </div>
            </div>
            <div className={p.fila}>
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
            </div>
        </section>
        
    )
}