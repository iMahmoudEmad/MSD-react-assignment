import { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { fetchFavoritesRequest } from '../../redux/actions/favoritesActions';
import { SongsContext } from '../../SongsContext';
import Loading from '../Loading/Loading';
import { fetchSongsRequest } from '../../redux/actions/songsActions';
import Song from './Song/Song';
import './Songs.scss'

const Songs = ({ songs, favorites, getSongsData, getFavoritesData }) => {
    const searchVal = useContext(SongsContext);
    const [ page, setPage ] = useState(1);

    const updateSongsList = () => {
        setPage(page + 1)
        getSongsData(searchVal, page);
    }
    const isSongAddedToFav = id => {
        if (favorites.favorites) {
            return favorites.favorites.some(fav => fav.id === id)
        }
    };

    useEffect(() => {
        getSongsData(searchVal, page);
        getFavoritesData();
    }, [ getSongsData, getFavoritesData, searchVal, page ]);

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

const mapStateToProps = ({ songs, favorites }) => {
    return { songs, favorites }
};
const mapDispatchToProps = dispatch => {
    return {
        getSongsData: (search, pageNum) => dispatch(fetchSongsRequest({ search, pageNum })),
        getFavoritesData: () => dispatch(fetchFavoritesRequest()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Songs)
