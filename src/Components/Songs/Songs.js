import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSongsRequest } from './../../redux/actions/SongsActions';
import Song from './Song/Song';

const Songs = ({ songs, songsData, updateData }) => {
    const [ page, setPage ] = useState(1)
    useEffect(() => songsData(), [ songsData, updateData ]);

    const updateSongsList = () => {
        setPage(page + 1)
        updateData(page);
    }

    return (
        <div>
            {songs.loading ? <div>...Loading</div> : songs.songs.map((song) => (
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
        songsData: () => dispatch(fetchSongsRequest(1)),
        updateData: (pageNum) => dispatch(fetchSongsRequest(pageNum)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Songs)
