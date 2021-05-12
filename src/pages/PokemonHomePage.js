import React, { useState } from 'react'

import '../styles/pokemon.css'
import { PokemonList } from '../components/PokemonList';
import { PokemonDetail } from '../components/PokemonDetail';

export const PokemonHomePage = () => {
    const [pokemonUrl, setPokemonUrl] = useState()

    return (
        <div className='container-fluid mt-5'>
            <h1>Pokemon List</h1>
            
            <div className='row'>
                <div className='col'>
                    <PokemonList setPokemonUrl={ setPokemonUrl } />
                </div>
                <div className='col-8'>
                    <PokemonDetail pokemonUrl={ pokemonUrl } />
                </div>
            </div>
        </div>
    )
}
