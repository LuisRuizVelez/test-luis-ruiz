import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { AuthContext } from '../auth/AuthContext'

export const Navbar = () => {
    const { dispatch } = useContext(AuthContext)
    const history = useHistory()

    const handleLogout = () => {
        dispatch({
            type:'logout'
        })

        history.replace('/login')
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/home"
            >
                home
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <button 
                        type="button"
                        className="btn nav-item nav-link" 
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}