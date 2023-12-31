import axios from 'axios';

import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL, SET_PRODUCTS_LOADING, REMOVE_PRODUCTS_LOADING } from './types';

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
        const res = await axios.get(`${apiUrl}/api/product/product/${storeSlug}`, config);

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