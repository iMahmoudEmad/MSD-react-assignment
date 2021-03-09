import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Layout.scss'

const Layout = ({ children }) => {
    const [ searchValue, setSearchValue ] = useState('')
    const getSearchValue = (res) => setSearchValue(res.target.value);

    return (
        <>
            <header>
                <Navbar changeSearchVal={ getSearchValue } />
            </header>
            <main>
                <div className="container">
                    { children }
                </div>
            </main>
        </>
    )
}

export default Layout
