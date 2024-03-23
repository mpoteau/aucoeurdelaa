import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import backgroundImage from "../../assets/spaces.jpg";

import LivingRoomImage from "../../assets/spaces.jpg";
import KitchenImage from "../../assets/kitchen.jpg";
import BabyfootImage from "../../assets/babyfoot.jpg";
import Design from "../../assets/design.jpg"

export default function Spaces() {
  return (
    <div className="bg-white" style={{ marginTop: '3.75rem' }}>
      <div className="relative w-full h-64 md:h-96">
        <img src={backgroundImage} alt="Background" className="w-full h-full object-cover absolute z-0" />
        <div className="absolute z-10 w-full h-full bg-black opacity-35"></div>
        <div className="absolute z-20 w-full h-full flex items-center justify-center">
          <h1 className="text-white text-5xl font-playfair font-bold">Les Espaces Communs</h1>
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="w-3/5 mx-auto mt-28 mb-32">
          <p className="text-primary-3">Gîte Meublé de Tourisme · &#9733;&#9733;&#9733;&#9733;</p>
          <h1 className="text-xl">Une longère rénovée avec soin<br/>aux portes du Marais Audomarois</h1>
          <p className="text-primary-2">À seulement 15 minutes de St Omer et à 45 minutes de la côte d'Opale avec ses plages de sable fin, notre gîte se trouve au cœur de la haute vallée de l'Aa.<br/>Implanté dans un cadre bucolique de 6200 m<sup>2</sup>, cette longère rénovée avec amour de plus de 220 m<sup>2</sup>, offre confort et espace.<br/>Avec une capacité d'accueil de 14 personnes, notre gîte est prêt à vous accueillir chaleureusement en famille, entre amis ou entre collègues.</p>
        </div>
        <div className="w-full mt-4">
          <div className="flex">
            <div className="w-1/2">
              <img src={LivingRoomImage} alt="gauche" className="w-full h-full object-cover"/>
            </div>
            <div className="w-1/2 flex flex-col">
              <div className="flex-1">
                <img src={KitchenImage} alt="droite en haut" className="w-full h-full object-cover"/>
              </div>
              <div className="flex-1 flex">
                <div className="w-1/2 flex justify-center items-center text-center bg-primary-3 text-white p-4">
                  <p>Créez des souvenirs uniques<br/>avec vos proches dans un espace conçu<br/>pour vivre ensemble</p>
                </div>
                <img src={BabyfootImage} alt="droite en bas 2" className="w-1/2 h-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/5 mx-auto mt-32 mb-32">
          <p className="text-primary-3">Convivialité et détente</p>
          <h1 className="text-xl">Différents espaces aménagés pour le plaisir de chacun</h1>
          <p className="text-primary-2">Petits et grands se retrouveront afin de vivre un séjour répondant à leurs attentes ;<br/>Une grande pièce de vie pour partager des repas ou se rassembler au coin du feu autour d'un apéritif ou d'un jeu de société, une mezzanine avec un babyfoot et un jeu de fléchettes pour se challenger amicalement.<br/>Le gîte dispose aussi d'un espace extérieur aménagé permettant de se divertir ou se ressourcer, comprenant une terrasse, une zone de jeu et un bain nordique. Le WiFi est également disponible pour ceux qui souhaitent rester connectés même dans ce coin de nature.</p>
        </div>
        <div className="flex justify-center mb-32">
          <img src={Design} alt="design" className="w-5/12 h-full"/>
        </div>
        </div> 
    </div>
  );
}
