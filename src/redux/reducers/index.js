import { combineReducers } from "redux";
import Auth from "./auth";
import Alert from "./alert";
import Profile from "./profile";
import Store_Categories from "./store_categories";

export default combineReducers ({
    Auth,
    Alert,
    Profile,
    Store_Categories,

})