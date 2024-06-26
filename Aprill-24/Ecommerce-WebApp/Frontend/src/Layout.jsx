// Layout.js
import React from 'react';
import NavBar from './features/navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    );
};

export default Layout;
