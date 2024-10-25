import React, { useEffect, useState } from 'react';
import '../index.css'; 
import Button from './Button';

const Hero = () => {
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    const imageUrl = 'https://tf-frontend.netlify.app/images/v1/bgimage.png';
    setBgImage(imageUrl);
  }, []);

  return (
    <div 
      className="hero" 
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        height: '50vh',
        width: '100vw',
      }}
    >
        <h1>Lorem Ipsum</h1>
        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Vestibulum Vehicula Mauris, Oro Vel Faucibus At Tristique</p>
        <Button/>
    </div>
  );
};

export default Hero;
