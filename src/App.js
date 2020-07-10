import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';


// component imports
import Login from './components/login/Login';



const App = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Login} />
            </Switch>
        </Fragment>
    );
};

export default App;
