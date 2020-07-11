import React, { Fragment, useContext } from 'react';

// component imports
import Login from '../login/Login';


import ThemeContext from '../../context/theme/themeContext';

const Home = () => {

    const themeContext = useContext(ThemeContext);

    const { isDark, toggleTheme } = themeContext;

    const handleChange = () => {
        if (isDark) {
            toggleTheme('light');
        } else {
            toggleTheme('dark');
        }
    };

    return (
        <Fragment>
            <div className="mode-switch">
                <p>{isDark ? 'Dark Mode' : 'Light Mode'}</p>
                <label className="switch">
                    <input type="checkbox" checked={isDark} onClick={handleChange} />
                    <span className="slider round"></span>
                </label>
            </div>
            <Login />
        </Fragment>
    );
};

export default Home;
