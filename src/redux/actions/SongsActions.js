import axios from 'axios';
import { FAILURE_SONGS_DATA, RECEIVE_SONGS_DATA } from './SongsTypes';
import { BASE_URL } from '../../api';

const fetchSongsSuccess = (songs) => {
    return {
        type: RECEIVE_SONGS_DATA,
        songs
    }
}

const fetchSongsError = (error) => {
    return {
        type: FAILURE_SONGS_DATA,
        songs: error
    }
}

export const fetchSongsRequest = (pageNum = 1, limit = 12) => {
    return (dispatch) => {
        axios.get(`${ BASE_URL }/songs?_page=${ pageNum }&_limit=${ limit }`)
            .then(res => dispatch(fetchSongsSuccess(res.data)))
            .catch(err => dispatch(fetchSongsError(err.message)));
    }
}