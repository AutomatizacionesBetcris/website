import React, { useState } from "react";
import { depositDataEn, depositDataEs } from "./DepData";
import DepMethods from "./DepMethods";
import LogoBC from "../../../../img/logo-blanco.png";
import crisEs from "../../../../img/200x200_CRIS_ESP.gif";
import crisEn from "../../../../img/200x200_CRIS_EN.gif";

const DepMenu = () => {
  const [showLanguageButtons, setShowLanguageButtons] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleLanguageButtonClick = (language) => {
    setSelectedLanguage(language);
    setShowLanguageButtons(false);
  };

  const handleCountryButtonClick = (country) => {
    setSelectedCountry(country);
  };

  const handleBackToLanguageSelection = () => {
    setShowLanguageButtons(true); // Mostrar nuevamente los botones de idioma
    setSelectedLanguage(null); // Limpiar la selección de idioma
    setSelectedCountry(null); // Limpiar la selección de país
  };

  const handleBackToCountrySelection = () => {
    setSelectedCountry(null); // Limpiar la selección de país
  };

  return (
    <div>
      <div className="min-h-screen">
        {/* navbar */}
        <nav className="flex flex-col border top-0 z-50 items-center justify-center h-20 bg-sky-800">
          <img src={LogoBC} alt="Logo" className="h-12" />
        </nav>
        {showLanguageButtons && (
          <div className="flex m-10 mt-16 h-64 justify-center items-center lg:m-64 bg-sky-900 bg-opacity-20 rounded-2xl shadow-lg ">
            <div className="flex flex-col gap-5 items-center ">
              <button
                className="border h-10 w-40 lg:h-16 lg:w-96 rounded-2xl"
                onClick={() => handleLanguageButtonClick("en")}
              >
                English
              </button>

              <button
                className="border h-10 w-40 lg:h-16 lg:w-96 rounded-2xl"
                onClick={() => handleLanguageButtonClick("es")}
              >
                Español
              </button>
            </div>
          </div>
        )}
        {!showLanguageButtons && selectedLanguage && !selectedCountry && (
          <div>
            {selectedLanguage === "en" ? (
              <div>
                <h1>Select a country</h1>
                {depositDataEn.map((country) => (
                  <button
                    key={country.pais}
                    onClick={() => handleCountryButtonClick(country.pais)}
                  >
                    {country.pais}
                  </button>
                ))}
                <div>
                  <button onClick={handleBackToLanguageSelection}>
                    Back to language selection
                  </button>
                </div>
                <div className="fixed bottom-0 left-0 w-full flex justify-center items-center">
                  <img src={crisEn} alt="Cris"></img>
                </div>
              </div>
            ) : (
              <div>
                <h1>Seleccione un país</h1>
                {depositDataEs.map((country) => (
                  <button
                    key={country.pais}
                    onClick={() => handleCountryButtonClick(country.pais)}
                  >
                    {country.pais}
                  </button>
                ))}
                <div>
                  <button onClick={handleBackToLanguageSelection}>
                    Volver a selección de idioma
                  </button>
                </div>
                <div className="fixed bottom-0 left-0 w-full flex justify-center items-center">
                  <img src={crisEs} alt="Cris"></img>
                </div>
              </div>
            )}
          </div>
        )}
        {!showLanguageButtons && selectedLanguage && selectedCountry && (
          <div>
            {selectedLanguage === "en" ? (
              <div>
                <DepMethods
                  country={selectedCountry}
                  language={selectedLanguage}
                />
                <button onClick={handleBackToCountrySelection}>
                  Back to country selection
                </button>
              </div>
            ) : (
              <div>
                <DepMethods
                  country={selectedCountry}
                  language={selectedLanguage}
                />
                <button onClick={handleBackToCountrySelection}>
                  Volver a selección de país
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DepMenu;
