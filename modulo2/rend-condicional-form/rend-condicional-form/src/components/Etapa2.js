import React from "react"
import styled from "styled-components";

const OrdemLi = styled.div`
        display: block;
`

export default class Etapa2 extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    ETAPA  2 - INFORMAÇÕES DO ENSINO SUPERIOR
                </h2>
                <OrdemLi>
                    <p>5. Qual curso?</p>
                    <input />
                </OrdemLi>

                <OrdemLi>
                    <p>6. Qual a unidade de ensino?</p>
                    <input />
                </OrdemLi>
    
                <br></br>
                <OrdemLi>
                    <button>Próxima etapa</button>
                </OrdemLi>
                    
            </div>
        )
    }

}