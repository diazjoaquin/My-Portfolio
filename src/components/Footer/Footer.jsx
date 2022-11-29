import React from 'react';
import f from './Footer.module.css';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'

export default function Footer () {
    return (
        <footer><p> © Díaz Joaquín - All rights reserved - 2022</p>
            <div class={f.redes}>
                    <a className={f.icon} href='https://www.linkedin.com/in/joaqu%C3%ADn-d%C3%ADaz-b004b31a7/'><AiFillLinkedin/></a>
                    <a className={f.icon} href='https://github.com/diazjoaquin'><AiOutlineGithub/></a>
            </div>
        </footer>
        )
}