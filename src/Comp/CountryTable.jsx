import { Link } from "react-router-dom";
import { countryTable } from "../Styles/Styles";
export default function CountryTable({
  visibleCountries,
  selectedRegion,
  setAllCountries,
}) {
  return (
    <table className={countryTable.container}>
      {selectedRegion ? (
        <thead>
          <tr className={countryTable.headerRow}>
            <th
              className={countryTable.headerCell}
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
            <tr key={i} className={countryTable.countryStyle}>
              <td className={countryTable.bodyCell}>
                <img
                  className={countryTable.flagimg}
                  src={country.flags.png}
                  alt=""
                />
                <span className={countryTable.countryNameSpan}>
                  {country.name.common}
                </span>
              </td>
              <td className={countryTable.countrysAttruputeStyle}>
                {country.region}
              </td>
              <td className={countryTable.countrysAttruputeStyle}>
                {country.area.toLocaleString()} Km²
              </td>
              <td>
                <Link
                  to={"/country"}
                  state={country}
                  className={countryTable.linkStyle}
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
