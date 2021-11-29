import React from "react"
import styledComponents from "styled-components"
import axios from "axios"



export default class CriarPlaylist extends React.Component{
    state = {
        inputPlaylistID: "",
        inputMusica: "",
        inputArtista: "",
        inputURL: "",
        playlist: [],
        playlistTrack: [],
        idPlaylist: "5"
    }
    
    componentDidMount() {
        this.getAllPlaylist()
        this.getPlaylistTracks()
    }
    handleInputPlaylistID = (e) => {
        this.setState({inputPlaylistID: e.target.value})
    }
    handleInputMusica = (e) => {
        this.setState({inputMusica: e.target.value})
    }
    handleInputArtista = (e) => {
        this.setState({inputArtista: e.target.value})
    }
    handleInputURL = (e) => {
        this.setState({inputURL: e.target.value})
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

    deletePlaylist = (id) => {
        axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
            {
                headers: {
                Authorization: "edson-magnini-carver"
                }
            }
        )
        .then((res) => {
            alert("Playlist deletada")
            this.getAllPlaylist()
        })
        .catch((err) => {
            alert(err.response.data)
        })
    }

    addTrackToPLaylist = (id) => {
        const body = {
            name: this.state.inputMusica,
            artist: this.state.inputArtista,
            url: this.state.inputURL
        }
        axios.post(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body,
            {
                headers: {
                    Authorization: "edson-magnini-carver"
                }
            } 
        )
        .then((res) => {
            alert("Musica adicionada")
            this.setState({inputMusica: ''})
            this.setState({inputArtista: ''})
            this.setState({inputURL: ''})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
        
    }

    getPlaylistTracks = (id) => {
        this.setState({ idPlaylist: id })
            console.log("idplaylist",this.state.idPlaylist)
        axios.get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
            {
                headers: {
                    Authorization: "edson-magnini-carver"
                }
            }
        )
        .then((res) => {
            console.log(res.data.result.tracks)
            this.setState({ playlistTrack: res.data.result.tracks })    
            
        })
        .catch((err) => {
            alert(err.response.data.message)
            console.log(err.response.data)
        })
        const playlistTrackRender = this.state.playlistTrack.map((list) => {
            render: return(
            <div key={list.id}>
                <p>Música: {list.name}</p>
                <p>Artista: {list.artist}</p>
                <p>Link: {list.url}</p>
            </div >
            )
        })
        
    }

    render() {
        // const playlistTrackRender = this.state.playlistTrack.map((list) => {
        //     return(
        //     <div key={list.id}>
        //         <p>Música: {list.name}</p>
        //         <p>Artista: {list.artist}</p>
        //         <p>Link: {list.url}</p>
        //     </div >
        //     )
        // })
        const listaPlaylist = this.state.playlist.map((list) => {
            return <div>
                <div key={list.id} onClick={() => this.getPlaylistTracks(list.id)}>
                    Playlist: {list.name}
                    {this.playlistTrackRender}
                </div>
                <button onClick={() => { this.deletePlaylist(list.id) }}>X</button>
                <button onClick={() => { this.addTrackToPLaylist(list.id) } }>Add musica</button>
                <input
                    placeholder="Nome da musica"
                    value={this.state.inputMusica}
                    onChange={this.handleInputMusica}
                />
                <input
                    placeholder="Nome do artista"
                    value={this.state.inputArtista}
                    onChange={this.handleInputArtista}
                />
                <input
                    placeholder="Informe a URL"
                    value={this.state.inputURL}
                    onChange={this.handleInputURL}
                />
            </div>
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
                <div>
                    {listaPlaylist}
                    
                </div>
                    
                
            </div>
            
        )
        
            
            
    }
}