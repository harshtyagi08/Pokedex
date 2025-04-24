import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";

import './Pockedex.css'

function Pockedex(){
    return (
    <div className="pokemon-pokedex">
        <h1 id="heading">Pokedex</h1>
        <Search/>
        <PokemonList/>
    </div> 
    )
}

export default Pockedex;