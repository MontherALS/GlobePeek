import { useEffect } from "react";

import { continentSelectStyle } from "../Styles/Style";
import { CountriesDataCtx } from "../Store/country-data-context";
import { useContext } from "react";
export default function ContinentsSelect() {
  const { setCountrySelected, countrySelected, setSelectedRegion } =
    useContext(CountriesDataCtx);
  function handleSelectRegion(e) {
    const el = document.getElementById("countryNav");
    el.scrollIntoView({ behavior: "smooth" });
    setSelectedRegion(e.target.name);
    setCountrySelected("");
  }

  useEffect(() => {
    if (countrySelected) {
      const el = document.getElementById("country-section");
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [countrySelected]);

  return (
    <section className={continentSelectStyle.section}>
      <nav className={continentSelectStyle.navStyle} id="countryNav">
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
            className={continentSelectStyle.button}
            name={region}
            onClick={handleSelectRegion}
          >
            {region}
          </button>
        ))}
      </nav>
    </section>
  );
}
