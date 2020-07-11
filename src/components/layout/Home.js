import React, { Fragment } from 'react';

// component imports
import Login from '../login/Login';
import ThemeSwitch from './ThemeSwitch';


const Home = () => {

    return (
        <Fragment>
            <ThemeSwitch />
            <Login />
        </Fragment>
    );
};

export default Home;
