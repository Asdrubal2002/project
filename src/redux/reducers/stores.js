import {
    GET_STORES_SUCCESS,
    GET_STORES_FAIL,
    GET_STORE_SUCCESS,
    GET_STORE_FAIL,
    RELATED_STORES_SUCCESS,
    RELATED_STORES_FAIL,
    SEARCH_STORES_SUCCESS,
    SEARCH_STORES_FAIL,
    GET_STORES_BY_ARRIVAL_SUCCESS,
    GET_STORES_BY_ARRIVAL_FAIL
} from "../actions/types";

const initialState = {
    stores: null,
    stores_arrival: null,
    store: null,
    search_stores: null,
    related_stores: null,
};

export default function Stores(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_STORES_SUCCESS:
            return {
                ...state,
                stores: payload.stores
            }
        case GET_STORES_FAIL:
            return {
                ...state,
                stores: null
            }
        case GET_STORES_BY_ARRIVAL_SUCCESS:
            return {
                ...state,
                stores_arrival: payload.stores
            }
        case GET_STORES_BY_ARRIVAL_FAIL:
            return {
                ...state,
                stores_arrival: null
            }
        case GET_STORE_SUCCESS:
            return {
                ...state,
                store: payload.store
            }
        case GET_STORE_FAIL:
            return {
                ...state,
                store: null
            }
        case RELATED_STORES_SUCCESS:
            return {
                ...state,
                related_stores: payload.related_stores
            }
        case RELATED_STORES_FAIL:
            return {
                ...state,
                related_stores: null
            }
        case SEARCH_STORES_SUCCESS:
            return {
                ...state,
                search_stores: payload.search_stores
            }
        case SEARCH_STORES_FAIL:
            return {
                ...state,
                search_stores: null
            }
        default:
            return state

    }
}
