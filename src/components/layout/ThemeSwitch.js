import React, { useContext } from 'react';
import { motion } from 'framer-motion';

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
        <motion.div className="mode-switch"
            initial={{ y: -400 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 80 }}
        >
            <p className="mode">{isDark ? 'Dark Mode' : 'Light Mode'}</p>
            <label className="switch">
                <input type="checkbox" checked={isDark} onClick={handleChange} />
                <span className="slider round"></span>
            </label>
        </motion.div>
    );
};

export default ThemeSwitch;
