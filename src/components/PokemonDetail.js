import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Loading } from './Loading'

export const PokemonDetail = ({ pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/1/', }) => {
    const [loading, setLoading] = useState(false)
    const [pokemonInfo, setPokemonInfo] = useState()

    useEffect(() => {
        setLoading(true)
        axios.get(pokemonUrl).then( resp =>{
            let data = resp?.data
            setPokemonInfo(data)
            setLoading(false)
        }).catch( error => {
           setLoading(false)
           console.log("Error al cargar la informacion del pokemon ",error)
       })

    }, [ pokemonUrl ])


    return (
        <div className='pokemon-list-container'>
            { 
                loading ? <Loading /> : !pokemonInfo ? <div className="alert alert-primary text-center" role="alert">
                    Click on the pokemon name to load information
                </div> : <>
                    <div className='row'>
                        <div className='col'>
                            <div className='text-center'>
                                <img className='pokemon-image' 
                                    src={ pokemonInfo?.sprites?.other?.dream_world?.front_default} 
                                    alt={ pokemonInfo?.name }
                                />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='pokemon-name text-center text-capitalize'>
                                { pokemonInfo?.name }
                            </div>
                            <div className='pokemon-info text-center'>
                                <span>Weight:&nbsp;</span>{pokemonInfo?.weight}<br />
                                <span>Base experience:&nbsp;</span>{pokemonInfo?.base_experience}
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
