import React from "react";
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';

import backgroundImage from "../../assets/AboutUsPictures/table.jpg";

import Family from "../../assets/AboutUsPictures/family.jpg";

export default function About() {
  return (
    <div className="bg-white" style={{ marginTop: '3.75rem' }}>
      <div className="relative w-full h-64 md:h-96">
          <img src={backgroundImage} alt="Background" className="w-full h-full object-cover absolute z-0" />
          <div className="absolute z-10 w-full h-full bg-black opacity-35"/>
          <div className="absolute z-20 w-full h-full flex items-center justify-center">
            <h1 className="text-white text-5xl font-playfair font-bold">À Propos de Nous</h1>
          </div>
      </div>
      <div className="w-full mt-4">
        <div className="w-3/5 mx-auto mt-28 mb-32">
          <h1 className="text-xl">Bienvenue dans notre gîte familial !</h1>
          <p className="text-primary-2">C'est une véritable réalisation de cœur et de passion, ouvert avec amour en 2022 par Julien et Frédérique, un couple animé par l'amour de notre région. Nous avons investi temps et créativité pour transformer cet espace en un havre de paix. En effectuant des travaux de rénovation et en y apportant notre touche personnelle, nous avons su créer un lieu non seulement esthétique mais aussi profondément chaleureux. Conçus pour le partage et la convivialité, nos espaces peuvent accueillir jusqu'à 14 personnes, rendant chaque séjour mémorable pour les familles et les groupes d'amis.</p>
        </div>
        <div className="flex justify-center mb-32">
          <hr className="border-1 border-primary-4 w-full max-w-xl my-2"/>
        </div>
        <div className="w-3/4 mx-auto flex items-center justify-between mb-32">
          <div>
            <h1 className="text-xl">Qui sommes nous ?</h1>
            <p className="text-primary-2">Découvrez notre famille ! Passionnées par la nature et amateurs de plein air, nous sommes également<br/>des adeptes de la course à pied et de la randonnée. Nous nous ferons une joie de vous partager nos circuits favoris,<br/>vous permettant d'explorer les sentiers de notre belle région. Notre gîte est plus qu'un simple lieu de séjour ;<br/>c'est une invitation à vivre des moments authentiques entourés de nature.</p>
          </div>
          <div className="flex-shrink-0">
            <img src={Family} alt="Notre Famille" className="w-60 h-60 object-cover rounded-full"/>
          </div>
        </div>

        <div className="w-3/4 mx-auto mb-32">
          <h1>Si vous avez des questions, notre page <a href="/faq" className="font-bold hover:text-primary-4">FAQ</a> (questions fréquentes) est là pour vous aider. Pour toute autres demandes ou informations, n'hésitez pas à nous <a href="mailto:giteaucoeurdelaa@gmail.com" className="font-bold hover:text-primary-4">contacter par mail</a> ou par téléphone.</h1>
        </div>
        
        <div className="text-center mb-28">
          <h1 className="text-xl mb-2">Suivez-nous sur les Réseaux Sociaux</h1>
          <div className="flex justify-center gap-4">
            <a href="https://instagram.com/aucoeurdelaa?igshid=NTc4MTIwNjQ2YQ==" className="text-primary-3 text-4xl">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" className="text-primary-3 text-4xl">
              <FaFacebookSquare />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
