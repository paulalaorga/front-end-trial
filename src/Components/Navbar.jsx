import React from 'react';

const Navbar = () => {
    return (
        <nav class="nav" style={
            {
                display: 'flex',
                gap: '10px',
                padding: '10px',
                margin: '10px',
                fontFamily: 'Arial',
            }
        }>
            <p>Store</p>
            <p>Our Story</p>
            <p>Journal</p>
        </nav>
    );
};

export default Navbar;