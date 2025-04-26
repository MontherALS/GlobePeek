import { Link } from "react-router-dom";
import { countryTableStyle } from "../Styles/Style";
import { useContext } from "react";
import { CountriesDataCtx } from "../Store/country-data-context";
export default function CountryTable({}) {
  const { setAllCountries, visibleCountries, selectedRegion } =
    useContext(CountriesDataCtx);
  return (
    <table className={countryTableStyle.container}>
      {selectedRegion ? (
        <thead>
          <tr className={countryTableStyle.headerRow}>
            <th
              className={countryTableStyle.headerCell}
              onClick={() => {
                const sortedName = [...visibleCountries].sort((a, b) => {
                  return a.name.common.localeCompare(b.name.common);
                });
                setAllCountries(sortedName);
              }}
            >
              ↨ Name{" "}
            </th>
            <th>Region</th>
            <th>Area</th>
            <th>More Details</th>
          </tr>
        </thead>
      ) : null}

      <tbody>
        {visibleCountries.map((country, i) => {
          return (
            <tr key={i} className={countryTableStyle.countryStyle}>
              <td className={countryTableStyle.bodyCell}>
                <img
                  className={countryTableStyle.flagimg}
                  src={country.flags.png}
                  alt=""
                />
                <span className={countryTableStyle.countryNameSpan}>
                  {country.name.common}
                </span>
              </td>
              <td className={countryTableStyle.countriesAttributeStyle}>
                {country.region}
              </td>
              <td className={countryTableStyle.countriesAttributeStyle}>
                {country.area.toLocaleString()} Km²
              </td>
              <td>
                <Link
                  to={"/country"}
                  state={country}
                  className={countryTableStyle.linkStyle}
                >
                  Click{" "}
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
