import React, { useEffect, useState } from 'react';

const Stars = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    // Generate static stars
    const starCount = 200;
    const newStars = [];
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 3 + 1,
        delay: Math.random() * 5,
      });
    }
    setStars(newStars);

    // Generate shooting stars periodically
    const interval = setInterval(() => {
      const newShootingStar = {
        id: Date.now(),
        left: Math.random() * 80 + 10,
        top: Math.random() * 30,
        duration: Math.random() * 2 + 1,
      };
      setShootingStars(prev => [...prev, newShootingStar]);
      
      setTimeout(() => {
        setShootingStars(prev => prev.filter(star => star.id !== newShootingStar.id));
      }, 3000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stars-container">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
      {shootingStars.map(star => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Stars;