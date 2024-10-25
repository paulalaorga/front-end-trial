import React from 'react';
import '../index.css';

const Card = ({ imageSrc, tag, date, title, type }) => {
    const tagClassName = type === 'Type B' ? 'tag tag-b' : 'tag';

    return (
        <div className='card'>
            <div className="card-img">
                <img src={imageSrc} alt={title} />
                <span className={tagClassName}>{tag}</span>
            </div>
            <div className="card-content">
                <div className="date">{date}</div>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default Card;
