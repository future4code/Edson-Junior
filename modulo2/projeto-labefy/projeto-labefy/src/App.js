import React from "react"
import styledComponents from "styled-components"
import axios from "axios"
import CriarPlaylist from "./components/CriarPlaylist"
import Playlist from "./components/Playlist"

export default class App extends React.Component {
  state = {
    telaAtual: "CriarPlaylist"
  }

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "CriarPlaylist":
        return <CriarPlaylist />
      case "Playlist":
        return <Playlist />
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


