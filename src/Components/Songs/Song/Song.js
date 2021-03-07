import React from 'react'
import Rating from '../../Rating/Rating'
import { Favorite } from '@emotion-icons/material/Favorite'
import './Song.scss'


const Song = ({ song }) => {
    return (
        <div className="song">
            <img src="#" alt="song Name" />
            <div className="songDetails">
                <h3>Song Name</h3>
                <p>Johann Sebastian</p>
            </div>
            <div className="songRate">
                <Rating />
                <Favorite role="button" />
            </div>
        </div>
    )
}

export default Song
