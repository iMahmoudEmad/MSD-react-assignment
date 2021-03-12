import { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoritesRequest } from '../../redux/actions/favoritesActions';
import { SongsContext } from '../../SongsContext';
import Loading from '../Loading/Loading';
import { fetchSongsRequest } from '../../redux/actions/songsActions';
import Song from './Song/Song';
import './Songs.scss'

const Songs = () => {
    const searchVal = useContext(SongsContext);
    const [ page, setPage ] = useState(1);
    const songs = useSelector(state => state.songs);
    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();

    const updateSongsList = () => {
        setPage(page + 1)
        dispatch(fetchSongsRequest(searchVal, page));
    }
    const isSongAddedToFav = id => {
        if (favorites.favorites) {
            return favorites.favorites.some(fav => fav.id === id);
        }
    };

    useEffect(() => {
        dispatch(fetchFavoritesRequest());
        dispatch(fetchSongsRequest({ search: searchVal, pageNum: page }));
    }, [ dispatch, searchVal, page ]);

    const checkIfLoadingWorks = () => {
        if (!songs.loading) {
            return (<div className="loadMore">
                <button onClick={ () => updateSongsList() }>Load More</button>
            </div>)
        }
    }

    return (
        <>
            {songs.loading ? <Loading /> : songs.songs.map((song) => (
                <Song song={ song } key={ song.id } isAddedToFav={ isSongAddedToFav(song.id) } />
            )) }
            {checkIfLoadingWorks() }
        </>
    )
}

export default Songs;
