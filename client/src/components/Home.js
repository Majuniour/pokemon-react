import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import apiClient from '../appService';
import './Home.scss'

const Home = () => {
    const navigate = useNavigate();
    const [pokemonList, setPokemonList] = useState([]);

    const fetchPokemonList = async () => {
        const res = await apiClient.getPokemonList();
        if(!res) return
        setPokemonList(res)
      
    }

    useEffect(() => {
        fetchPokemonList();
    }, [])

    const colors = ['primary','secondary','success', 'danger', 'warning', 'info', 'light', 'dark'];
    const random = Math.floor(Math.random() * colors.length);

    const List = pokemonList.map((pokemon, index) => {
        return (
            <div key={index} className="list" onClick={()=>navigate("/Detail",{ state: { item: pokemon}})}>
               
            {index % 2 === 0 ? <li className={`list-group-item list-group-item`}>{index + 1}. {pokemon.name}</li> : <li className={`list-group-item list-group-item-${colors[random]}`}>{index + 1}. {pokemon.name}</li> }
           
            </div>
            )
    })

    return (
    <div className="container">
        <div className="h-100 p-5 text-bg-dark rounded-3">
        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Search by Name</span>
        {/* <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"> */}
        </div>
            <h2>List of Pokemon</h2>
        </div>
       <ul className="list-group">
       {List}
       </ul>
    </div>
    )
}

export default Home;

