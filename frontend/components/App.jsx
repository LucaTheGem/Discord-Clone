import React from "react";
import { Route, Switch } from 'react-router-dom';

import CreateUserContainer from './session/create_user_form_container';
import LoginUserContainer from './session/login_user_form_container';
import SplashContainer from './splash/splash_container';
import MainAppContainer from "./main_app_parts/friends_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Switch>
            <Route exact path='/' component={SplashContainer} />
            <AuthRoute path='/register' component={CreateUserContainer} />
            <AuthRoute path='/login' component={LoginUserContainer} />
            <ProtectedRoute path='/app' component={MainAppContainer} />
        </Switch>
    </div>
);

export default App;