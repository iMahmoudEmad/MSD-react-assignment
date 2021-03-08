import axios from 'axios';
import { REQUEST_SONGS_DATA, FAILURE_SONGS_DATA, RECEIVE_SONGS_DATA } from './SongsTypes';
import { BASE_URL } from '../../api';

const requestSongsData = () => ({ type: REQUEST_SONGS_DATA });

export const receiveSongsData = (songs) => ({ type: RECEIVE_SONGS_DATA, songs });

export const failureSongsData = (error) => ({ type: FAILURE_SONGS_DATA, error });

export const fetchSongsRequest = (pageNum = 1, limit = 12) => {
    return (dispatch) => {
        dispatch(requestSongsData);
        axios.get(`${ BASE_URL }/songs?_page=${ pageNum }&_limit=${ limit }`)
            .then(res => dispatch(receiveSongsData(res.data)))
            .catch(err => dispatch(failureSongsData(err.message)));
    }
}