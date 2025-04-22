export default function CountryDetailsPage({ countrySelected }) {
  if (!countrySelected) return null;

  const labelStyle = "text-gray-300 font-semibold text-lg";
  const valueStyle = "text-xl md:text-2xl text-white font-mono";
  const boxStyle =
    "w-full sm:w-[90%] md:w-[80%] lg:w-[75%] bg-gradient-to-bl from-[#cec9d2]/30 to-[#7b7ba4]/20 p-6 rounded-2xl shadow-xl flex flex-col items-center gap-6 backdrop-blur";

  return (
    <section id="couSec" className="flex flex-col items-center">
      <div className="flex gap-8 items-center justify-center my-5">
        <img
          src={countrySelected.flags.png}
          alt="Flag"
          className="w-20 sm:w-28 md:w-55 rounded-xl shadow-lg hover:scale-105 transition duration-500"
        />
        <img
          src={countrySelected.coatOfArms.png}
          alt="Coat"
          className="w-20 sm:w-28 md:w-44 hover:rotate-6 hover:scale-105 transition duration-500"
        />
      </div>

      <div className={boxStyle}>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Basic Information
        </h2>

        <div className="flex flex-col gap-3 text-center">
          <div>
            <div className={labelStyle}>Name:</div>
            <div className={valueStyle}>{countrySelected.name.official}</div>
          </div>
          <div>
            <div className={labelStyle}>Capital:</div>
            <div className={valueStyle}>{countrySelected.capital}</div>
          </div>
          <div>
            <div className={labelStyle}>Continent:</div>
            <div className={valueStyle}>{countrySelected.continents}</div>
          </div>
          <div>
            <div className={labelStyle}>Subregion:</div>
            <div className={valueStyle}>{countrySelected.subregion}</div>
          </div>
          <div>
            <div className={labelStyle}>Population:</div>
            <div className={valueStyle}>
              {(countrySelected.population / 1_000_000).toFixed(1)} M
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 mt-5">
        <button
          onClick={() => window.open(countrySelected.maps.googleMaps)}
          className="bg-[#1e2941] text-white text-xl font-semibold px-6 py-3 rounded-xl hover:bg-[#0b162c] transition duration-300 shadow hover:scale-105"
        >
          Show in map
        </button>
      </div>
    </section>
  );
}
