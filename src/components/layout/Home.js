import React from 'react';


// component imports
import Login from '../login/Login';
import ThemeSwitch from './ThemeSwitch';


const Home = () => {

    return (
        <div>
            <ThemeSwitch />
            <Login />
        </div>
    );
};

export default Home;
