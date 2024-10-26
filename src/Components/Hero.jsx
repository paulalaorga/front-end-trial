import React, { useEffect, useState } from 'react';
import '../index.css'; 
import Button from './Button';

const Hero = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {

    const hasVisited = localStorage.getItem('hasVisited');
    console.log('hasVisted?:', hasVisited); 
    if (hasVisited) {
      setIsFirstVisit(false);
    } else {
      setIsFirstVisit(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  return (
    <div 
      className="hero" 
    >
        <h1>{isFirstVisit ? 'Lorem Ipsum' : 'Dolor Amit'}</h1>
        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Vestibulum Vehicula Mauris, Oro Vel Faucibus At Tristique</p>
        <Button isFirstVisit={isFirstVisit} />
    </div>
  );
};

export default Hero;
