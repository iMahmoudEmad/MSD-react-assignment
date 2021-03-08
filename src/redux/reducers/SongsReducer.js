import { FETCH_ERROR, FETCH_SUCCESS } from "../actions/SongsTypes"

export const initialState = {
    loading: true,
    error: '',
    songs: ''
}

export const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return {
                loading: false,
                songs: action.payload,
                error: ''
            }
        case FETCH_ERROR:
            return {
                loading: false,
                songs: {},
                error: 'Something went wrong!'
            }
        default:
            return state
    }
}