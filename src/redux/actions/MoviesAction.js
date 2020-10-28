import AsyncStorage from "@react-native-community/async-storage";

import { 
    MOVIES,
    FAVORITES
} from "@Config/Constants";

import { ApiClient } from "@Config/Api";

export const getMovies = () => {
    return async (dispatch, getState) => {
        return await ApiClient.getMovies()
        .then(response => {
            let moviesOrdenate = _orderByGenre(response.movies);
            return dispatch({
                type: MOVIES,
                payload: moviesOrdenate
            })
        })
    }
}

export const getSearchMovies = (search) => {
    return async (dispatch, getState) => {
        return await ApiClient.getSearchMovies(search)
        .then(response => {
            return _orderByGenre(response.movies);
        });
    }
}

export const getFavorites = () => {
    return async (dispatch, getState) => {
        return await AsyncStorage.getItem("favorites")
        .then((response) => {
            const favorites = JSON.parse(response);
            if (!favorites) {
                dispatch({
                    type: FAVORITES,
                    payload: []
                })
                return [];
            } else {
                dispatch({
                    type: FAVORITES,
                    payload: favorites
                })
                return _orderByGenre(favorites);
            } 
        });
    }
} 

export const updateFavorites = (movie) => {
    return async (dispatch, getState) => {
        return await AsyncStorage.getItem("favorites")
        .then(async (response) => {
            const favorites = JSON.parse(response);
            if (favorites) {
                if (wasFavorite(movie, favorites)) {
                    const popFavorite =  favorites.filter(favorite => favorite.title !== movie.title);
                    await AsyncStorage.setItem("favorites", JSON.stringify(popFavorite))   
                } else {
                    favorites.push(movie);
                    await AsyncStorage.setItem("favorites", JSON.stringify(favorites))   
                }
            } else {
                const client = [];
                client.push(movie);
                await AsyncStorage.setItem("favorites", JSON.stringify(client))
            } 
        });
    }
}

export const wasFavorite = (movie, favorites) => {
    const validate = favorites.filter(favorite => favorite.title == movie.title);
    return validate.length === 0 ? false : true;
}

const _orderByGenre = movies => {
    let genres = [];

    let action = _filterByGenre(movies, "Action");
    let crime = _filterByGenre(movies, "Crime");
    let drama = _filterByGenre(movies, "Drama");
    let animation = _filterByGenre(movies, "Animation");
    let adventure = _filterByGenre(movies, "Adventure");
    let family = _filterByGenre(movies, "Family");
    let thriller = _filterByGenre(movies, "Thriller");
    let biography = _filterByGenre(movies, "Biography");
    let history = _filterByGenre(movies, "History");
    let sciFic = _filterByGenre(movies, "Sci-Fi");
    let romance = _filterByGenre(movies, "Romance");
    let war = _filterByGenre(movies, "War");
    let mystery = _filterByGenre(movies, "Mystery");

    if(action.movies.length !== 0) {
        genres.push(action);
    }
    if(crime.movies.length !== 0) {
        genres.push(crime);
    }
    if(drama.movies.length !== 0) {
        genres.push(drama);
    }
    if(animation.movies.length !== 0) {
        genres.push(animation);
    }
    if(adventure.movies.length !== 0) {
        genres.push(adventure);
    }
    if(family.movies.length !== 0) {
        genres.push(family);
    }
    if(thriller.movies.length !== 0) {
        genres.push(thriller);
    }
    if(biography.movies.length !== 0) {
        genres.push(biography);
    }
    if(history.movies.length !== 0) {
        genres.push(history);
    }
    if(sciFic.movies.length !== 0) {
        genres.push(sciFic);
    }
    if(romance.movies.length !== 0) {
        genres.push(romance);
    }
    if(war.movies.length !== 0) {
        genres.push(war);
    }
    if(mystery.movies.length !== 0) {
        genres.push(mystery);
    }

    return genres;
} 

const _filterByGenre = (movies, genre) => {
    const moviesGenre = movies.filter(movie => {
        return movie.genres.find(genreArrayElement => genreArrayElement == genre);
    })
    
    return {
        name: genre,
        movies: moviesGenre
    }
}

/**
export const getClient = () => {
    return async (dispatch, getState) => {
        return await AsyncStorage.getItem("client")
        .then((response) => {
            const client = JSON.parse(response);
            if (!client) {
                return dispatch({
                    type: STORE_CLIENT,
                    payload: {}
                })
            } else {
                return dispatch({
                    type: STORE_CLIENT,
                    payload: client
                })
            } 
        });
    }
}

export const storeClient = ({ 
    clientId,
    clientName, 
    clientEmail,
}) => {
    return async (dispatch, getState) => {
        const client = {
            clientId,
            clientName,
            clientEmail
        }
        await AsyncStorage.setItem("client", JSON.stringify(client))
        return dispatch({
            type: STORE_CLIENT,
            payload: client
        })
    }
}

export const clearClient = () => {
    return async (dispatch, getState) => {
        await AsyncStorage.clear();
        return dispatch({
            type: CLEAR_CLIENT,
            payload: {}
        })
    }
}
*/