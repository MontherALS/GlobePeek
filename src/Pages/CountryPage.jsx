import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CountryDetailsPage from "../Comp/CountryDetailsPage";
import { countryPageStyle } from "../Styles/Style";
import {
  fetchEconomyData,
  fetchPopulationData,
} from "../assets/fetchEconomyData";
import { economyLabels, populationLabels } from "../assets/countryPageLabels";

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

  const [countryData, setCountryData] = useState({
    economy: [],
    population: [],
  });

  const [isLoading, setIsLoading] = useState(true);
  if (!country) {
    return (
      <div className="text-center text-white mt-10">
        No country selected. Please return to the home page.
      </div>
    );
  }
  useEffect(() => {
    async function loadLocal() {
      try {
        setIsLoading(true);
        const EconomyData = await fetchEconomyData(country.cca2);
        const PopulationData = await fetchPopulationData(country.cca2);

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
      <main className={countryPageStyle.loadingContainer}>
        <div className={countryPageStyle.loadingText}>Loading data...</div>
      </main>
    );
  }
  return (
    <main className={countryPageStyle.main}>
      <div className="col-span-1 row-span-3">
        <CountryDetailsPage countryBasicInfo={country} />
      </div>

      <div className="col-span-1 row-span-1">
        <h2 className="text-4xl font-Special-Gothic text-white mb-4">
          Economy
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {countryData.economy.map((value, i) => (
            <div key={i} className={countryPageStyle.economyMapDiv}>
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
            <div key={i} className={countryPageStyle.populationMapDiv}>
              <span
                className={
                  value < 0
                    ? "block text-lg sm:text-3xl font-mono text-red-700"
                    : "block text-lg sm:text-3xl font-mono text-white"
                }
              >
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
