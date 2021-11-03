import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.texto }</h4>

            </div>
            <div>
            <p>{ props.conteudo }</p>
            </div>
        </div>
    )
}

export default CardPequeno;