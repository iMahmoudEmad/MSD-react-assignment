import { useEffect, useState } from 'react'
import Song from './Song/Song'
import { BASE_URL } from '../../api'
import axios from 'axios'

const Songs = () => {
    const useCustomHook = (url) => {
        const [ songs, setSongs ] = useState(null);
        const [ loading, setLoading ] = useState(true);

        useEffect(async () => {
            const data = await axios.get(url).then(res => res.data);
            setSongs(data);
            setLoading(false);
        }, []);

        return { songs, loading };
    }

    const { songs, loading } = useCustomHook(BASE_URL + 'songs')

    return (
        <div>
            {loading ? <div>...Loading</div> : songs.map((song) => (
                <Song song={ song } key={ song.id } inFavorite="false" />
            )) }
        </div>
    )
}

export default Songs
