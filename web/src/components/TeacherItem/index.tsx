import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'
import api from '../../services/api';

export interface Teacher {
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface teacherItemProps{
    teacher: Teacher;
}

const TeacherItem: React.FC<teacherItemProps> = ({ teacher }) => {
    function createNewConnection(){
        api.post('connections', {
            user_id: teacher.id,
        })
    }


    return (
        <article className="teacher-item">
        <header>
            <img src={teacher.avatar} alt={teacher.name}/>
            <div>
                <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span>
            </div>
        </header>

    <p>
        {teacher.bio}
    </p>

    <footer>
        <p>Preço/hora</p>
        <strong>R$ {teacher.cost}</strong>
        <a onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`} target="_blank">
            <img src={wppIcon} alt="Whatsapp" />
            Entrar em contato
        </a>
    </footer>
    </article>
    )
}

export default TeacherItem;