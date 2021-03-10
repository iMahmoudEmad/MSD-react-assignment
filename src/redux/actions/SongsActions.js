import axios from 'axios';
import { REQUEST_SONGS_DATA, FAILURE_SONGS_DATA, RECEIVE_SONGS_DATA } from './SongsTypes';
import { BASE_URL } from '../../api';

const requestSongsData = () => ({ type: REQUEST_SONGS_DATA, loading: true });
const receiveSongsData = (songs) => ({ type: RECEIVE_SONGS_DATA, songs });
const failureSongsData = (error) => ({ type: FAILURE_SONGS_DATA, error });

export const fetchSongsRequest = ({ pageNum = 1, search = '', limit = 12 }) => {
    console.log('pageNum', pageNum);
    console.log('search', search);
    console.log('limit', limit);
    console.log('---------------------');
    return (dispatch) => {
        dispatch(requestSongsData());
        axios.get(`${ BASE_URL }/songs?q=${ search }&_page=${ pageNum }&_limit=${ limit }`)
            .then(res => dispatch(receiveSongsData(res.data)))
            .catch(err => dispatch(failureSongsData(err.message)));
    }
}