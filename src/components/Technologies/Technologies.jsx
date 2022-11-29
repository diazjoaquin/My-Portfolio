import React from 'react';
import Nav from '../Nav/Nav';
import t from './Technologies.module.css'

export default function Technologies () {

    return (
        <section className={t.techno}>
            <Nav/>
            <div className={t.technologies}>
                <h3 className={t.title}>TECHNOLOGIES</h3>
                <div className={t.container}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png' alt='CSS'/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png' alt='HTML5'/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/640px-Javascript_badge.svg.png' alt='JS'/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png' alt='REACT'/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Redux.png/640px-Redux.png' alt='REDUX'/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/640px-Node.js_logo_2015.svg.png' alt='NODE'/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/640px-Git-logo.svg.png' alt='GIT'/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png'alt='EXPRESS'/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png' alt='POSTGRESS'/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png' alt='TYPESCRIPT'/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/640px-Bootstrap_logo.svg.png' alt='BOOTSTRAP'/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Figma-1-logo.png/640px-Figma-1-logo.png' alt='FIGMA'/>
                </div>
            </div>
        </section>

    )
}