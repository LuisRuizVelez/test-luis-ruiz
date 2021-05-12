import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';

import { LoginPage } from '../pages/LoginPage';
import { PrivateRouters } from './PrivateRouters';
import { PublicRouters } from './PublicRouters';
import { Routers } from './Routers';


export const AppRouter = () => {
    const { user } = useContext(AuthContext)

    return (
        <Router>
          <div>
            <Switch>
              <PublicRouters path='/login' component={ LoginPage } logged={ user?.logged } />
              <PrivateRouters path='/' component={ Routers } logged={ user?.logged } />
            </Switch>
          </div>
        </Router>
      );
}
