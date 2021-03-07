import React from 'react'
import Rating from '../Rating/Rating'
import './Search.scss'

const Search = () => {
    const starColor = '#5844af';

    return (
        <div className="search">
            <div className="filter">
                <h2 className="searchTitle">Filter by stars</h2>
                <Rating starColor={ starColor } />
            </div>
            <button className="addSong" title="Add a song">add a song</button>
        </div>
    )
}

export default Search
