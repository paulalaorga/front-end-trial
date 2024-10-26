import React from 'react';
import '../index.css';

const Button = ({ isFirstVisit }) => {
    return (
        <button className={isFirstVisit ? 'button' : 'button-2'} >
            {isFirstVisit ? 'Button Label' : 'New Button Label'}
        </button>
    );
};

export default Button;