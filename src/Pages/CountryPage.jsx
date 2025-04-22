import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CountryDetailsPage from "../Comp/CountryDetailsPage";
import {
  fetchEconomyData,
  fetcchPopulationData,
} from "../assets/fetchEconomyData";

const economyLabels = [
  "Total GDP (current US$)",
  "GDP per capita (current US$)",
  "GDP growth (annual %)",
  "Inflation rate (CPI, annual %)",
  "Foreign direct investment (current US$)",
  "External debt stocks (current US$)",
];

const populationLabels = [
  "Total population",
  "Population growth (annual %)",
  "Population density (per sq. km)",
  "Urban population (% of total)",
];

function formatNumber(value) {
  if (value >= 1e12) return (value / 1e12).toFixed(2) + "T";
  if (value >= 1e9) return (value / 1e9).toFixed(2) + "B";
  if (value >= 1e6) return (value / 1e6).toFixed(2) + "M";
  if (value >= 1e3) return (value / 1e3).toFixed(2) + "K";
  return value?.toLocaleString() ?? "N/D";
}

export default function CountryPage() {
  const location = useLocation();
  const country = location.state;

  const [countryData, setCountryData] = useState({
    economy: [],
    population: [],
  });

  useEffect(() => {
    async function loadLocal() {
      const EconomyData = await fetchEconomyData(country.cca2);
      const PopulationData = await fetcchPopulationData(country.cca2);

      setCountryData({
        economy: EconomyData,
        population: PopulationData,
      });
    }
    loadLocal();
  }, [country.cca2]);

  return (
    <main className="grid grid-cols-2 grid-rows-[auto_auto_auto_auto_auto] gap-4 p-6 min-h-screen bg-gray-800">
      <div className="col-span-1 row-span-3">
        <CountryDetailsPage countrySelected={country} />
      </div>

      <div className="col-span-1 row-span-1">
        <h2 className="text-3xl font-bold text-white mb-4">Economy</h2>
        <div className="grid grid-cols-1 gap-4">
          {countryData.economy.map((value, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-green-600 to-green-400 rounded-xl shadow-md p-3 text-white"
            >
              <span className="block text-lg font-semibold">
                {formatNumber(value)}
              </span>
              <span className="text-sm opacity-80">{economyLabels[i]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-1 row-span-1">
        <h2 className="text-3xl font-bold text-white mb-4">Population</h2>
        <div className="grid grid-cols-1 gap-4">
          {countryData.population.map((value, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl shadow-md p-3 text-white"
            >
              <span className="block text-lg font-semibold">
                {formatNumber(value)}
              </span>
              <span className="text-sm opacity-80">{populationLabels[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
