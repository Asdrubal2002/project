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
    GET_STORES_BY_ARRIVAL_FAIL,
    SET_STORE_LOADING,
    REMOVE_STORE_LOADING
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

export const get_stores_list_page = (page) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${apiUrl}/api/store/get-stores?p=${page}`, config);

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
    dispatch({
        type:SET_STORE_LOADING
    });

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
        dispatch({
            type: REMOVE_STORE_LOADING
        });
    } catch (err) {
        dispatch({
            type: GET_STORE_FAIL
        });
        dispatch({
            type: REMOVE_STORE_LOADING
        });
    }
}

export const get_search_stores = (search, slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${apiUrl}/api/store/search?c=${slug}&s=${search}`, config);

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

export const get_search_stores_page = (search, slug, page) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${apiUrl}/api/store/search?c=${slug}&p=${page}&s=${search}`, config);

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
    dispatch({
        type:SET_STORE_LOADING
    });

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${apiUrl}/api/store/get-stores?order=asc&limit=6`, config);
    
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
        dispatch({
            type: REMOVE_STORE_LOADING
        });
    } catch(err) {
        dispatch({
            type: GET_STORES_BY_ARRIVAL_FAIL
        });
        dispatch({
            type: REMOVE_STORE_LOADING
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


