import React from 'react'
import Rating from '../../Rating/Rating'
import { FavoriteBorder } from '@emotion-icons/material/FavoriteBorder'
import './Song.scss'


const Song = ({ song }) => {
    const starColor = '#5844af';

    return (
        <div className="song">
            <div className="songDetails">
                <img src={ song.images } alt={ song.title } />
                <div className="songDetailsTitle">
                    <h3>{ song.title }</h3>
                    <p>{ song.artist }</p>
                </div>
            </div>
            <div className="songRate">
                <Rating starPoints={ song.level } starColor={ starColor } />
                <FavoriteBorder role="button" />
            </div>
        </div>
    )
}

export default Song
