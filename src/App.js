import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// component imports
import Home from './components/layout/Home';

const App = () => {
    return (
        <Provider store={store}>
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Fragment>
        </Provider>
    );
};

export default App;
