const { default: axios } = require("axios");

module.exports = function () {

  const baseUrl = "https://pokeapi.co/api/v2";

    let operations = {
      POST
    };
  
  async function POST (req, res, next) {
      const selectedPokemon = req.body;
      const pokemon = await axios.get(`${baseUrl}/pokemon/${selectedPokemon.name}`)
      const data = {
          name: pokemon.data.name,
          abilities: pokemon.data.abilities,
          held_items: pokemon.data.held_items,
          forms: pokemon.data.forms,
          moves: pokemon.data.moves,
          game_indices: pokemon.data.game_indices,
          sprites: pokemon.data.sprites,
          stats: pokemon.data.stats
      }
      res.status(200).json(data);
    }
    POST.apiDoc = {
      summary: "Fetch pokemon",
      operationId: "getPokemon",
      responses: {
        200: {
          description: "Get Pokemon By Name.",
          schema: {
            type: "array",
            items: {
              $ref: "#/definitions/PokemonByName",
            },
          },
        },
      },
    };
    return operations;
  };