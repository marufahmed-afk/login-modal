import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import { GlobalStyles } from './components/theme/Globalstyles';


// Redux
import { Provider } from 'react-redux';
import store from './store';

// Context
import ThemeState from './context/theme/ThemeState';

// component imports
import Home from './components/layout/Home';

const App = () => {

    return (
        <ThemeState>
            <Fragment>
                <GlobalStyles />
                <Provider store={store}>
                    <Router>
                        <Fragment>
                            <Switch>
                                <Route exact path="/" component={Home} />
                            </Switch>
                        </Fragment>
                    </Router>
                </Provider>
            </Fragment>
        </ThemeState>
    );
};

export default App;
