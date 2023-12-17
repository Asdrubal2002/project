import axios from 'axios';
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
} from './types';

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;


export const get_stores = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${apiUrl}/api/store/get-stores`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_STORES_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_STORES_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: GET_STORES_FAIL
        });
    }
}

export const get_store = (storeSlug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${apiUrl}/api/store/store/${storeSlug}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_STORE_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_STORE_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_STORE_FAIL
        });
    }
}

export const get_related_stores = (storeSlug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${apiUrl}/api/store/related/${storeSlug}`, config);

        if (res.status === 200 && !res.data.error) {
            dispatch({
                type: RELATED_STORES_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: RELATED_STORES_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: RELATED_STORES_FAIL
        });
    }
}

export const get_search_stores = (search, category_id) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({
        search,
        category_id
    });

    try {
        const res = await axios.post(`${apiUrl}/api/store/search`, body, config);

        if (res.status === 200) {
            dispatch({
                type: SEARCH_STORES_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: SEARCH_STORES_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: SEARCH_STORES_FAIL
        });
    }
}

export const get_stores_by_arrival = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${apiUrl}/api/store/get-stores?order=asc&limit=3`, config);
    
        if (res.status === 200) {
            dispatch({
                type: GET_STORES_BY_ARRIVAL_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_STORES_BY_ARRIVAL_FAIL
            });
        }
    } catch(err) {
        dispatch({
            type: GET_STORES_BY_ARRIVAL_FAIL
        });
    }
}