const { default: axios } = require("axios");

module.exports = function () {

  const baseUrl = "https://pokeapi.co/api/v2";

    let operations = {
      GET
    };
  
  async function GET (req, res, next) {
      const pokemons = await axios.get(`${baseUrl}/pokemon/?offset=20&limit=50`);
      
      res.status(200).json(pokemons.data.results);
    }
    GET.apiDoc = {
      summary: "Fetch pokemons.",
      operationId: "getPokemons",
      responses: {
        200: {
          description: "List of pokemons.",
          schema: {
            type: "array",
            items: {
              $ref: "#/definitions/Pokemon",
            },
          },
        },
      },
    };
    return operations;
  };