import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Spaces from "./pages/Spaces/Spaces";
import Rooms from "./pages/Rooms/Rooms";
import Activity from "./pages/Activity/Activity";
import About from "./pages/About/About";
import Booking from "./pages/Booking/Booking";
import Faq from "./pages/Faq/Faq";
import Navbar from "./components/Navbar/Navbar";
import DarkNavbar from "./components/DarkNavbar/DarkNavbar";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [language, setLanguage] = useState(false);

  return (
    <BrowserRouter>
      <IsDark language={language} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<Landing language={language} />} />
        <Route path="/spaces" element={<Spaces language={language} />} />
        <Route path="/rooms" element={<Rooms language={language} />} />
        <Route path="/activity" element={<Activity language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/booking" element={<Booking language={language} />} />
        <Route path="/faq" element={<Faq language={language} />} />
      </Routes>
      <Footer language={language}/>
    </BrowserRouter>
  );
}

function IsDark({language, setLanguage}) {
  const location = useLocation();

  const paths = ['/'];
  const inProgress = paths.includes(location.pathname);

  return inProgress ? <Navbar language={language} setLanguage={setLanguage} /> : <DarkNavbar language={language} setLanguage={setLanguage} />;
}