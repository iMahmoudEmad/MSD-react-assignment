import { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { fetchFavoritesRequest } from '../../redux/actions/FavoritesActions';
import { SongsContext } from '../../SongsContext';
import Loading from '../Loading/Loading';
import { fetchSongsRequest } from './../../redux/actions/SongsActions';
import Song from './Song/Song';

const Songs = ({ songs, favorites, songsData, favoritesData }) => {
    const searchVal = useContext(SongsContext);
    const [ page, setPage ] = useState(1);
    const [ favoritesList, setFavoritesList ] = useState([])

    const updateSongsList = () => {
        setPage(page + 1)
        songsData(searchVal, page);
    }
    const updateFavList = () => setFavoritesList(favorites);
    const checkIfSongAddedToFav = id => favoritesList.includes(id);
    const addSongToFav = id => setFavoritesList(favorites.push(id));

    useEffect(() => songsData(searchVal, page), [ songsData, favoritesData, searchVal, page ]);

    return (
        <>
            {songs.loading ? <Loading /> : songs.songs.map((song) => (
                <div>
                    <Song song={ song } key={ song.id } isAddedToFav={ checkIfSongAddedToFav(song.id) } />
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
        favoritesData: () => dispatch(fetchFavoritesRequest())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Songs)
