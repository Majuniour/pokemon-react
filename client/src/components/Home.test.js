
import React from "react";
import apiClient from "../../src/appService";


import { render, waitFor, screen } from "@testing-library/react";
import Home from "./Home";
import axios from "axios";

jest.mock("axios");

const dummyList = [{
        "name": "spearow",
        "url": "https://pokeapi.co/api/v2/pokemon/21/"
    }, {
        "name": "fearow",
        "url": "https://pokeapi.co/api/v2/pokemon/22/"
    }, {
        "name": "ekans",
        "url": "https://pokeapi.co/api/v2/pokemon/23/"
    }, {
        "name": "arbok",
        "url": "https://pokeapi.co/api/v2/pokemon/24/"
    },
    ];

test("pokemon list", async () => {
    axios.get.mockResolvedValue({ data: dummyList });
    render(<Home />);

const pokemonList = await waitFor(() => screen.findAllByTestId("pokemons"));

expect(pokemonList).toHaveLength(4);
})