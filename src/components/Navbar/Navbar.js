import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar({language, setLanguage}) {

  const handleLanguageChange = () => {
    setLanguage(!language);
  };

  return (
    <nav className="fixed top-0 bg-transparent absolute w-full z-50"> {/* change fixed */}
      <div className="w-full mx-auto px-8">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold font-playfair text-white text-lg">Au Coeur de l'Aa</span>
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {language ? 
              <a href="/spaces" className="py-4 px-2 font-playfair text-white font-bold hover:text-primary-4 transition duration-300">Spaces</a> 
              : 
              <a href="/spaces" className="py-4 px-2 font-playfair text-white font-bold hover:text-primary-4 transition duration-300">Espaces</a>
            }
            {language ?
              <a href="/rooms" className="py-4 px-2 font-playfair text-white font-bold hover:text-primary-4 transition duration-300">Rooms</a>
              :
              <a href="/rooms" className="py-4 px-2 font-playfair text-white font-bold hover:text-primary-4 transition duration-300">Chambres</a>
            }
            {language ?
              <a href="/activity" className="py-4 px-2 font-playfair text-white font-bold hover:text-primary-4 transition duration-300">Activity</a>
              :
              <a href="/activity" className="py-4 px-2 font-playfair text-white font-bold hover:text-primary-4 transition duration-300">Activités</a>
            }
            {language ?
              <a href="/about" className="py-4 px-2 font-playfair text-white font-bold hover:text-primary-4 transition duration-300">About us</a>
              :
              <a href="/about" className="py-4 px-2 font-playfair text-white font-bold hover:text-primary-4 transition duration-300">À propos de nous</a>
            }
          </div>

          <div className="hidden md:flex items-center space-x-3 ">
            {language ?
              <button className="py-2 px-2 text-white font-playfair font-bold rounded hover:text-primary-4 transition duration-300" onClick={handleLanguageChange}>EN/FR</button>
              :
              <button className="py-2 px-2 text-white font-playfair font-bold rounded hover:text-primary-4 transition duration-300" onClick={handleLanguageChange}>FR/EN</button>
            }
            <Link to="/booking">
            {language ?
              <button className="py-2 px-2 text-white font-playfair font-bold hover:text-primary-4 border border-white rounded hover:border-primary-4 transition duration-300">Booking</button>
              :
              <button className="py-2 px-2 text-white font-playfair font-bold hover:text-primary-4 border border-white rounded hover:border-primary-4 transition duration-300">Réservation</button>
            }
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
