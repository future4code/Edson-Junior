import React from "react"
import styled from "styled-components";

const OrdemLi = styled.div`
        display: block;
`


export default class Etapa1 extends React.Component {

    render() {
        
                
    
        return (
            <div>
                <h2>
                    ETAPA  1 - DADOS GERAIS
                </h2>
                    <OrdemLi>
                            <p>1. Qual seu nome?</p>
                            <input/>
                    </OrdemLi>

                        <OrdemLi>
                            <p>2. Qual sua idade?</p>
                            <input/>
                        </OrdemLi> 
                    
                        <OrdemLi>
                        <p>3. Qual seu e-mail?</p>
                        <input />
                    </OrdemLi>
                    
                
                    <OrdemLi>
                            <p>4. Qual a sua escolaridade?</p>
                        <select>
                            <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                            <option value="Ensino médio completo">Ensino médio completo</option>
                            <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                            <option value="Ensino superior completo">Ensino superior completo</option>
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