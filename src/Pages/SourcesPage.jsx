import { sourcesPage } from "../Styles/Styles";
export default function SourcesPage() {
  return (
    <main className={sourcesPage.container}>
      <div className="max-w-4xl mx-auto space-y-8">
        <section>
          <h1 className={sourcesPage.h1}>Country Data</h1>
          <p className={sourcesPage.p}>
            This website utilizes accurate and reliable data from the{" "}
            <a href="https://restcountries.com/" className={sourcesPage.a}>
              REST Countries API
            </a>
            , providing comprehensive information on country names, regions,
            population, area, and official flags.
          </p>
        </section>

        <section>
          <h1 className={sourcesPage.h1}>Economic Indicators</h1>
          <p className={sourcesPage.p}>
            Economic information such as GDP, inflation rates, and related
            indicators is sourced from the{" "}
            <a href="https://data.worldbank.org/" className={sourcesPage.a}>
              World Bank API
            </a>
            .
          </p>
        </section>

        <section>
          <h1 className={sourcesPage.h1}>Flags & Images</h1>
          <p className={sourcesPage.p}>
            All flag images and country visuals are fetched directly from the
            official{" "}
            <a href="https://restcountries.com/" className={sourcesPage.a}>
              REST Countries
            </a>{" "}
            sources to ensure accuracy and up-to-date content.
          </p>
        </section>

        <section>
          <h1 className={sourcesPage.h1}>Acknowledgments</h1>
          <p className={sourcesPage.p}>
            Special thanks to all data providers and open-source platforms that
            empower developers and make global information accessible.
          </p>
        </section>
      </div>
    </main>
  );
}
