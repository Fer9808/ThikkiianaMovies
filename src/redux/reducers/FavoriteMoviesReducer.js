import { 
    FAVORITES,
} from '@Config/Constants';

const initialState = []

export default function FavoriteMoviesReducer(state = initialState, { type, payload }) {
    switch(type) {
        case FAVORITES:
            return payload
        default:
        return state
    }
}