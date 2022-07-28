import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import apiClient from '../appService';
import './Home.scss'

const Home = () => {
    const navigate = useNavigate();
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonListDefault, setPokemonListDefault] = useState([]);
    const [input, setInput] = useState([]);

    const fetchPokemonList = async () => {
        const res = await apiClient.getPokemonList();
        if(!res) return
        setPokemonList(res)
        setPokemonListDefault(res)
      
    }

    const updateInput = async (input) => {
        const filtered = pokemonListDefault.filter(pokemon => {
         return pokemon.name.toLowerCase().includes(input.toLowerCase())
        })
        setPokemonList(filtered);
        setInput(input);
     }

    useEffect(() => {
        fetchPokemonList();
    }, [])

    const colors = ['primary','secondary','success', 'danger', 'warning', 'info', 'light', 'dark'];
    const random = Math.floor(Math.random() * colors.length);

    const List = pokemonList.map((pokemon, index) => {
        return (
            <div key={index} className="list" data-testid="pokemons" onClick={()=>navigate("/Detail",{ state: { item: pokemon}})} >
               
            {index % 2 === 0 ? <li className={`list-group-item list-group-item`}>{index + 1}. {pokemon.name}</li> : <li className={`list-group-item list-group-item-${colors[random]}`}>{index + 1}. {pokemon.name}</li> }
           
            </div>
            )
    })

    return (
    <div className="container">
        <div className="h-100 p-5 text-bg-dark rounded-3">
        <div className="input-group mb-3">
        </div>
           <div>
           <form data-testid="search" className='mr-auto w-50 form-inline'>
                <input placeholder='Search Pokemon' type="text" className='w-10 form control'
                 key="random1"
                 value={input}
                 onChange={(e) => updateInput(e.target.value)}
                />
            </form>
            <br/>
            <h2>List of Pokemon</h2>
           </div>

        </div>

       <ul className="list-group">
       {List}
       </ul>
    </div>
    )
}

export default Home;

