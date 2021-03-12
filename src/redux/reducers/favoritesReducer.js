import { REQUEST_FAVORITES_DATA, RECEIVES_FAVORITES_DATA, ADD_FAVORITES_DATA, FAILURE_FAVORITES_DATA } from '../types/favoritesTypes';

export const initialState = {
    loading: true,
    error: '',
    favorites: ''
}

export const favoritesReducer = (state = initialState, { type, favorites, favorite, error }) => {
    switch (type) {
        case REQUEST_FAVORITES_DATA:
            return {
                loading: true,
                favorites: state.favorites,
                error: '',
            }
        case RECEIVES_FAVORITES_DATA:
            return {
                loading: false,
                favorites: [ ...state.favorites, ...favorites ],
                error: ''
            }
        case ADD_FAVORITES_DATA:
            return {
                loading: false,
                favorites: [ ...state.favorites, favorite ],
                error: ''
            }
        case FAILURE_FAVORITES_DATA:
            return {
                loading: false,
                favorites: '',
                error: error
            }
        default:
            return { ...state }
    }
}