import { useState, useEffect } from "react";
import { CountriesDataCtx } from "./country-data-context";
import { countryPageStyle } from "../Styles/Style";
export default function CountryDataContextProvider({ children }) {
  const [allCountries, setAllCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("ALL");
  const [countrySelected, setCountrySelected] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getCountries() {
      try {
        setLoading(true);
        const Countries = await fetch(`https://restcountries.com/v3.1/all`);
        const allCountriesData = await Countries.json();

        setAllCountries(allCountriesData);
        setLoading(false);
      } catch (err) {
        console.error("fetching went wrong : " + err);
      }
    }

    getCountries();
  }, []);

  const visibleCountries =
    selectedRegion === "ALL"
      ? allCountries
      : allCountries.filter((cou) => cou.continents.includes(selectedRegion));
  const countriesDataCtx = {
    setAllCountries: setAllCountries,
    selectedRegion: selectedRegion,
    visibleCountries: visibleCountries,
    setCountrySelected: setCountrySelected,
    countrySelected: countrySelected,
    setSelectedRegion: setSelectedRegion,
  };
  if (loading) {
    return (
      <main className={countryPageStyle.loadingContainer}>
        <div className={countryPageStyle.loadingText}>Loading data...</div>
      </main>
    );
  }
  return (
    <CountriesDataCtx.Provider value={countriesDataCtx}>
      {children}
    </CountriesDataCtx.Provider>
  );
}
