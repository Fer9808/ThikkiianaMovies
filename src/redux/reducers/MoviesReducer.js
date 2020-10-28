import { 
    MOVIES,
} from '@Config/Constants';

const initialState = null

export default function MoviesReducer(state = initialState, { type, payload }) {
    switch(type) {
        case MOVIES:
            return payload
        default:
        return state
    }
}