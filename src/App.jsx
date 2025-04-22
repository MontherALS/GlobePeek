import "./App.css";
import { useState, useEffect } from "react";
import HeroSection from "./Comp/HeroSection";
import ContinentsSelect from "./Comp/ContinentsSelect";
import CountryDetails from "./Comp/CountryDetails";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("ALL");
  const [countrySelected, setCountrySelected] = useState("");
  useEffect(() => {
    async function getCountrys() {
      const allCountrys = await fetch(`https://restcountries.com/v3.1/all`);
      const allCountrysData = await allCountrys.json();

      setAllCountries(allCountrysData);
    }
    getCountrys();
  }, []);

  const visibleCountries =
    selectedRegion == "ALL"
      ? allCountries
      : allCountries.filter((cou) => cou.continents.includes(selectedRegion));

  return (
    <>
      <main className="w-full max-w-screen-lg mx-auto  sm:px-6 md:px-10 flex flex-col items-center justify-center">
        <HeroSection />
        <ContinentsSelect
          visibleCountries={visibleCountries}
          setCountrySelected={setCountrySelected}
          countrySelected={countrySelected}
          setSelectedRegion={setSelectedRegion}
          setAllCountries={setAllCountries}
          selectedRegion={selectedRegion}
        />
        <CountryDetails countrySelected={countrySelected} />
      </main>
    </>
  );
}

export default App;
