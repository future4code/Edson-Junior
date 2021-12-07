
import TelaInicial from './componentes/TelaInicial.js/TelaInicial';
import TelaMatches from './componentes/TelaMatches.js/TelaMatches';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Perfil } from './componentes/TelaInicial.js/estiloTelaInicial';
import { AppContainer, Button, FooterContainer, Header, LogoContainer } from './componentes/estiloApp/estiloApp';

const App = () => {
  const aluno = "edson-magnini-carver"
  const [tela, setTela] = useState("Inicial")
  const [profile, setProfile] = useState({})
  const [matches, setMacthes] = useState([])
  const [newProfile, setNewProfile] = useState(0)

  useEffect(() => {
    getProfile()
    getMatches()
  }, [newProfile])

  const getProfile = () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`
    axios.get(url)
      .then(res => {
        setProfile(res.data.profile)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const choosePerson = (profileId, like) => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`
    const body = {
      "id": profileId,
      "choice": like
    }
    const headers = "Content-Type: application/json"
    axios.post(url, body, headers)
      .then(res => {
        if (res.data.isMatch === true) {
          alert(`Deu Match! Mande um Olá para ${profile.name}!`)
        }
        setNewProfile(newProfile + 1)
      })
      .catch(err => {
        console.log("erro", err)
      })
  }

  const getMatches = () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`
    axios.get(url)
      .then(res => {
        setMacthes(res.data.matches)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const clear = () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`
    const headers = 'const headers = "Content-Type: application/'
    axios.put(url, headers)
      .then(res => {
        alert(res.data.message)
        getProfile()
        getMatches()
      })
      .catch(err => {
        alert(err)
      })

  }

  const mudarTelaPerfis = () => {
    getProfile()
    setTela("Inicial")
  }
  const mudarTelaMatches = () => {
    getMatches()
    setTela("Match")
  }

  const renderSwitch = () => {
    switch (tela) {
      case "Inicial":
        return (
          profile ?
            <TelaInicial
              profileName={profile.name}
              profileAge={profile.age}
              profilePhoto={profile.photo}
              // mudarTela={() => mudarTela()}
              profileDesc={profile.bio}
              onClickSkip={() => choosePerson(profile.id, false)}
              onClickMatch={() => choosePerson(profile.id, true)}
            />

            :
            <p>Não há mais perfis para você olhar</p>
        )
      case "Match":
        return (
          matches.map(match => {
            return (
              <TelaMatches key={match.id}
                matchPhoto={match.photo}
                matchName={match.name}
              />
            )
          })

        )
    }
  }
  return (
    <div className="App">
      <AppContainer>
        <Header>
          <LogoContainer src="data:image/png;base64,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" />
          <div>
            <Button onClick={() => mudarTelaPerfis()}>Perfis</Button>
            <Button onClick={() => mudarTelaMatches()}>Matches</Button>
          </div>

        </Header>
        {renderSwitch()}

      </AppContainer>
      <FooterContainer>
        <button onClick={clear}>Reset matches</button>
      </FooterContainer>
    </div>
  );
}

export default App;
