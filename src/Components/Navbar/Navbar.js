import { useState } from 'react'
import './Navbar.scss'
import logo from './../../assets/images/logo.png'
import { Search } from '@emotion-icons/material/Search'
import { Person } from '@emotion-icons/material/Person'

const Navbar = ( props ) => {
    const productName = "ViuLive"
    const [ searchVal, setSearchVal ] = useState( '' )

    const detectSearchValue = ( e ) => setSearchVal( e.target.value )

    return (
        <nav>
            <img className="logo" src={ logo } alt={ productName } />

            <div className="searchInput">
                <input type="text" value={ searchVal } placeholder="Search..." onChange={ e => detectSearchValue( e ) } />
                <Search className="searchIcon" title="Search" role="button" />
            </div>

            <div className="userDetails">
                <div className="userIcon">
                    <Person role="button" />
                </div>
                <span className="welcomeMessage">welcome to { productName }</span>
            </div>
        </nav>
    )
}

export default Navbar
