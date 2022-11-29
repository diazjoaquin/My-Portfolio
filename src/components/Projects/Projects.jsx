import React from 'react';
import Nav from '../Nav/Nav';
import p from './Projects.module.css';

export default function Projects () {
    return (
        <section id='projects' className={p.projects}>
            <Nav/>
            <h3 className={p.title}>MY PROJECTS</h3>
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