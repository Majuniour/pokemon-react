import * as base from './config';

const apiClient = {
    getPokemonList: () => {
        const requestOptions =  {
            method:'GET',
            headers: {'Content-Type': 'application/json'}
        }
        return fetch(`${base.dev.baseUrl}/pokemon`,requestOptions)
        .then(response => response.json());
    },
    getPokemonByName: (pokemon) => {
        const pokemonName = {
            name: pokemon
        }
        const requestOptions =  {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(pokemonName)
        }
        return fetch(`${base.dev.baseUrl}/pokemonByName`,requestOptions)
        .then(response => response.json());
    }

};

export default apiClient

