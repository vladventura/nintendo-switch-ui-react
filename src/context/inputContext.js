import { createContext, useReducer } from "react";


const InputContext = createContext();

const initState = {
    items: [{
        currentIndex: 0,
        set: [],
    },],
    activeSet: 0,
    setActiveSet: (index) => { },
    setCurrentIndex: (index) => { },
    addActiveSet: (activeSet) => { },
};

const inputContextReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_ACTIVE_SET":
            return {
                ...state,
                items: [...items, action.payload]
            };
        case "SET_CURRENT_INDEX":
            const spy = state.items;
            spy[state.activeSet].currentIndex = action.payload;
            return {
                ...state,
                items: [...spy]
            };
        case "SET_ACTIVE_SET":
            return {
                ...state,
                activeSet: action.payload
            };
        default:
            return state;
    }
};

const SocketProvider = (props) => {
    const [state, dispatch] = useReducer(inputContextReducer, initState);
};
