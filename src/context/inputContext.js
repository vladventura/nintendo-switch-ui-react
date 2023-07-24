import { createContext, useReducer } from "react";


const InputContext = createContext();

const initState = {
    activeSet: 0,
    setNumber: 0,
    onKeyDown: (e) => { },
    setTotalSets: (n) => {},
};

const inputContextReducer = (state = initState, action) => {
    switch (action.type) {
        case "ON_KEY_DOWN":
            return {
                ...state,
                activeSet: action.payload,
            };
        case "SET_TOTAL_SETS":
            return {
                ...state,
                setNumber: action.payload
            }
        default:
            return {...state};
    }
};

const InputProvider = (props) => {
    const [state, dispatch] = useReducer(inputContextReducer, initState);

    const onKeyDown = (e) => {
        e.preventDefault();
        const currentActiveSet = state.activeSet;
        let result = 0;
        if (e.keyCode === 87) {
            result = (currentActiveSet - 1 < 0) ? 0 : currentActiveSet - 1; 
            dispatch({
                type: "ON_KEY_DOWN",
                payload: result
            });

        }
        if (e.keyCode === 83) {
            result = (currentActiveSet + 1) >= state.setNumber ? currentActiveSet : currentActiveSet + 1;
            dispatch({
                type: "ON_KEY_DOWN",
                payload: result
            });
        }
    };

    const setTotalSets = (n) => {
        dispatch({
            type: "SET_TOTAL_SETS",
            payload: n,
        });
        
    };


    return <InputContext.Provider
        value={{
            onKeyDown,
            setTotalSets,
            activeSet: state.activeSet,
            setNumber: state.setNumber,
        }}
        {...props}
    />

};

export { InputContext, InputProvider };
