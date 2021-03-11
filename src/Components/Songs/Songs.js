import { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { fetchFavoritesRequest, addFavoriteRequest, deleteFromFavorites } from '../../redux/actions/FavoritesActions';
import { SongsContext } from '../../SongsContext';
import Loading from '../Loading/Loading';
import { fetchSongsRequest } from './../../redux/actions/SongsActions';
import Song from './Song/Song';

const Songs = ({ songs, favorites, getSongsData, getFavoritesData, addToFavorites, deleteFromFavorites }) => {
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

    const addSongToFav = ({ id }) => {
        (!isSongAddedToFav(id)) ? addToFavorites({ id }) : deleteFromFavorites(id);
    }

    useEffect(() => {
        getSongsData(searchVal, page);
        getFavoritesData();
    }, [ getSongsData, getFavoritesData, searchVal, page ]);

    return (
        <>
            {songs.loading ? <Loading /> : songs.songs.map((song) => (
                <div>
                    <Song song={ song } key={ song.id } isAddedToFav={ isSongAddedToFav(song.id) } addSongToFav={ addSongToFav } />
                </div>
            )) }
            <button onClick={ () => updateSongsList() }>Load More</button>
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
        addToFavorites: (id) => dispatch(addFavoriteRequest(id)),
        deleteFromFavorites: (id) => dispatch(deleteFromFavorites(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Songs)
