import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import fr from 'date-fns/locale/fr'; // Importer le locale français
registerLocale('fr', fr);

export default function Booking() {
  const [startDate, setStartDate] = useState(new Date());

  // Exemple de dates réservées
  const reservedDates = [
    new Date('2024-05-01'),
    new Date('2024-05-02'),
    new Date('2024-05-05')
  ];

  // Configuration pour highlightDates
  const highlightWithRanges = [
    {
      "react-datepicker__day--highlighted-custom-1": reservedDates,
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 mt-12">
      <h1 className="text-2xl font-bold text-center mb-8">Page de Réservation</h1>
      <div className="text-center">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          locale="fr"
          highlightDates={highlightWithRanges}
          inline // Afficher le calendrier directement
        />
      </div>
    </div>
  );
}
