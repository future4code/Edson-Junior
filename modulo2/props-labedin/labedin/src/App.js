import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import styled from 'styled-components'

const AllContainer = styled.div`
{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.page-section-container {
  width: 40vw;
  margin: 10px 0;
}

.page-section-container > h3 {
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
`

const CardPequenoContainer = styled.div`
    img{
      width: 3vw;
    }
    .smallcard-container{
      display: flex;
      
    align-items: center;
    border: 1px solid black;
    padding: 15px 30px;
    margin: 10px auto;
    }
`

const CardGrandeContainer = styled.div`
    .bigcard-container{
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 150px;
    }
    img{
      width: 70px;
      margin-right: 10px;
      border-radius: 50%;
    }
    h4 {
    margin-bottom: 15px;
    }
    div {
    justify-items: flex-start;
    }
`

const ImageButtonContainer = styled.div` 
  .image-button-container {
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
}

img {
    width: 30px;
    margin-right: 10px;
}
`



function App() {
  return (
    <AllContainer>
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrandeContainer>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQHenJxl1TuX8A/profile-displayphoto-shrink_200_200/0/1540657908154?e=1641427200&v=beta&t=lJKDr1o8YlXgn1r4olrkkQtH4MCE-845BiOtahlYpWg" 
          nome="Edson Batista Magnini Junior" 
          descricao="Oi, eu sou o Edson. Sou aluno da Labenu. Adoro assistir séries e pesquisar coisas sobre tecnologia."
        />
        </CardGrandeContainer>
        
        <ImageButtonContainer>
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        </ImageButtonContainer>
        <CardPequenoContainer>
          <CardPequeno 
          imagem="https://pngimg.com/uploads/email/email_PNG100752.png" 
          texto="e-mail: " 
          conteudo="edson_magnini@hotmail.com"
        />
          </CardPequenoContainer>
        <CardPequenoContainer>
        <CardPequeno 
          imagem="https://pngimg.com/uploads/house/house_PNG55.png" 
          texto="Endereço: " 
          conteudo="Rua das bolas quadradas s/n"
        />
        </CardPequenoContainer>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrandeContainer>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C510BAQFAYUvfp8XwMg/company-logo_100_100/0/1519885611635?e=1643846400&v=beta&t=iyr9l6Hf7X2Jg3rsdM8uBYRJHxxGkiJ9jhZDMi-fSfg" 
          nome="Analista PCP - Panco" 
          descricao="-Key user do módulo PP (Production Planning) no projeto de implantação do ERP SAP e conhecimentos básicos);
          -Leitura de desenhos técnicos mecânicos;
          -Planejamento, controle e programação de produção;" 
        />
        </CardGrandeContainer>
        <CardGrandeContainer>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQEum21KKU378A/company-logo_100_100/0/1529322894332?e=1643846400&v=beta&t=GehIupB2ExSmz4AlbchGnhkUsioeBONlhpxtr8KuKbo" 
          nome="Assistente de automação industrial - Braspress" 
          descricao="Atribuições de fornecer suporte técnico para filiais que possuem sistema de aferição automatizados, administrar manutenções realizadas e futuras por meio de planilhas." 
        />
        </CardGrandeContainer>
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImageButtonContainer>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        
        </ImageButtonContainer>
        
        <ImageButtonContainer>
        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        /> 
        </ImageButtonContainer>
      </div>
    </AllContainer>
  );
}

export default App;
