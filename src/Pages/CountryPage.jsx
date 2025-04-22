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
  if (value === null || value === undefined || isNaN(value)) return "N/D";

  if (typeof value === "number" && Math.abs(value) > 1e15) return "N/D";

  if (value >= 1e12) return (value / 1e12).toFixed(2) + "T";
  if (value >= 1e9) return (value / 1e9).toFixed(2) + "B";
  if (value >= 1e6) return (value / 1e6).toFixed(2) + "M";
  if (value >= 1e3) return (value / 1e3).toFixed(2) + "K";

  return Number(value).toLocaleString();
}

export default function CountryPage() {
  const location = useLocation();
  const country = location.state;

  //!Check for country
  if (!country) {
    return (
      <div className="text-center text-white mt-10">
        No country selected. Please return to the home page.
      </div>
    );
  }
  const [countryData, setCountryData] = useState({
    economy: [],
    population: [],
  });

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function loadLocal() {
      try {
        setIsLoading(true);
        const EconomyData = await fetchEconomyData(country.cca2);
        const PopulationData = await fetcchPopulationData(country.cca2);

        setCountryData({
          economy: EconomyData,
          population: PopulationData,
        });
      } catch (err) {
        console.error("Error! fetching data: " + err);
      } finally {
        setIsLoading(false);
      }
    }
    loadLocal();
  }, [country.cca2]);

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-2xl font-mono animate-pulse">Loading data...</div>
      </main>
    );
  }
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 grid-rows-[auto_auto_auto_auto_auto] gap-4 p-6 min-h-screen bg-gray-800">
      <div className="col-span-1 row-span-3">
        <CountryDetailsPage countrySelected={country} />
      </div>

      <div className="col-span-1 row-span-1">
        <h2 className="text-4xl font-Special-Gothic text-white mb-4">
          Economy
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {countryData.economy.map((value, i) => (
            <div
              key={i}
              className="bg-gradient-to-bl from-[#a2a0c2] to-[#7b7ba4] rounded-2xl shadow-md p-3 text-white"
            >
              <span
                className={
                  value < 0
                    ? "block text-lg sm:text-3xl font-mono text-red-700"
                    : "block text-lg sm:text-3xl font-mono text-white"
                }
              >
                {formatNumber(value)}
              </span>
              <span className="text-sm opacity-80">{economyLabels[i]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-1 row-span-1">
        <h2 className="text-3xl font-Special-Gothic text-white mb-4">
          Population
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {countryData.population.map((value, i) => (
            <div
              key={i}
              className="bg-gradient-to-bl from-[#66ad72] to-[#68688c] rounded-2xl  shadow-md p-3 text-white"
            >
              <span className="block text-lg sm:text-3xl font-semibold ">
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
