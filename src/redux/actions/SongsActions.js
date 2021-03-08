import { REQUEST_SONGS_DATA, FAILURE_SONGS_DATA, RECEIVE_SONGS_DATA } from './SongsTypes';

const requestSongsData = () => ({ type: REQUEST_SONGS_DATA });

const receiveSongsData = (songs) => ({ type: RECEIVE_SONGS_DATA, songs });

const failureSongsData = (error) => ({ type: FAILURE_SONGS_DATA, error });