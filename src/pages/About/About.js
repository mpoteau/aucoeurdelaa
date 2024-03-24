import React from "react";
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';

// import Family from "../../assets/AboutUsPictures/family.jpg";

export default function About() {
  return (
    <div className="bg-white" style={{ marginTop: '3.75rem' }}>
      <div className="mx-auto p-16">
        {/* Utilise flex pour disposer les éléments côte à côte */}
        <div className="flex items-center justify-between mt-4">
          {/* Conteneur pour le texte */}
          <div>
            <h1 className="text-4xl font-bold mb-2">À Propos de Nous</h1>
            <p className="">Découvrez notre famille et notre passion pour l'accueil et le partage.</p>
          </div>
          
          {/* Conteneur pour l'image/la div ronde */}
          <div className="flex-shrink-0">
            {/* <img src={Family} alt="Notre Famille" className="w-40 h-40 object-cover rounded-full"/> */}
            <div className="bg-primary-2 w-40 h-40 rounded-full"/>
          </div>
        </div>
        
        <p className="text-primary-2 mt-12 mb-4">(blablabla)Découvrez notre famille et notre passion pour l'accueil et le partage.Découvrez notre famille et notre passion pour l'accueil et le partage.Découvrez notre famille et notre passion pour l'accueil et le partage.Découvrez notre famille et notre passion pour l'accueil et le partage.Découvrez notre famille et notre passion pour l'accueil et le partage.Découvrez notre famille et notre passion pour l'accueil et le partage.</p>

        <div className="mt-12 mb-12">
          <h2 className="text-xl">Contactez-nous</h2>
          <p>Pour toute demande ou information, n'hésitez pas à nous <a href="mailto:giteaucoeurdelaa@gmail.com" className="font-bold hover:text-primary-4">contacter par mail</a>.</p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-xl">Questions Fréquentes</h2>
          <p>Si vous avez des questions, notre page <a href="/faq" className="font-bold hover:text-primary-4">FAQ</a> est là pour vous aider.</p>
        </div>
        
        <div className="text-center">
          <h2 className="text-xl mb-2">Suivez-nous sur les Réseaux Sociaux</h2>
          <div className="flex justify-center gap-4">
            <a href="https://instagram.com/aucoeurdelaa?igshid=NTc4MTIwNjQ2YQ==" className="text-primary-3 text-2xl">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" className="text-primary-3 text-2xl">
              <FaFacebookSquare />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
