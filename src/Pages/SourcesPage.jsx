export default function SourcesPage() {
  const pStyle =
    "font-Crimson text-lg sm:text-2xl leading-relaxed text-gray-200";
  const hStyle = "text-3xl sm:text-4xl font-mono text-blue-400 mb-2";

  return (
    <main className="min-h-screen bg-gray-800 text-white p-6 sm:p-10 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <section>
          <h1 className={hStyle}>Country Data</h1>
          <p className={pStyle}>
            This website utilizes accurate and reliable data from the{" "}
            <a
              href="https://restcountries.com/"
              className="text-blue-500 hover:text-blue-300 underline duration-300"
            >
              REST Countries API
            </a>
            , providing comprehensive information on country names, regions,
            population, area, and official flags.
          </p>
        </section>

        <section>
          <h1 className={hStyle}>Economic Indicators</h1>
          <p className={pStyle}>
            Economic information such as GDP, inflation rates, and related
            indicators is sourced from the{" "}
            <a
              href="https://data.worldbank.org/"
              className="text-blue-500 hover:text-blue-300 underline duration-300"
            >
              World Bank API
            </a>
            .
          </p>
        </section>

        <section>
          <h1 className={hStyle}>Flags & Images</h1>
          <p className={pStyle}>
            All flag images and country visuals are fetched directly from the
            official{" "}
            <a
              href="https://restcountries.com/"
              className="text-blue-500 hover:text-blue-300 underline duration-300"
            >
              REST Countries
            </a>{" "}
            sources to ensure accuracy and up-to-date content.
          </p>
        </section>

        <section>
          <h1 className={hStyle}>Acknowledgments</h1>
          <p className={pStyle}>
            Special thanks to all data providers and open-source platforms that
            empower developers and make global information accessible.
          </p>
        </section>
      </div>
    </main>
  );
}
