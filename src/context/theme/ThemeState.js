import React, { useReducer, useEffect } from 'react';
import ThemeContext from './themeContext';
import themeReducer from './themeReducer';
import { SET_THEME, GET_THEME } from '../types';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../components/theme/Theme';

const ThemeState = (props) => {

    useEffect(() => {
        getTheme();

    }, []);

    const initialState = {
        currentTheme: 'light',
        isDark: false
    };

    const [state, dispatch] = useReducer(themeReducer, initialState);

    // Toggle theme action
    const toggleTheme = (theme) => {
        dispatch({
            type: SET_THEME,
            payload: theme
        });
    };

    const getTheme = () => {
        dispatch({
            type: GET_THEME
        });
    };

    return (
        <ThemeContext.Provider
            value={{
                currentTheme: state.currentTheme,
                isDark: state.isDark,
                toggleTheme
            }}
        >
            <ThemeProvider theme={state.currentTheme === 'light' ? lightTheme : darkTheme}>
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeState;
