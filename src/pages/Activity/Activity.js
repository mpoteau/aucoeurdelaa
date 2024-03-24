import React from "react";

import backgroundImage from "../../assets/ActivityPictures/activity.jpg";

import stOmer from "../../assets/ActivityPictures/st_omer.jpg";

export default function Activity() {
    return (
      <div className="bg-white" style={{ marginTop: '3.75rem' }}>
        <div className="relative w-full h-64 md:h-96">
          <img src={backgroundImage} alt="Background" className="w-full h-full object-cover absolute z-0" />
          <div className="absolute z-10 w-full h-full bg-black opacity-35"/>
          <div className="absolute z-20 w-full h-full flex items-center justify-center">
            <h1 className="text-white text-5xl font-playfair font-bold">Que faire aux alentours ?</h1>
          </div>
        </div>
        <div className="container mx-auto mt-4 p-12">
          <div className="flex flex-wrap -mx-4 mb-8 items-center">
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-2xl font-semibold mb-4">Découvrez Ouve Wirquin</h2>
              <p className="text-lg">(blabla)Découvrez les charmes d'Ouve Wirquin, un village niché au cœur de la région. Avec ses paysages verdoyants, son architecture traditionnelle et ses nombreuses activités, Ouve Wirquin promet des moments inoubliables aux visiteurs.</p>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.652704415714!2d2.145154976557875!3d50.652140772821134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ddab5121fad073%3A0x9b528fcbd662857d!2s20%20Rue%20Principale%2C%2062380%20Ouve-Wirquin%2C%20France!5e0!3m2!1sen!2sie!4v1710634240024!5m2!1sen!2sie"
                width="100%"
                height="350"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          <div className="flex justify-center mt-10 mb-10">
            <hr className="border-1 border-primary-4 w-full max-w-xl my-2"/>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Activités à proximité</h3>
          <div className="flex flex-wrap -mx-4 mb-8 items-center">
            <div className="w-full md:w-1/2 p-4">
            <div className="h-48 bg-gray-200 flex justify-center items-center">
                  <span>Photo de l'activité</span>
                </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-xl">Les richesses de notre région</h1>
              <p className="text-primary-2">Le bassin Minier du Nord-Pas-de-Calais : classé à l'Unesco en 2012.</p>
              <p className="text-primary-2">Le site des Caps et Marais d'Opale : fut le premier classé en 2011 "Grand Site National".</p>
            </div>
          </div>

          <div className="flex justify-center mt-10 mb-10">
            <hr className="border-1 border-white w-full max-w-xl my-2"/>
          </div>

          <div className="flex flex-wrap -mx-4 mt-8 mb-8 items-center">
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-xl">Les marchés</h1>
              <p className="text-primary-2">Lumbres : le mercredi et le vendredi matin, de 8h à 13h place Jean Jaurès.</p>
              <p className="text-primary-2">Audruicq : le mercredi matin au centre ville.</p>
              <p className="text-primary-2">Saint Omer : le mercredi matin de 8h à 13h place Perpignan.</p>
              <p className="text-primary-2">Vaudringhem : le jeudi de 16h à 19h rue de l'église.</p>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="h-48 bg-gray-200 flex justify-center items-center">
                <img src={stOmer} alt={`marché`} className="w-full h-auto z-20" />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10 mb-10">
            <hr className="border-1 border-white w-full max-w-xl my-2"/>
          </div>

          <div className="flex flex-wrap -mx-4 mt-8 mb-8 items-center">
            <div className="w-full md:w-1/2 p-4">
              <div className="h-48 bg-gray-200 flex justify-center items-center">
                <span>Photo de l'activité</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-xl">Offices de tourisme</h1>
              <p className="text-primary-2">Aire-sur-la-Lys : +33 3 21 39 65 66</p>
              <p className="text-primary-2">Lumbres : +33 3 21 93 45 46</p>
              <p className="text-primary-2">Boulogne-sur-Mer : +33 3 21 10 88 10</p>
            </div>
          </div>
        </div>
      </div>
    );
}
