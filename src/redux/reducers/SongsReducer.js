import { FAILURE_SONGS_DATA, RECEIVE_SONGS_DATA } from "../actions/SongsTypes"

export const initialState = {
    loading: true,
    error: '',
    songs: ''
}

export const songsReducer = (state = initialState, { type, songs, error }) => {
    switch (type) {
        case RECEIVE_SONGS_DATA:
            return {
                loading: false,
                songs,
                error: ''
            }
        case FAILURE_SONGS_DATA:
            return {
                loading: false,
                songs: {},
                error: error
            }
        default:
            return { ...state }
    }
}