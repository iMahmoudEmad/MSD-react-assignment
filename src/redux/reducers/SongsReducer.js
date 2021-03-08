import { FAILURE_SONGS_DATA, RECEIVE_SONGS_DATA } from "../actions/SongsTypes"

export const initialState = {
    loading: true,
    error: '',
    songs: ''
}

export const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_SONGS_DATA:
            return {
                loading: false,
                songs: action.songs,
                error: ''
            }
        case FAILURE_SONGS_DATA:
            return {
                loading: false,
                songs: {},
                error: 'Something went wrong!'
            }
        default:
            return state
    }
}