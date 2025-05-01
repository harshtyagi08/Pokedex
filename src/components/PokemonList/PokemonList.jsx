import axios from "axios";
import { useEffect, useState } from "react";
import './PokemonList.css';
import Pokemon from "../Pokemon/Pokemon";

function PokemonList() {

    // const [pokemonList, setPokemon]= useState([]);
    // const [isLoading, setIsLoading]= useState(true);
    // const [pokedexUrl, setPokedexUrl]= useState('https://pokeapi.co/api/v2/pokemon');
    // const [nextUrl, setNextUrl]= useState('');
    // const [prevUrl, setPrevUrl]= useState('');
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList:[],
        isLoading: true,
        pokedexUrl:'https://pokeapi.co/api/v2/pokemon',
        nextUrl:'',
        prevUrl:''
    })
    
    async function downloadPokemons() {

        // setIsLoading(true);
        setPokemonListState({...pokemonListState, isLoading:true});

        const response= await axios.get(pokemonListState.pokedexUrl);
        const pokemonResults= response.data.results;

        console.log(response.data);

        setPokemonListState(()=> ({
            ...pokemonListState,
            nextUrl:response.data.next,
            prevUrl:response.data.previous
        }));
        
        const pokemonResultPromise= pokemonResults.map((pokemon)=> axios.get(pokemon.url));
        const pokemonData = await axios.all(pokemonResultPromise);

        console.log(pokemonData);
        const res=(pokemonData.map((pokeData) => {
           const pokemon = pokeData.data;
           return { id:pokemon.id, name: pokemon.name, image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
           types: pokemon.types}
        }))

        console.log(res);
        setPokemonListState({
            ...pokemonListState, 
            pokemonList: res, 
            isLoading:false
        })     
    }
    
    useEffect(()=>{
        downloadPokemons();
    },[pokemonListState.pokedexUrl])

    return(
        <div className="pokemon-list">
       <div className="pokemon-wrapper">{(pokemonListState.isLoading) ?   'Loading....': pokemonListState.pokemonList.map((p)=> <Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>) }
       </div>
       <div className="controls">
        <button disabled={pokemonListState.prevUrl==null } onClick={()=> setPokemonListState({...pokemonListState , pokedexUrl:pokemonListState.prevUrl})}>Previous</button>
        <button disabled={pokemonListState.nextUrl==null} onClick={()=> setPokemonListState({...pokemonListState , pokedexUrl:pokemonListState.nextUrl})}>Next</button>
       </div>
        </div>
    )
}
export default PokemonList;