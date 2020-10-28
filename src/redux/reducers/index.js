import { combineReducers } from "redux";
import MoviesReducer from "./MoviesReducer";
import FavoriteMoviesReducer from "./FavoriteMoviesReducer";

export default combineReducers({
    MoviesReducer,
    FavoriteMoviesReducer
});