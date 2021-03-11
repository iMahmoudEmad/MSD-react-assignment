import { useState } from 'react'
import Rating from '../../Rating/Rating'
import { FavoriteBorder } from '@emotion-icons/material/FavoriteBorder'
import { Favorite } from '@emotion-icons/material/Favorite'
import './Song.scss'


const Song = ({ song, isAddedToFav }) => {
    const rateColor = '#5844af';
    const addToFavColor = '#e05959';
    const [ isFavorite, setIsFavorite ] = useState(isAddedToFav)

    const toggleFavorite = () => setIsFavorite(!isFavorite);

    const checkIfSongAddedToFavorite = () => {
        if (isFavorite) {
            return <Favorite role="button" title="Remove from favorite" style={ { color: addToFavColor } } />
        } else {
            return <FavoriteBorder role="button" title="Add to favorite" />
        }
    }

    return (
        <div className="song">
            <img src={ song.images } alt={ song.title } />
            <div className="songDetails">
                <div className="songDetailsTitle">
                    <h3>{ song.title }</h3>
                    <p>{ song.artist }</p>
                </div>
                <div className="songRate">
                    <Rating starPoints={ song.level } rateColor={ rateColor } />
                    <span onClick={ toggleFavorite } role="button" className="addToFavIconButton">
                        { checkIfSongAddedToFavorite() }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Song
