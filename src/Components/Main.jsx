import React from 'react';
import CTA from './CTA';
import Card from './Card';

const Main = () => {

    const cardsData = [
        {
            date: "23-02-22",
            type: "Type A",
            title: "This is the title of the journal post.",
            imageSrc: "https://tf-frontend.netlify.app/images/v1/post_1.png"
        },
        {
            date: "22-02-22",
            type: "Type A",
            title: "This is the title of the journal post lorem.",
            imageSrc: "https://tf-frontend.netlify.app/images/v1/post_2.png"
        },
        {
            date: "21-02-22",
            type: "Type B",
            title: "This is the title of the journal post lorem ipsum dolor sit.",
            imageSrc: "https://tf-frontend.netlify.app/images/v1/post_3.png"
        },
        {
            date: "20-02-22",
            type: "Type A",
            title: "This is the title of the journal post lorem ipsum dolor sit amet.",
            imageSrc: "https://tf-frontend.netlify.app/images/v1/post_4.png"
        },
    ];

    return (
        <div className='main'>
        <h2>Lorem Ipsum Dolor Sit Amet</h2>
        <div className="cards-container">
            {cardsData.map((card, index) => (
                <Card 
                    key={index}
                    imageSrc={card.imageSrc}
                    tag={card.type}
                    date={card.date}
                    title={card.title}
                    type={card.type} 
                />
            ))}
        </div>
        <CTA/>
    </div>
    );
};

export default Main;
