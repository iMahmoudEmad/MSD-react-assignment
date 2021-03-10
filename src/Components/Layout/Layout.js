import { useState } from 'react';
import { SongsContext } from '../../SongsContext';
import Navbar from '../Navbar/Navbar';
import Filter from '../../Components/Filter/Filter';
import './Layout.scss';

const Layout = ({ children }) => {
    let [ searchValue, setSearchValue ] = useState('')
    const getSearchValue = (res) => setSearchValue(res.target.value);

    return (
        <SongsContext.Provider value={ searchValue }>
            <header>
                <Navbar changeSearchVal={ getSearchValue } />
            </header>
            <main>
                <div className="container">
                    <Filter />
                    { children }
                </div>
            </main>
        </SongsContext.Provider>
    )
}

export default Layout
