import React from "react";
import axios from "axios";

export default class App extends React.Component{
  state = {
    listaUsers: [],
    usuario: [],
    inputValueName: "",
    inputValueEmail: "",
    inputValueID: ""
  }
  
  componentDidMount() {
    this.getAllUsers();
  }

  handleInputChangeName = (e) => {
    this.setState({inputValueName: e.target.value})
  }
  handleInputChangeEmail = (e) => {
    this.setState({inputValueEmail: e.target.value})
  }
  handleInputChangeID = (e) => {
    this.setState({inputValueID: e.target.value})
  }

  getAllUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "edson-magnini-carver"
          }
        }
      )
      .then((res) => {
        this.setState({ listaUsers: res.data })
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  createUser = () => {
    const body = {
      name: this.state.inputValueName,
      email: this.state.inputValueEmail
    }
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization:"edson-magnini-carver"
          }
        }
      )
      .then((res) => {
        this.setState({ inputValueName: '' })
        this.setState({ inputValueEmail: '' })
        
      })
      .catch((err) => {
        console.log(err.response.data)
      }) 
  }

  getUserById = (id) => {
    axios
      .get(
        (`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`),
        {
          headers: {
            Authorization: "edson-magnini-carver"
          }
        }
      )
    .then((res) => {
      // this.setState({ usuario: res.data })
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err.response)
    })
  }
  deleteUser = (id) => {
    axios
      .delete(
        (`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`),
        {
          headers: {
            Authorization: "edson-magnini-carver"
          }
        }
      )
    .then((res) => {
      console.log("deletado")
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  render() {
    
    return (
      <div>
        <button>Ir para pagina de lista</button>
        <div>
          <label>Nome:</label>
          <input
            value={this.state.inputValueName}
            onChange={this.handleInputChangeName}
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input
            value={this.state.inputValueEmail}
            onChange={this.handleInputChangeEmail}
          />
        </div>
        <button onClick={this.createUser}>Salvar</button>
        
        {
          this.state.listaUsers.map((usuario) => {
            if (usuario.name) {
              return <p key={usuario.id}> Nome: {usuario.name} - ID: {usuario.id} </p>
            }
          })
        }

        <div>
          <label>Pesquisa:</label>
          <input
            placeholder="Informe o ID"
            value={this.state.inputValueID}
            onChange={this.handleInputChangeID}
          />

          <button onClick={() => this.getUserById(this.state.inputValueID)}>Procurar</button>

          <button onClick={() => this.deleteUser(this.state.inputValueID)}>Deletar</button>
          {
            this.state.usuario.name && <p> {this.state.usuario.name} - {this.state.usuario.email} </p>
          }
        </div>
      
      </div >

    );
  }
    
  
}
