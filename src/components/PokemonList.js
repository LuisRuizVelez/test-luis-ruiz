import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { Loading } from './Loading'

export const PokemonList = ({ setPokemonUrl }) => {
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    const [data, setData] = useState({})

    useEffect(() => {
        setLoading(true)
        axios.get(url).then( resp =>{
            let data = resp?.data
           setData(data)
           setLoading(false)
        }).catch( error => {
           setLoading(false)
           console.log("Error al cargar la lista de pokemon ",error)
       })

    }, [ url ])

    const handleClick = name => setPokemonUrl(name)
    const handleChangeUrl = url => setUrl(url)

    return (
        <div className='pokemon-list-container'>
            { 
                loading ? <Loading /> : <>
                    <ul className="list-group list-group-flush">
                        {
                            data?.results.map((item, i) => <button type="button" key={`item-${i}`} 
                                className="list-group-item text-left text-capitalize"
                                onClick={ () => handleClick( item?.url) }
                            >
                                {item?.name}
                            </button>)
                        }
                    </ul>
                    <br />
                    <div className="clearfix">
                        <button type="button" 
                            className="btn btn-outline-primary btn-sm float-left"
                            disabled={ data?.previous === null }
                            onClick={ ()=>handleChangeUrl(data?.previous) }
                        > 
                            {'<<'} 
                        </button>
                        <button type="button" 
                            className="btn btn-outline-primary btn-sm float-right"
                            disabled={ data?.next === null }
                            onClick={ ()=>handleChangeUrl(data?.next) }
                        > 
                            {'>>'} 
                        </button>
                    </div>
                </>
            }
        </div>
    )
}
