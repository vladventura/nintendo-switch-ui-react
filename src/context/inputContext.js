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
            return state;
    }
};

const InputProvider = (props) => {
    const [state, dispatch] = useReducer(inputContextReducer, initState);

    const onKeyDown = (e) => {
        e.preventDefault();
        if (e.keyCode === 87) {
            alert("W press");
        }
        if (e.keyCode === 83) {
            alert("S press");
        }
    };

    const setTotalSets = (n) => {
        dispatch({
            type: "ADD_SET",
            payload: n,
        });
        
    };


    return <InputContext.Provider
        value={{
            onKeyDown,
            setTotalSets,
            state,
        }}
        {...props}
    />

};

export { InputContext, InputProvider };
