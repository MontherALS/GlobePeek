import { useEffect } from "react";
import CountryTable from "./CountryTable";
import { continentSelect } from "../Styles/Styles";
export default function ContinentsSelect({
  visibleCountries,
  setAllCountries,
  setCountrySelected,
  countrySelected,
  setSelectedRegion,
  selectedRegion,
}) {
  function handleSelectRegion(e) {
    const el = document.getElementById("countryNav");
    el.scrollIntoView({ behavior: "smooth" });
    setSelectedRegion(e.target.name);
    setCountrySelected("");
  }

  useEffect(() => {
    if (countrySelected) {
      const el = document.getElementById("couSec");
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [countrySelected]);

  return (
    <section className={continentSelect.section}>
      <nav className={continentSelect.navStyle} id="countryNav">
        {[
          "ALL",
          "Asia",
          "Europe",
          "Africa",
          "North America",
          "South America",
          "Oceania",
        ].map((region) => (
          <button
            key={region}
            className={continentSelect.button}
            name={region}
            onClick={handleSelectRegion}
          >
            {region}
          </button>
        ))}
      </nav>
      <CountryTable
        visibleCountries={visibleCountries}
        setCountrySelected={setCountrySelected}
        selectedRegion={selectedRegion}
        setAllCountries={setAllCountries}
      />
    </section>
  );
}
