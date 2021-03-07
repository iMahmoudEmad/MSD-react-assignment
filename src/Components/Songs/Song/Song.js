import React from 'react'
import Rating from '../../Rating/Rating'
import { FavoriteBorder } from '@emotion-icons/material/FavoriteBorder'
import { Favorite } from '@emotion-icons/material/Favorite'
import './Song.scss'


const Song = ({ song, inFavorite }) => {
    const starColor = '#5844af';
    const favorite = () => {
        inFavorite = !inFavorite;
        console.log(inFavorite)
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
                    <span onClick={ favorite }>
                        { inFavorite ? <FavoriteBorder role="button" /> : <Favorite role="button" /> }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Song
