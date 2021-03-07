import React from 'react'
import Rating from '../../Rating/Rating'
import { Favorite } from '@emotion-icons/material/Favorite'
import './Song.scss'


const Song = ({ song }) => {
    const starColor = '#5844af';

    return (
        <div className="song">
            <div className="songDetails">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/1200px-Google_Chrome_icon_%28September_2014%29.svg.png" alt="song Name" />
                <div className="songDetailsTitle">
                    <h3>Song Name</h3>
                    <p>Johann Sebastian</p>
                </div>
            </div>
            <div className="songRate">
                <Rating starPoints="10" starColor={ starColor } />
                <Favorite role="button" />
            </div>
        </div>
    )
}

export default Song
