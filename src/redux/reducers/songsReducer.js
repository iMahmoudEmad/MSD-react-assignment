import { REQUEST_SONGS_DATA, FAILURE_SONGS_DATA, RECEIVE_SONGS_DATA, RECEIVE_SONGS_DATA_WITH_SEARCH } from "../types/songsTypes"

export const initialState = {
    loading: true,
    error: '',
    songs: ''
}

export const songsReducer = (state = initialState, { type, songs, error }) => {
    switch (type) {
        case REQUEST_SONGS_DATA:
            return {
                loading: true,
                songs: state.songs,
                error: '',
            }
        case RECEIVE_SONGS_DATA_WITH_SEARCH:
            return {
                loading: false,
                songs,
                error: ''
            }
        case RECEIVE_SONGS_DATA:
            return {
                loading: false,
                songs: [ ...state.songs, ...songs ],
                error: ''
            }
        case FAILURE_SONGS_DATA:
            return {
                loading: false,
                songs: '',
                error: error
            }
        default:
            return { ...state }
    }
}