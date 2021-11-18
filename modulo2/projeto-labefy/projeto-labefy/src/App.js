import React from "react"
import styledComponents from "styled-components"
import axios from "axios"
import CriarPlaylist from "./components/CriarPlaylist"

export default class App extends React.Component {
  state = {
    telaAtual: "CriarPlaylist"
  }

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "CriarPlaylist":
        return <CriarPlaylist />
      default:
        return <div>Tela não encontrada</div>
    }
  }

  render() {
    
    return (
      <div>
        {this.escolherTela()}
      </div>
    )
  }
}


