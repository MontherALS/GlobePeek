export default function CountryDetails({ countrySelected }) {
  if (!countrySelected) return null;

  const basicStyle = `text-xl md:text-2xl font-mono text-shadow-1xs p-1
  font hover:text-2xl md:hover:text-3xl hover:shadow-2xl hover:bg-[#1c2945] duration-500 `;
  const sectionStyle = ` transition-opacity duration-500  w-55 sm:w-100 md:w-75 lg:w-155
  flex justify-center items-center flex-col gap-7 rounded-2xl p-7
  shadow-top-bottom mb-5 mt-5 bg-gradient-to-bl   from-[#cec9d2] to-[#7b7ba4]`;
  return (
    <section id="couSec" className={sectionStyle}>
      <div className="flex justify-center items-center mt-5 gap-10  ">
        <img
          src={countrySelected !== "" ? countrySelected.flags.png : undefined}
          alt=""
          className="max-w-20 sm:max-w-30 md:max-w-50 shadow-2xs rounded-2xl hover:scale-110 duration-1000
                    "
        />
        <img
          src={
            countrySelected !== "" ? countrySelected.coatOfArms.png : undefined
          }
          alt=""
          className="max-w-20 sm:max-w-30 md:max-w-40    hover:-rotate-7 hover:scale-110 duration-1000
                    transition ease-in-out "
        />
      </div>
      <div className=" text-gray-100 ">
        <span className="text-center text-black">
          <h2 className="text-3xl md:text-5xl font-Special-Gothic font-bold">
            Basic information{" "}
          </h2>
        </span>
        <div className="p-5 shadow-xl mt-2">
          <h3 className={basicStyle}>Name: {countrySelected.name.official}</h3>
          <h3 className={basicStyle}>Capital: {countrySelected.capital}</h3>
          <h3 className={basicStyle}>
            Continent: {countrySelected.continents}
          </h3>
          <h3 className={basicStyle}>Subregion: {countrySelected.subregion}</h3>
        </div>
      </div>
      <div className="">
        <button
          className="w-40 sm:w-55 h-15 rounded-2xl text-center font-bold hover:scale-110 hover:shadow-1xs duration-300
         bg-[#14213d]  text-gray-100 text-2xl hover:bg-[#09113b]  cursor-pointer"
          onClick={() => window.open(countrySelected.maps.googleMaps)}
        >
          Show in map <span className="transition animate-pulse">🌏</span>
        </button>
      </div>
      <button
        className="w-30 h-10 rounded-2xl text-center  hover:scale-110 hover:shadow-1xs duration-500
         bg-[#09113b]  text-gray-100 text-lg cursor-pointer animate-bounce"
        onClick={() => {
          const el = document.getElementById("countryNav");
          el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Go back
      </button>
    </section>
  );
}
