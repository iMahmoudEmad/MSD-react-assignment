import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { songsReducer } from './reducers/songsReducer';
import { favoritesReducer } from './reducers/favoritesReducer';

const reducers = combineReducers({ songs: songsReducer, favorites: favoritesReducer });

const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;