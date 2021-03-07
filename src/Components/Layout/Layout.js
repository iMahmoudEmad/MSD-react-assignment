import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Layout.scss'

const Layout = ({ children }) => {
    const handleLanguage = (res) => console.log('langValue', res.target.value);

    return (
        <>
            <header>
                <Navbar changeSearchVal={ handleLanguage } />
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
