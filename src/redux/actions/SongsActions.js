import axios from 'axios';
import { REQUEST_FAVORITES_DATA, RECEIVES_FAVORITES_DATA, FAILURE_FAVORITES_DATA, REQUEST_SONGS_DATA, FAILURE_SONGS_DATA, RECEIVE_SONGS_DATA, RECEIVE_SONGS_DATA_WITH_SEARCH } from './SongsTypes';
import { BASE_URL } from '../../api';

const requestFavoritesData = () => ({ type: REQUEST_FAVORITES_DATA });
const receiveFavoritesData = (favorites) => ({ type: RECEIVES_FAVORITES_DATA, favorites });
const failureFavirutesData = (error) => ({ type: FAILURE_FAVORITES_DATA, error });

const requestSongsData = () => ({ type: REQUEST_SONGS_DATA, loading: true });
const receiveSongsData = (songs) => ({ type: RECEIVE_SONGS_DATA, songs });
const receiveSongsDataWithSearch = (songs) => ({ type: RECEIVE_SONGS_DATA_WITH_SEARCH, songs });
const failureSongsData = (error) => ({ type: FAILURE_SONGS_DATA, error });

export const fetchFavoritesRequest = () => {
    return (dispatch) => {
        dispatch(requestFavoritesData());
        axios.get(`${ BASE_URL }/favorites`)
            .then(res => { dispatch(receiveFavoritesData(res.data)) })
            .catch(err => dispatch(failureFavirutesData(err.message)));
    }
}

export const fetchSongsRequest = ({ pageNum = 1, search = '', limit = 12 }) => {
    return (dispatch) => {
        dispatch(requestSongsData());
        axios.get(`${ BASE_URL }/songs?q=${ search }&_page=${ pageNum }&_limit=${ limit }`)
            .then(res => {
                (search) ?
                    dispatch(receiveSongsDataWithSearch(res.data)) :
                    dispatch(receiveSongsData(res.data))
            })
            .catch(err => dispatch(failureSongsData(err.message)));
    }
}