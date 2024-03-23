import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'; 
// import ScrollToTopButton from "../ScrollToTopButton";

export default function Footer() {

  return (
    <footer className="bg-black text-white text-center text-xs p-3 w-full border-t">
      <div className="mb-2">
        <p>20 Rue Principale, Ouve Wirquin, France | Tél: +33 6 80 43 40 42 | giteaucoeurdelaa@gmail.com</p>
      </div>
      <div className="flex justify-center mb-2">
        <a href="mailto:giteaucoeurdelaa@gmail.com" className="mx-2">
        </a>
        <a href="https://facebook.com" className="mx-2">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="https://instagram.com/aucoeurdelaa?igshid=NTc4MTIwNjQ2YQ==" className="mx-2">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
      <p>&copy; 2024 Au Coeur de l'Aa · Ouve Wirquin · <Link to="/faq" className='hover:text-yellow-300'>FAQ</Link></p>
    </footer>
  )
}
