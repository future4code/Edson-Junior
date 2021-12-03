import logo from './logo.svg';
import './App.css';
import PokeCard from './components/PokeCard/PokeCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./styles.css";

const App = () => {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  const pegarPoke = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(res => {
        setPokeList(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    pegarPoke()
  }, [pokeName])

  const changePokeName = (e) => {
    setPokeName(e.target.value)
  }
  return (
    <div>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>
      <PokeCard
      pokemonApp={pokeName}
      />
    </div>

  )
}

export default App;
