import React from 'react';
import Navbar from './Navbar';
import '../index.css'

const Header = () => {
    return (
        <header className='header'>
            <img className='logo' src="https://tf-frontend.netlify.app/images/v1/logo.svg" alt="logo"/>
            <Navbar/>
        </header>

    );
};

export default Header;