import React from 'react'
import Banner from './Banner'
import About from './About'
import Proyects from './Proyects'

const Main = () => {
    return (
        <main id="content" className="content">
            <Banner />
            <About />
            <Proyects />
        </main>
    )
}

export default Main;
