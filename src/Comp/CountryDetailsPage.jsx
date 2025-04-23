import { countryDetailsPage } from "../Styles/Styles";
export default function CountryDetailsPage({ countrySelected }) {
  if (!countrySelected) return null;

  return (
    <section id="couSec" className="flex flex-col items-center">
      <div className="flex gap-8 items-center justify-center my-5">
        <img
          src={countrySelected.flags.png}
          alt="Flag"
          className={countryDetailsPage.flagImg}
        />
        <img
          src={countrySelected.coatOfArms.png}
          alt="Coat"
          className={countryDetailsPage.coatOfArmsImg}
        />
      </div>

      <div className={countryDetailsPage.boxStyle}>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Basic Information
        </h2>

        <div className="flex flex-col gap-3 text-center">
          <div>
            <div className={countryDetailsPage.labelStyle}>Name:</div>
            <div className={countryDetailsPage.valueStyle}>
              {countrySelected.name.official}
            </div>
          </div>
          <div>
            <div className={countryDetailsPage.labelStyle}>Capital:</div>
            <div className={countryDetailsPage.valueStyle}>
              {countrySelected.capital}
            </div>
          </div>
          <div>
            <div className={countryDetailsPage.labelStyle}>Continent:</div>
            <div className={countryDetailsPage.valueStyle}>
              {countrySelected.continents}
            </div>
          </div>
          <div>
            <div className={countryDetailsPage.labelStyle}>Subregion:</div>
            <div className={countryDetailsPage.valueStyle}>
              {countrySelected.subregion}
            </div>
          </div>
        </div>
        <button
          onClick={() => window.open(countrySelected.maps.googleMaps)}
          className={countryDetailsPage.button}
        >
          Show in map
        </button>
      </div>
    </section>
  );
}
