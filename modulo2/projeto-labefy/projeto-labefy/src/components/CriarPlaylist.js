import React from "react"
import styledComponents from "styled-components"
import axios from "axios"



export default class CriarPlaylist extends React.Component{
    state = {
        inputPlaylistID: "",
        playlist: []
    }
    
    componentDidMount() {
        this.getAllPlaylist()
    }
    handleInputPlaylistID = (e) => {
        this.setState({inputPlaylistID: e.target.value})
    }
    getAllPlaylist = () => {
        axios.get(
            'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
            {
                headers: {
                    Authorization: "edson-magnini-carver"
                }
            }
        )
        .then((res) => {
            this.setState({ playlist: res.data.result.list })
        })
        .catch((err) => {
            alert(err.response.data)
        })
    }
    createPlaylist = () => {
        const body = {
            name: this.state.inputPlaylistID
        }
        axios.post(
            'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body,
            {
                headers: {
                    Authorization: "edson-magnini-carver"
                }
            }
        )
        .then((res) => {
            this.setState({inputPlaylistID: ''})
            alert("Playlist criada")
            this.getAllPlaylist()
            })
        .catch((err)=>{
            alert(err.response.data)
        })
    }

    render() {
        const listaPlaylist = this.state.playlist.map((list) => {
            return <p>Playlist: {list.name}</p>
        })
        return (
            <div>
                <h2>Crie sua playlist</h2>
                <input
                    placeholder="Playlist"
                    onChange={this.handleInputPlaylistID}
                    value={this.state.inputPlaylistID}
                /> 
                <button onClick={this.createPlaylist}>Criar</button>
                
                    {listaPlaylist}
                
            </div>
            
        )
        
            
            
    }
}