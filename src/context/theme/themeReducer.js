import { SET_THEME, GET_THEME } from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_THEME:
            return {
                ...state,
                currentTheme: localStorage.getItem('theme'),
                isDark: localStorage.getItem('theme') === 'dark' ? true : false
            };
        case SET_THEME:
            localStorage.setItem('theme', action.payload);
            return {
                ...state,
                isDark: !state.isDark,
                currentTheme: action.payload
            };
        default:
            return state;
    }
};
