import axios from 'axios';
import { REQUEST_SONGS_DATA, FAILURE_SONGS_DATA, RECEIVE_SONGS_DATA, RECEIVE_SONGS_DATA_WITH_SEARCH } from '../types/SongsTypes';

const requestSongsData = () => ({ type: REQUEST_SONGS_DATA, loading: true });
const receiveSongsData = (songs) => ({ type: RECEIVE_SONGS_DATA, songs });
const receiveSongsDataWithSearch = (songs) => ({ type: RECEIVE_SONGS_DATA_WITH_SEARCH, songs });
const failureSongsData = (error) => ({ type: FAILURE_SONGS_DATA, error });

export const fetchSongsRequest = ({ pageNum = 1, search = '', limit = 12 }) => {
    return (dispatch) => {
        dispatch(requestSongsData());
        axios.get(`/songs?q=${ search }&_page=${ pageNum }&_limit=${ limit }`)
            .then(res => {
                (search) ?
                    dispatch(receiveSongsDataWithSearch(res.data)) :
                    dispatch(receiveSongsData(res.data))
            })
            .catch(err => dispatch(failureSongsData(err.message)));
    }
}