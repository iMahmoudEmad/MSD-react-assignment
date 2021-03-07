import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    songs: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                songs: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                songs: {},
                error: 'Something went wrong!'
            }
        default:
            return state
    }
}