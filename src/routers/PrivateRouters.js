import React from 'react'
import { Redirect, Route } from "react-router-dom";

export const PrivateRouters = ({
    logged,
    component:Component,
    ...rest
}) => {
    return (
       <Route {...rest}
            component={ props => logged ? <Component {...props} /> : <Redirect to='/login' />}
       />
    )
}