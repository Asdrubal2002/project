import axios from 'axios';

import { 
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    SET_PRODUCTS_LOADING, 
    REMOVE_PRODUCTS_LOADING,
    GET_PRODUCTS_LIST_BY_CATEGORIES_STORE_SUCCESS,
    GET_PRODUCTS_LIST_BY_CATEGORIES_STORE_FAIL,
    SET_PRODUCTS_LIST_BY_CATEGORIES_STORE_LOADING,
    REMOVE_PRODUCTS_LIST_BY_CATEGORIES_STORE_LOADING
     } from './types';

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;


export const get_products = (storeSlug) => async dispatch => {
    dispatch({
        type:SET_PRODUCTS_LOADING
    });

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${apiUrl}/api/product/products/${storeSlug}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_PRODUCTS_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PRODUCTS_FAIL
            });
        }
        dispatch({
            type: REMOVE_PRODUCTS_LOADING
        });
    } catch (err) {
        dispatch({
            type: GET_PRODUCTS_FAIL
        });
        dispatch({
            type: REMOVE_PRODUCTS_LOADING
        });
    }
}

export const get_products_list_page = (storeSlug, page) => async dispatch => {
    dispatch({
        type:SET_PRODUCTS_LOADING
    });

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${apiUrl}/api/product/products/${storeSlug}?p=${page}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_PRODUCTS_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PRODUCTS_FAIL
            });
        }
        dispatch({
            type: REMOVE_PRODUCTS_LOADING
        });
    } catch (err) {
        dispatch({
            type: GET_PRODUCTS_FAIL
        });
        dispatch({
            type: REMOVE_PRODUCTS_LOADING
        });
    }
}

export const get_products_by_category = (storeSlug, categorySlug) => async dispatch => {
    dispatch({
        type:SET_PRODUCTS_LIST_BY_CATEGORIES_STORE_LOADING
    });

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${apiUrl}/api/product/product/${storeSlug}/${categorySlug}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_PRODUCTS_LIST_BY_CATEGORIES_STORE_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PRODUCTS_LIST_BY_CATEGORIES_STORE_FAIL
            });
        }
        dispatch({
            type: REMOVE_PRODUCTS_LIST_BY_CATEGORIES_STORE_LOADING
        });
    } catch (err) {
        dispatch({
            type: GET_PRODUCTS_LIST_BY_CATEGORIES_STORE_FAIL
        });
        dispatch({
            type: REMOVE_PRODUCTS_LIST_BY_CATEGORIES_STORE_LOADING
        });
    }
}

export const get_products_by_category_page = (storeSlug, categorySlug, page) => async dispatch => {
    dispatch({
        type:SET_PRODUCTS_LIST_BY_CATEGORIES_STORE_LOADING
    });

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${apiUrl}/api/product/product/${storeSlug}/${categorySlug}?p=${page}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_PRODUCTS_LIST_BY_CATEGORIES_STORE_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PRODUCTS_LIST_BY_CATEGORIES_STORE_FAIL
            });
        }
        dispatch({
            type: REMOVE_PRODUCTS_LIST_BY_CATEGORIES_STORE_LOADING
        });
    } catch (err) {
        dispatch({
            type: GET_PRODUCTS_LIST_BY_CATEGORIES_STORE_FAIL
        });
        dispatch({
            type: REMOVE_PRODUCTS_LIST_BY_CATEGORIES_STORE_LOADING
        });
    }
}
