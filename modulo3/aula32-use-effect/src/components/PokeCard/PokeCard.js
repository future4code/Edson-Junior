import axios from "axios"
import { useEffect, useState } from "react"

const PokeCard = (props) => {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        detalharPokemon(props.pokemonApp)
    }, [props.pokemonApp])

    const detalharPokemon = (pokeName) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(res => {
                setPokemon(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.weight} Kg</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
        </div>
    )
}
export default PokeCard