import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';


// component imports
import Login from './components/login/Login';
import Test from './components/Test';


const App = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Test} />
            </Switch>
        </Fragment>
    );
};

export default App;
