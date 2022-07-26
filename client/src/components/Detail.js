import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import apiClient from '../appService';
import './Detail.scss'

const Detail = () => {
    const { state } = useLocation();
    const [moreInfo, setMoreInfo] = useState([]);
    const { item } = state

    const fetchPokemonInfo = async () => {
        // const list = [];
        await apiClient.getPokemonByName(item.name)
            .then(res => {
                let pokemonInfo = {
                    name: res.name,
                    categories: ['stats', 'forms', 'abilities', 'items held', 'moves'],
                    items: [
                        res.stats.map((x) => {
                            return {
                                name: x.stat.name,
                                result: x.base_stat,
                            };
                        }),
                        res.forms.map((x) => {
                            return {
                                name: 'form',
                                result: x.name,
                            };
                        }),
                        res.abilities.map((x) => {
                            return {
                                name: 'ability',
                                result: x.ability.name,
                            };
                        }),
                        res.held_items.map((x) => {
                            return {
                                name: 'item',
                                result: x.item.name,
                            };
                        }),
                        res.moves.map((x) => {
                            return {
                                name: 'move',
                                result: x.move.name,
                            };
                        }),
                    ],
                    image: res.sprites.front_shiny,
                };

                setMoreInfo(pokemonInfo);
            })

    }

    useEffect(() => {
        fetchPokemonInfo();
    }, [])

    const getInfoDetails = () => {
        const stats = JSON.stringify(moreInfo?.items);
        if (stats === undefined) {
            return <>Still loading...</>;
        } else {
            return JSON.parse(stats).map((item, id) => (
                <div key={id}>
                    <h2 className="card-title">{moreInfo?.categories[id]}</h2>
                    <div>
                        {item.map((x, ind) => {
                            return (
                                <div
                                    key={ind}
                                >
                                    
                                        <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                           {ind + 1}. {x.name}
                                           <span className="badge bg-primary rounded-pill"> {x.result}</span>
                                        </li>
                                           
                                        </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )
            )
        }
    };
    const colors = ['primary','secondary','success', 'danger', 'warning', 'info', 'light', 'dark'];
    const random = Math.floor(Math.random() * colors.length);

    return (
        <div className="container">
            <div className="h-100 p-5 text-bg-dark rounded-3">
            <h1 className={`card-title`}>
                {moreInfo.name}
                </h1>
                <img src={moreInfo.image} height="200" width="400" />
            </div>
            {getInfoDetails()}
        </div>
    )

}

export default Detail;