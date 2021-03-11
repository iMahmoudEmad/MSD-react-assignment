import { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { fetchFavoritesRequest, addFavoriteRequest } from '../../redux/actions/FavoritesActions';
import { SongsContext } from '../../SongsContext';
import Loading from '../Loading/Loading';
import { fetchSongsRequest } from './../../redux/actions/SongsActions';
import Song from './Song/Song';

const Songs = ({ songs, favorites, songsData, favoritesData, addToFavorites }) => {
    const searchVal = useContext(SongsContext);
    const [ page, setPage ] = useState(1);
    const [ favoritesList, setFavoritesList ] = useState([ favorites.favorites ])

    const updateSongsList = () => {
        setPage(page + 1)
        songsData(searchVal, page);
    }
    const isSongAddedToFavBefore = id => favoritesList.some(fav => fav.id === id);

    const addSongToFav = ({ id }) => {
        console.log('isSongAddedToFavBefore', isSongAddedToFavBefore(id))
        if (!isSongAddedToFavBefore(id)) {
            console.log('before', favoritesList)
            setFavoritesList([ ...favoritesList, id ]);
            console.log('after', favoritesList)
            addToFavorites({ id });
        } else {
            return
        };
    }

    useEffect(() => {
        favoritesData();
        songsData(searchVal, page);
    }, [ songsData, favoritesData, searchVal, page ]);

    return (
        <>
            {songs.loading ? <Loading /> : songs.songs.map((song) => (
                <div>
                    <Song song={ song } key={ song.id } isAddedToFav={ isSongAddedToFavBefore(song.id) } addSongToFav={ addSongToFav } />
                </div>
            )) }
            <button onClick={ () => updateSongsList() }>Load More</button>
        </>
    )
}

const mapStateToProps = ({ songs, favorites }) => {
    console.log(songs)
    console.log(favorites)
    return { songs, favorites }
};
const mapDispatchToProps = dispatch => {
    return {
        songsData: (search, pageNum) => dispatch(fetchSongsRequest({ search, pageNum })),
        favoritesData: () => dispatch(fetchFavoritesRequest()),
        addToFavorites: (id) => dispatch(addFavoriteRequest(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Songs)
