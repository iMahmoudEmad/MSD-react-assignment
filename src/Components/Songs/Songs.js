import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSongsRequest } from '../../redux/actions/SongsActions';
import Song from './Song/Song';

const Songs = ({ songs, fetchSongs }) => {
    useEffect(() => {
        fetchSongs();
        console.log(songs)
    }, []);
    const page = 1;

    return (
        <div>
            {songs.loading ? <div>...Loading</div> : songs.songs.map((song) => (
                <Song song={ song } key={ song.id } inFavorite="false" />
            )) }
            <button onClick={ fetchSongsRequest(page++) }>Load more</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        songs: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSongs: () => dispatch(fetchSongsRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs)
