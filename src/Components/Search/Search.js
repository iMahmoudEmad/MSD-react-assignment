import React from 'react'
import Rating from '../Rating/Rating'
import './Search.scss'

const Search = () => {
    return (
        <div className="search">
            <div className="filter">
                <h2 className="searchTitle">Filter by stars</h2>
                <Rating />
            </div>
            <button className="addSong" title="Add a song">add a song</button>
        </div>
    )
}

export default Search
