import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'

function TeacherItem(){
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt="Diego Fernandes"/>
                        <div>
                            <strong>Diego Fernandes</strong>
                            <span>Química</span>
                        </div>
                    </header>

                <p>
                    Entusiasta das melhores tecnologias de quimica avançada.
                    <br /><br />
                    Apaixonado por quimica e mudança de vida das pessoas através da programação. Mais de 200 mil pessoas já passaram por uma das minhas explosões.
                </p>

                <footer>
                    <p>Preço/hora</p>
                    <strong>R$ 80,00</strong>
                    <button type="button">
                        <img src={wppIcon} alt="Whatsapp" />
                        Entrar em contato
                    </button>
                </footer>
                </article>
    )
}

export default TeacherItem;