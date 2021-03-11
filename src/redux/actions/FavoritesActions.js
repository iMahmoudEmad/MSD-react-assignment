import { REQUEST_FAVORITES_DATA, RECEIVES_FAVORITES_DATA, FAILURE_FAVORITES_DATA } from '../types/FavoritesTypes';
import axios from 'axios';
import { BASE_URL } from '../../api';

const requestFavoritesData = () => ({ type: REQUEST_FAVORITES_DATA });
const receiveFavoritesData = (favorites) => ({ type: RECEIVES_FAVORITES_DATA, favorites });
const failureFavirutesData = (error) => ({ type: FAILURE_FAVORITES_DATA, error });

export const fetchFavoritesRequest = () => {
    return (dispatch) => {
        dispatch(requestFavoritesData());
        axios.get(`${ BASE_URL }/favorites`)
            .then(res => { dispatch(receiveFavoritesData(res.data)) })
            .catch(err => dispatch(failureFavirutesData(err.message)));
    }
}