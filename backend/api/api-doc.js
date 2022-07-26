const apiDoc = {
    swagger: "2.0",
    basePath: "/",
    info: {
      title: "Pokemon app API.",
      version: "1.0.0",
    },
    definitions: {
      Pokemon: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          url: {
            type: "string",
          },
        },
        required: ["name", "url"],
      },
      PokemonByName: {
        type: "object",
        properties: {
          abilities: {
            type: "array",
          },
          held_items: {
            type: "array",
          },
          forms: {
            type: "array",
          },
          moves: {
            type: "array",
          },
          game_indices: {
            type: "array",
          },
          sprites: {
            type: "array",
          },

        }
        
      }
    },
    paths: {},
  };
  
  module.exports = apiDoc;