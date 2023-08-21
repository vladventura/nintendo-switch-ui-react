import { createContext, useReducer } from "react";

const ThemeContext = createContext();

const initState = {
    theme: "dark",
    loadTheme: () => { },
    switchTheme: () => { },
}

const themeContextReducer = (state = initState, action) => {
    switch (action.type) {
        case "SWITCH_THEME":
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state;
    }
};

const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeContextReducer, initState);
    const loadTheme = () => { };
    const switchTheme = () => {
        const newTheme = state.theme === "dark" ? "light" : "dark";
        dispatch({
            type: "SWITCH_THEME",
            payload: newTheme
        });
    };
    return <ThemeContext.Provider value={{
        switchTheme,
        loadTheme,
        theme: state.theme,
    }} {...props} />
}

export { ThemeContext, ThemeProvider }

