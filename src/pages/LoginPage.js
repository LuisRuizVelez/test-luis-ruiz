import React, { useContext, useState } from 'react'
import { useHistory } from "react-router-dom"
import { AuthContext } from '../auth/AuthContext'

import { useForm } from '../hooks/useForm'

import '../styles/login.css'

export const LoginPage = () => {
    const history = useHistory()
    const { dispatch } = useContext(AuthContext)
    const [error, setError] = useState(false)
    const [values, handleInputChange] = useForm({
        email:'',
        password:''
    })

    const {email, password} = values


    const handleSubmit = e => {
        e.preventDefault();

        if(email !== 'test@test.com' || password !== '123456'){
            setError( true )
            return;
        }

        dispatch({
            type:'login',
            payload:{
                email,
                password
            }
        })

        history.replace('/')
    }

    return (
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className="col-7 align-self-center">
                    <div className='login-form-container'>
                        <h4 className='text-center'> Login  </h4>

                        {
                            error && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                    User not found. Please verify the data
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        }

                        <form onSubmit={ handleSubmit }>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email"
                                    name="email"
                                    className="form-control" 
                                    placeholder="email@email.com" 
                                    value={ email }
                                    onChange={ handleInputChange }
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" 
                                    name="password"
                                    className="form-control" 
                                    placeholder="*****"
                                    value={ password }
                                    onChange={ handleInputChange }
                                    required
                                />
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        <br/>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
