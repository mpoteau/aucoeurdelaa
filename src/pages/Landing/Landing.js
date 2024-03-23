import React, { useState, useEffect } from 'react';
import backgroundImage from '../../assets/house_picture.jpg';
import backgroundImageBis from '../../assets/entrance_picture.jpg';
import backgroundImageTer from '../../assets/inside_picture.jpg';

export default function Landing() {
  const images = [backgroundImage, backgroundImageBis, backgroundImageTer];
  const [currentImage, setCurrentImage] = useState(0);

  // Précharger les images
  images.forEach((image) => {
    const img = new Image();
    img.src = image;
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div 
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center relative"
        style={{ 
          backgroundImage: `url(${images[currentImage]})`,
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-35"/>
        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-white text-5xl font-playfair font-bold text-center mb-8">Gîte familial au charme naturel</h1>
          <hr className="border-1 border-white w-full max-w-xs my-2"/>
          <p className="text-gray-200 text-xl text-center font-playfair font-bold mt-4">
            Situé dans la Haute Vallée de l'Aa, au coeur du Parc Naturel Régional des Caps et Marais d'Opale,<br/>à proximité du Marais Audomarois, et non loin de la Côte d'Opale.
          </p>
        </div>
      </div>
    </div>
  );
}
