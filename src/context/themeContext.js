import { createContext, useCallback, useReducer } from "react";

const ThemeContext = createContext();
const ThemeDataContext = createContext();

const initState = {
    theme: "dark",
    switchTheme: () => { },
}

const themeContextReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOAD_THEME":
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

    const switchTheme = () => {
        const newTheme = state.theme === "dark" ? "light" : "dark";
        localStorage.setItem("nsw-saved-theme", newTheme);
        dispatch({
            type: "SWITCH_THEME",
            payload: newTheme
        });
    };

    const loadTheme = useCallback(() => {
        console.log("Called load theme");
        const loadedTheme = localStorage.getItem("nsw-saved-theme") ?? "dark";
        dispatch({
            type: "LOAD_THEME",
            payload: loadedTheme,
        });
    }, []);

    return <ThemeContext.Provider value={{
        switchTheme,
        theme: state.theme,
    }}>
        <ThemeDataContext.Provider value={{ loadTheme }}>
            {props.children}
        </ThemeDataContext.Provider>
    </ThemeContext.Provider>
}

export { ThemeContext, ThemeDataContext, ThemeProvider }

