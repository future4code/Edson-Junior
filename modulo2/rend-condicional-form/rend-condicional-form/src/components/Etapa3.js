import React from "react"
import styled from "styled-components";

const OrdemLi = styled.div`
        display: block;
`

export default class Etapa3 extends React.Component {
    render() {
        
                
    
        return (
            <div>
                <h2>
                    ETAPA  3 - INFORMAÇÕES GERAIS DE ENSINO
                </h2>
                    <OrdemLi>
                            <p>7. Por que você nãoi terminou um curso de graduação?</p>
                            <input/>
                    </OrdemLi>

                        <OrdemLi>
                            <p>8. Você fez algum curso complementar?</p>
                            <select>
                            <option value="Curso técnico">Curso técnico</option>
                            <option value="Curso de inglês">Curso de inglês</option>
                        </select>
                        </OrdemLi> 
                <br></br>
                <OrdemLi>
                    <button>Próxima etapa</button>
                </OrdemLi>
                    
            </div>
        )
    }

}