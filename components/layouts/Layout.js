import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = ({children}) => {
    return (
        <div id="wrap">
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    )
}

export default Layout
