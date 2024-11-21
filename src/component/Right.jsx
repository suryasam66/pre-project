import React, { useState, useEffect } from 'react';
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.png'
import photo3 from '../assets/photo3.jpg'
import photo4 from '../assets/photo4.png'
import './right.css'

const images = [
    photo1,
    photo2,
   photo3,
   photo4
    
  ];

 
const Right = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); 
  
      
      return () => clearInterval(intervalId);
    }, []);


  return (
    <div className="slider">
    <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
    <div className="dots">
      {images.map((_, index) => (
        <span
          key={index}
          className={`dot ${currentIndex === index ? "active" : ""}`}
          onClick={() => setCurrentIndex(index)}
        ></span>
      ))}
    </div>
  </div>
  )
}

export default Right
