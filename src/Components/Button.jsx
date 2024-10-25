import React from 'react';
import '../index.css';

const Button = ({ label, onClick }) => {
    return (
        <button className='button' onClick={onClick}>
            Button Label
        </button>
    );
};

export default Button;