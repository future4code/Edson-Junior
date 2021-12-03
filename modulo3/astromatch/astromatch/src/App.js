
import TelaInicial from './componentes/TelaInicial.js/TelaInicial';
import TelaMatches from './componentes/TelaMatches.js/TelaMatches';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Perfil } from './componentes/TelaInicial.js/estiloTelaInicial';

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

  const mudarTela = () => {
    getMatches()
    if (tela === "Inicial") {
      setTela("Match")
    } else {
      setTela("Inicial")
    }
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
              mudarTela={() => mudarTela()}
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
                alterarTela={mudarTela()}
              />
            )
          })

        )
    }
  }
  return (
    <div className="App">
      {renderSwitch()}
      <button onClick={clear}>Reset matches</button>
    </div>
  );
}

export default App;
