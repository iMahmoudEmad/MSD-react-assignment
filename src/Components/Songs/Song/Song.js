import { useState } from 'react'
import Rating from '../../Rating/Rating'
import { FavoriteBorder } from '@emotion-icons/material/FavoriteBorder'
import { Favorite } from '@emotion-icons/material/Favorite'
import './Song.scss'


const Song = ({ song, inFavorite }) => {
    const starColor = '#5844af';
    const [ isFavorite, setIsFavorite ] = useState(inFavorite)

    const favorite = () => setIsFavorite(!isFavorite);

    const checkIfSongAddedToFavorite = () => {
        if (isFavorite) {
            return <FavoriteBorder role="button" title="Added to favorite" />
        } else {
            return <Favorite role="button" title="Remove from favorite" />
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
                    <Rating starPoints={ song.level } starColor={ starColor } />
                    <span onClick={ favorite } role="button">
                        { checkIfSongAddedToFavorite() }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Song
