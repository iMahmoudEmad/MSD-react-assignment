import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { songsReducer } from './reducers/SongsReducer';

const store = createStore(songsReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;