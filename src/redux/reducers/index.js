import { combineReducers } from "redux";
import Auth from "./auth";
import Alert from "./alert";
import Profile from "./profile";
import Store_Categories from "./store_categories";
import Stores from "./stores";
import Products from "./products";
import Store_Categories_Products from "./product_categories";

export default combineReducers ({
    Auth,
    Alert,
    Profile,
    Store_Categories,
    Stores,
    Products,
    Store_Categories_Products,
})