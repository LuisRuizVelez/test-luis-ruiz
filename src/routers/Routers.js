import React from 'react'
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { PokemonHomePage } from '../pages/PokemonHomePage';

export const Routers = () => {
    return ( <>
        <Navbar />

        <div>
            <Switch>
                <Route exact path='/home' component={ PokemonHomePage }/>

                <Redirect to='/home' />
            </Switch>
        </div>
    </> )
}
