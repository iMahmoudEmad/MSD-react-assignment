import axios from 'axios';
import { FETCH_ERROR, FETCH_SUCCESS } from './SongsTypes';
import { BASE_URL } from '../../api';

const fetchSongsSuccess = (songs) => {
    return {
        type: FETCH_SUCCESS,
        payload: songs
    }
}

const fetchSongsError = (error) => {
    return {
        type: FETCH_ERROR,
        payload: error
    }
}

export const fetchSongsRequest = () => {
    return (dispatch) => {
        axios.get(BASE_URL + 'songs')
            .then(res => dispatch(fetchSongsSuccess(res.data)))
            .catch(err => dispatch(fetchSongsError(err.message)));
    }
}