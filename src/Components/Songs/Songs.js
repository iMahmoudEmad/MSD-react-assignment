import { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { fetchFavoritesRequest, addFavoriteRequest, deleteFromFavorites } from '../../redux/actions/FavoritesActions';
import { SongsContext } from '../../SongsContext';
import Loading from '../Loading/Loading';
import { fetchSongsRequest } from './../../redux/actions/SongsActions';
import Song from './Song/Song';

const Songs = ({ songs, favorites, songsData, favoritesData, addToFavorites, deleteFromFavorites }) => {
    console.log('favorites.favoritesfavorites.favoritesfavorites.favorites', favorites.favorites)
    const searchVal = useContext(SongsContext);
    const [ page, setPage ] = useState(1);
    const [ favoritesList, setFavoritesList ] = useState([ ...favorites.favorites ])

    const updateSongsList = () => {
        setPage(page + 1)
        songsData(searchVal, page);
    }
    const isSongAddedToFav = id => favoritesList.some(fav => fav.id === id);

    const addSongToFav = ({ id }) => {
        if (!isSongAddedToFav(id)) {
            setFavoritesList([ ...favoritesList, { id } ]);
            addToFavorites({ id });
        } else {
            deleteFromFavorites(id)
        };
    }

    useEffect(() => {
        songsData(searchVal, page);
        favoritesData();
    }, [ songsData, favoritesData, searchVal, page ]);

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
        songsData: (search, pageNum) => dispatch(fetchSongsRequest({ search, pageNum })),
        favoritesData: () => dispatch(fetchFavoritesRequest()),
        addToFavorites: (id) => dispatch(addFavoriteRequest(id)),
        deleteFromFavorites: (id) => dispatch(deleteFromFavorites(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Songs)
