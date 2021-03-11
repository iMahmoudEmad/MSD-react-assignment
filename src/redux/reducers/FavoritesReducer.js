import { REQUEST_FAVORITES_DATA, RECEIVES_FAVORITES_DATA, FAILURE_FAVORITES_DATA } from '../types/FavoritesTypes';

export const initialState = {
    loading: true,
    error: '',
    favorites: ''
}

export const favoritesReducer = (state = initialState, { type, favorites, error }) => {
    switch (type) {
        case REQUEST_FAVORITES_DATA:
            return {
                loading: true,
                favorites: [ ...state.favorites ],
                error: '',
            }
        case RECEIVES_FAVORITES_DATA:
            return {
                loading: false,
                favorites,
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