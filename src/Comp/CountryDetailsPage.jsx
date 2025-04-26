import { countryDetailsPageStyle } from "../Styles/Style";

export default function CountryDetailsPage({ countryBasicInfo }) {
  if (!countryBasicInfo) return null;

  return (
    <section id="country-section" className="flex flex-col items-center">
      <div className="flex gap-8 items-center justify-center my-5">
        <img
          src={countryBasicInfo.flags.png}
          alt="Flag"
          className={countryDetailsPageStyle.flagImg}
        />
        <img
          src={countryBasicInfo.coatOfArms.png}
          alt="Coat"
          className={countryDetailsPageStyle.coatOfArmsImg}
        />
      </div>

      <div className={countryDetailsPageStyle.boxStyle}>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Basic Information
        </h2>

        <div className="flex flex-col gap-3 text-center">
          <div>
            <div className={countryDetailsPageStyle.labelStyle}>Name:</div>
            <div className={countryDetailsPageStyle.valueStyle}>
              {countryBasicInfo.name.official}
            </div>
          </div>
          <div>
            <div className={countryDetailsPageStyle.labelStyle}>Capital:</div>
            <div className={countryDetailsPageStyle.valueStyle}>
              {countryBasicInfo.capital}
            </div>
          </div>
          <div>
            <div className={countryDetailsPageStyle.labelStyle}>Continent:</div>
            <div className={countryDetailsPageStyle.valueStyle}>
              {countryBasicInfo.continents}
            </div>
          </div>
          <div>
            <div className={countryDetailsPageStyle.labelStyle}>Subregion:</div>
            <div className={countryDetailsPageStyle.valueStyle}>
              {countryBasicInfo.subregion}
            </div>
          </div>
        </div>
        <button
          onClick={() => window.open(countryBasicInfo.maps.googleMaps)}
          className={countryDetailsPageStyle.button}
        >
          Show in map
        </button>
      </div>
    </section>
  );
}
