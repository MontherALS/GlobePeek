import { sourcesPageStyle } from "../Styles/Style";
export default function SourcesPage() {
  return (
    <main className={sourcesPageStyle.container}>
      <div className="max-w-4xl mx-auto space-y-8">
        <section>
          <h1 className={sourcesPageStyle.h1}>Country Data</h1>
          <p className={sourcesPageStyle.p}>
            This website utilizes accurate and reliable data from the{" "}
            <a
              target="_blank"
              href="https://restcountries.com/"
              className={sourcesPageStyle.a}
            >
              REST Countries API
            </a>
            , providing comprehensive information on country names, regions,
            population, area, and official flags.
          </p>
        </section>

        <section>
          <h1 className={sourcesPageStyle.h1}>Economic Indicators</h1>
          <p className={sourcesPageStyle.p}>
            Economic information such as GDP, inflation rates, and related
            indicators is sourced from the
            <a
              target="_blank"
              href="https://data.worldbank.org/"
              className={sourcesPageStyle.a}
            >
              World Bank API
            </a>
            .
          </p>
        </section>

        <section>
          <h1 className={sourcesPageStyle.h1}>Flags & Images</h1>
          <p className={sourcesPageStyle.p}>
            All flag images and country visuals are fetched directly from the
            official
            <a
              target="_blank"
              href="https://restcountries.com/"
              className={sourcesPageStyle.a}
            >
              REST Countries
            </a>
            sources to ensure accuracy and up-to-date content.
          </p>
        </section>

        <section>
          <h1 className={sourcesPageStyle.h1}>Acknowledgments</h1>
          <p className={sourcesPageStyle.p}>
            Special thanks to all data providers and open-source platforms that
            empower developers and make global information accessible.
          </p>
        </section>
      </div>
    </main>
  );
}
