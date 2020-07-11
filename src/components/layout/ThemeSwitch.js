import React, { useContext } from 'react';

import ThemeContext from '../../context/theme/themeContext';

const ThemeSwitch = () => {

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
        <div className="mode-switch">
            <p>{isDark ? 'Dark Mode' : 'Light Mode'}</p>
            <label className="switch">
                <input type="checkbox" checked={isDark} onClick={handleChange} />
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default ThemeSwitch;
