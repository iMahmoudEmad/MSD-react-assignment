import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSongsRequest } from './../../redux/actions/SongsActions';
import Song from './Song/Song';

const page = 1;

const Songs = ({ songs, songsData }) => {
    useEffect(() => songsData(), []);


    return (
        <div>
            {songs.loading ? <div>...Loading</div> : songs.songs.map((song) => (
                <Song song={ song } key={ song.id } inFavorite="false" />
            )) }
        </div>
    )
}

const mapStateToProps = (state) => {
    return { songs: state }
};

const mapDispatchToProps = dispatch => {
    return {
        songsData: () => dispatch(fetchSongsRequest(page)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Songs)
