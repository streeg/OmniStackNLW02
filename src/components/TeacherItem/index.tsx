import React from 'react';
import './style.css'
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'



function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/22523306?s=460&u=547fe29d00abc1d19581a04c9488b5804004b7c7&v=4" alt="guileb"/>
            <div>
                <strong>Guilherme Andreúce</strong>
                <span>Química</span>
            </div>
        </header>
        <p>
            Entusiasta das melhores tecnologis de química avançada
            <br/><br/>
            Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>
        <footer>
            <p>
                Preço/hora 
                <strong> R$ 80.00</strong>
            </p>
            <button type="button">
                <img src={whatsAppIcon} alt="whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;