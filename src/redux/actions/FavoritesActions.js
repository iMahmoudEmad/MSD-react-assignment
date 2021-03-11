import { REQUEST_FAVORITES_DATA, RECEIVES_FAVORITES_DATA, ADD_FAVORITES_DATA, DELETE_FAVORITES_DATA, FAILURE_FAVORITES_DATA } from '../types/FavoritesTypes';
import axios from 'axios';
import { BASE_URL } from '../../api';

const requestFavoritesData = () => ({ type: REQUEST_FAVORITES_DATA });
const receiveFavoritesData = (favorites) => ({ type: RECEIVES_FAVORITES_DATA, favorites });
const addFavoritesData = (favorite) => ({ type: ADD_FAVORITES_DATA, favorite });
const deleteFromFavoritesData = (favorite) => ({ type: DELETE_FAVORITES_DATA, favorite });
const failureFavirutesData = (error) => ({ type: FAILURE_FAVORITES_DATA, error });

export const fetchFavoritesRequest = () => {
    return (dispatch) => {
        dispatch(requestFavoritesData());
        axios.get(`${ BASE_URL }/favorites`)
            .then(res => dispatch(receiveFavoritesData(res.data)))
            .catch(err => dispatch(failureFavirutesData(err.message)));
    }
}

export const addFavoriteRequest = (id) => {
    return (dispatch) => {
        axios.post(`${ BASE_URL }/favorites`, id)
            .then(res => { dispatch(addFavoritesData(res.data)) })
            .catch(err => dispatch(failureFavirutesData(err.message)));
    }
}

export const deleteFromFavorites = (id) => {
    return (dispatch) => {
        axios.delete(`${ BASE_URL }/favorites/${ id }`)
            .then(res => { dispatch(deleteFromFavoritesData(res.data)) })
            .catch(err => dispatch(failureFavirutesData(err.message)));
    }
}