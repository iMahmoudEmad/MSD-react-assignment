import React from 'react'
import Rating from '../Rating/Rating'
import './Filter.scss'

const Filter = () => {
    const starColor = '#5844af';

    return (
        <div className="filter">
            <div>
                <h2 className="filterTitle">Filter by stars</h2>
                <Rating starColor={ starColor } />
            </div>
            <button className="addSong" title="Add a song">add a song</button>
        </div>
    )
}

export default Filter
