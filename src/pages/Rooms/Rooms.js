import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import backgroundImage from "../../assets/RoomsPictures/dormitory4.jpg";

import Dark1 from "../../assets/RoomsPictures/dark1.jpg";
import Dark2 from "../../assets/RoomsPictures/dark2.jpg";
import Blue1 from "../../assets/RoomsPictures/blue1.jpg";
import Blue2 from "../../assets/RoomsPictures/blue2.jpg";
import Dormitory1 from "../../assets/RoomsPictures/dormitory1.jpg";
import Dormitory2 from "../../assets/RoomsPictures/dormitory2.jpg";
import Dormitory3 from "../../assets/RoomsPictures/dormitory3.jpg";
import Dormitory4 from "../../assets/RoomsPictures/dormitory4.jpg";

const rooms = [
  {
    title: "Chambre Marron · 2 personnes",
    description: "XXX",
    bed: "Lit: Chambre équipée d'un lit deux places.",
    bathroom: "Salle de bain: XXX",
    capacity: "Capacité: 2 adultes",
    images: [Dark1, Dark2],
  },
  {
    title: "Chambre Bleue · 2 personnes",
    description: "XXX",
    bed: "Lit: Chambre équipée d'un lit deux places.",
    bathroom: "Salle de bain: XXX",
    capacity: "Capacité: 2 adultes",
    images: [Blue1, Blue2],
  },
  {
    title: "Dortoir · 8 personnes",
    description: "Une spacieuse chambre avec vue sur le jardin.",
    bed: "Lit(s): Dortoir équipé d'un lit deux places, de deux lits simples ainsi que deux lits superposés.",
    bathroom: "Salle de bain: Large bathroom, with Italian carrera marble, separate bath tub and shower",
    capacity: "Capacité: 4 adultes et 4 enfants",
    images: [Dormitory1, Dormitory2, Dormitory3, Dormitory4],
  }
];

export default function RoomsPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
  };

  return (
    <div className="bg-white" style={{ marginTop: '3.75rem' }}>
      <div className="relative w-full h-64 md:h-96">
        <img src={backgroundImage} alt="Background" className="w-full h-full object-cover absolute z-0" />
        <div className="absolute z-10 w-full h-full bg-black opacity-35"></div>
        <div className="absolute z-20 w-full h-full flex items-center justify-center">
          <h1 className="text-white text-5xl font-playfair font-bold">Les Chambres du Gîte</h1>
        </div>
      </div>
      <div className="mx-auto mt-4 p-16">
      <p>(blabla)Situé dans la Haute Vallée de l'Aa, au coeur du Parc Naturel Régional des Caps et Marais d'Opale, à proximité du Marais Audomarois, et non loin de la Côte d'Opale. Situé dans la Haute Vallée de l'Aa, au coeur du Parc Naturel Régional des Caps et Marais d'Opale, à proximité du Marais Audomarois, et non loin de la Côte d'Opale. Situé dans la Haute Vallée de l'Aa, au coeur du Parc Naturel Régional des Caps et Marais d'Opale, à proximité du Marais Audomarois, et non loin de la Côte d'Opale. Situé dans la Haute Vallée de l'Aa, au coeur du Parc Naturel Régional des Caps et Marais d'Opale, à proximité du Marais Audomarois, et non loin de la Côte d'Opale.</p>
      {rooms.map((room, index) => (
        <div>
          <div className="flex justify-center mt-10 mb-10">
            <hr className="border-1 border-primary-4 w-full max-w-xl my-2"/>
          </div>
          <div key={index} className={`flex flex-wrap md:flex-nowrap mb-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/2 lg:px-4"> 
              <Slider {...settings}>
                {room.images.map((image, idx) => (
                  <div key={idx} className="h-48 md:h-64 lg:h-98">
                    <img src={image} alt={`Image ${idx + 1}`} className="w-full h-auto" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className={`w-full md:w-1/2 lg:px-4 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
              <h2 className="text-xl font-bold mb-4">{room.title}</h2>
              <p className="mb-2">{room.description}</p>
              <p className="text-primary-2">{room.bed}</p>
              <p className="text-primary-2">{room.bathroom}</p>
              <p className="text-primary-2">{room.capacity}</p>
              <p className="text-primary-2">{room.size}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
