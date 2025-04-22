import { useEffect } from "react";
import CountryTable from "./CountryTable";
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

  const navStyle =
    "flex flex-wrap justify-center gap-2 p-4 sm:p-6 text-sm sm:text-lg lg:text-xl xl:text-2xl xl:gap-10 rounded-xl bg-white/25 hover:bg-white/77 shadow-xl hover:scale-102 duration-700 max-w-full ";

  return (
    <section className="flex flex-col justify-around items-center mt-16">
      <nav className={navStyle} id="countryNav">
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
            className="hover:scale-105 sm:text-[25px] duration-150 text-shadow-2xs cursor-pointer"
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
