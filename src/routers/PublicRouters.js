import React from 'react'
import { Redirect, Route } from "react-router-dom";

export const PublicRouters = ({
    logged,
    component:Component,
    ...rest
}) => {
    return (
       <Route {...rest}
            component={ props => logged ? <Redirect to='/home'/> :  <Component {...props} />}
       />
    )
}