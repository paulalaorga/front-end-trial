import React, { useEffect, useState } from 'react';
import './styles/Hero.css'; 

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
        width:'100vw',
        height:'100vh',
      }}
    >
      <h1>Bienvenido a la página</h1>
    </div>
  );
};

export default Hero;
