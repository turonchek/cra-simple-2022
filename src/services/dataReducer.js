import { ACTION_TYPES } from "./dataActionTypes";

export const INITIAL_STATE = {
    loading: false,
    products: [],
    categories:[],
    error: false,
};

export const dataReducer = (state, action) => {
    switch (action.type) {
    case ACTION_TYPES.FETCH_START:
        return {
        loading: true,
        error: false,
        products: [],
        categories:[],
        };
    case ACTION_TYPES.FETCH_SUCCESS:
        return {
        ...state,
        loading: false,
        products: action.payload[1],
        categories: action.payload[0],
        };
    case ACTION_TYPES.FETCH_ERROR:
        return {
        error: true,
        loading: false,
        products: [],
        categories:[],
        };
    default:
        return state;
    }
};