import React from 'react'
import Navbar from '../Navbar/Navbar'

const Layout = ({ children }) => {
    const handleLanguage = (res) => console.log('langValue', res.target.value);

    return (
        <>
            <header>
                <Navbar changeSearchVal={ handleLanguage } />
            </header>
            <main>
                { children }
            </main>
        </>
    )
}

export default Layout
