import React from 'react';
import Nav from '../Nav/Nav';
import p from './Projects.module.css';
import { AiOutlineGithub, AiOutlineRightCircle } from "react-icons/ai";

export default function Projects () {
    return (
        <section id='projects' className={p.projects}>
            <Nav/>
            <div className="container">
                <h3 className={p.title}>MY PROJECTS</h3>
                <div className={p.fila}>
                <div className={p.project}>
                        <div className={p.overlay}></div>
                        <img src='netflix.png' alt=''/>
                        <div className={p.info}>
                            <h4>A Netflix clone (currently on development). 
                            The primary goal was to create a user experience similar to Netflix, enabling users to sign up,
                            search for and play movies and TV shows.
                            The following technologies were used: Typescript, Next.js, Mongo.db, HTML, TailwindCSS</h4>
                            <a className={p.icon} href='https://github.com/diazjoaquin/Netflix'><AiOutlineGithub/></a>
                            {/* <a className={p.icon} href=''><AiOutlineRightCircle/></a> */}
                        </div>
                    </div>
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
                            <h4>Easylearning is a E-learning platform where the user can buy, create and sell their own courses.
                            The following technologies were used: JavaScript, React.js, Redux, Node.js,
                            PostgreSQL, Sequelize, Express.js, Chakra UI.
                            </h4>
                            <a className={p.icon} href='https://github.com/diazjoaquin/EasyLearning-FP'><AiOutlineGithub/></a>
                            <a className={p.icon} href='https://easylearning-fp.web.app/'><AiOutlineRightCircle/></a>         
                        </div>
                    </div>
                    <div className={p.project}>
                        <div className={p.overlay}></div>
                        <img src='admin.png' alt=''/>
                        <div className={p.info}>
                            <h4>Admin Dashboard for EasyLearning App. Admins can manage registered users, purchase and sale of courses, created courses, and comments.
                            The following technologies were used: Javascript, React.js, Material UI, CSS, HTML. 
                            </h4>
                            <a className={p.icon} href='https://github.com/diazjoaquin/Admin-EasyLearning'><AiOutlineGithub/></a>
                            <a className={p.icon} href='https://easylearning-admin.web.app/'><AiOutlineRightCircle/></a>         
                        </div>
                    </div>
                    <div className={p.project}>
                        <div className={p.overlay}></div>
                        <img src='weather-app.png' alt=''/>
                        <div className={p.info}>
                            <h4>Weather app that provides users with up-to-date information about the weather conditions in a particular location or region. It use data from weather stations, satellites, and other sources to provide real-time or forecasted information about temperature, humidity, wind speed, precipitation, and other weather-related variables.. The following technologies were used: Javascript, React.js, CSS, HTML.
                            </h4>
                            <a className={p.icon} href='https://github.com/diazjoaquin/Weather-App'><AiOutlineGithub/></a>
                            {/* <a className={p.icon} href='https://weather-app-six-gold.vercel.app/'><AiOutlineRightCircle/></a>*/}
                        </div>
                    </div>
                    <div className={p.project}>
                        <div className={p.overlay}></div>
                        <img src='todo.png' alt=''/>
                        <div className={p.info}>
                            <h4>To do app designed to help the user to manage their task and activities. The app allows users to create task lists and track progress towards completing tasks. The following technologies were used: Javascript, React.js, CSS, HTML.
                            </h4>
                            <a className={p.icon} href='https://github.com/diazjoaquin/ToDoApp'><AiOutlineGithub/></a>
                            {/* <a className={p.icon} href='https://weather-app-six-gold.vercel.app/'><AiOutlineRightCircle/></a>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}