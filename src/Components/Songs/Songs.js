import { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { SongsContext } from '../../SongsContext';
import Loading from '../Loading/Loading';
import { fetchSongsRequest } from './../../redux/actions/SongsActions';
import Song from './Song/Song';

const Songs = ({ songs, songsData, updateData, searchData }) => {
    const searchVal = useContext(SongsContext);
    const [ page, setPage ] = useState(1);

    const updateSongsList = () => {
        setPage(page + 1)
        updateData(page);
    }

    useEffect(() => {
        songsData(searchVal, page)
    }, [ songsData, updateData, searchData ]);

    return (
        <div>
            <h1>{ searchVal }</h1>
            {songs.loading ? <Loading /> : songs.songs.map((song) => (
                <Song song={ song } key={ song.id } inFavorite="false" />
            )) }
            <button onClick={ () => updateSongsList() }>Load More</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { songs: state }
};

const mapDispatchToProps = dispatch => {
    return {
        songsData: (search, pageNum) => dispatch(fetchSongsRequest({ search, pageNum })),
        updateData: (pageNum) => dispatch(fetchSongsRequest({ pageNum })),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Songs)
