import App from "../App.jsx"
export default function CountryTable({
  visibleCountries,
  setCountrySelected,
  selectedRegion,
  setAllCountries,
}) {
  const countryStyle =
    "text-gray-200 transition hover:scale-105 duration-300  bg-gradient-to-br from-[#1c2945]/55 to-[#637481]/22 backdrop-blur-3xl hover:bg-[#d7dbff] text-center cursor-pointer";
  const countrysAttruputeStyle = " px-3 py-3 md:text-lg text-sm";
  
  // const routes = [

  //   {path: "/",element:<App/> }
  //   ,{path: "/details" ,element:<Details/>}
  // ]
  
  return (
    <table className=" mt-3 border-2 w-full border-none  ">
      {selectedRegion ? (
        <thead>
          <tr className=" bg-gradient-to-l from-gray-300 to-gray-50/22 text-lg">
            <th
              className="cursor-pointer hover:text-blue-950 "
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
            <th>Population</th>
            <th>More Details</th>
          </tr>
        </thead>
      ) : null}

      <tbody>
        {visibleCountries.map((country, i) => {
          return (
            <tr
              key={i}
              className={countryStyle}
              onClick={() => {
                setCountrySelected(country);
              }}
            >
              <td className=" flex  items-center gap-2">
                <img
                  className=" m-2   w-5 h-3 sm:w-9 sm:h-5 md:w-10 lg:w-15 lg:h-10 md:h-6 object-cover"
                  src={country.flags.png}
                  alt=""
                />
                <span className="font-light font-mono text-sm md:text-lg lg:text-2xl">
                  {country.name.common}
                </span>
              </td>
              <td className={countrysAttruputeStyle}>{country.region}</td>
              <td className={countrysAttruputeStyle}>{country.area} Km^2</td>
              <td className={countrysAttruputeStyle}>
                {" "}
                {(country.population / 1_000_000).toFixed(1)}M
              </td>
              <td><a>Click </a></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
