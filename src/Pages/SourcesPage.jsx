export default function SourcesPage() {
  const pStyle = "font-Crimson text-lg sm:text-2xl";
  const hStyle = "text-3xl sm:text-4xl font-mono";
  return (
    <div className="text-2xl flex flex-col gap-3.5 mx-2 my-6 items-center ">
      <h1 className={hStyle}> Country Data:</h1>{" "}
      <p className={pStyle}>
        This website utilizes accurate and reliable data from the
        <span className="text-blue-600">
          {" "}
          <a href="https://restcountries.com/" className="underline">
            REST Countries
          </a>
        </span>
        API, providing comprehensive information on country names, regions,
        population, area, and official flags.
      </p>
      <br /> <h1 className={hStyle}>Economic Indicators:</h1>{" "}
      <p className={pStyle}>
        {" "}
        Economic information such as GDP, inflation rates, and related
        indicators is sourced from the{" "}
        <span className="text-blue-600">
          {" "}
          <a href="https://www.worldbank.org/ext/en/home" className="underline">
            World Bank API.
          </a>
        </span>
      </p>
      <br />
      <h1 className={hStyle}>Flags & Images: </h1>
      <p className={pStyle}>
        All flag images and country visuals are fetched directly from the
        official REST Countries sources to ensure accuracy and up-to-date
        content.
      </p>
      <br />
      <h1 className={hStyle}>Acknowledgments:</h1>
      <p className={pStyle}>
        Special thanks to all data providers and open-source platforms that
        empower developers and make global information accessible.
      </p>
    </div>
  );
}
