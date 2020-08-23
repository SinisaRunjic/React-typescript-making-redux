import React from 'react';
import { IState, IAction } from './interfaces';
/* Store file needs to have initial store to define all of properties that will be used*/
const initialState: IState = {
    episodes: [],
    favourites: []
};
// creating store with react hooks
export const Store = React.createContext<IState | any>(initialState);

// making reducer 
const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case "FETCH_DATA":
            return {
                ...state,
                episodes: action.payload
            }
        case "ADD_FAV":
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            }
        case "REMOVE_FAV":
            return {
                ...state,
                favourites: [...action.payload]
            }
        default:
            return state
    }
}

// making store provider
export const StoreProvider = (props: any): JSX.Element => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>
}