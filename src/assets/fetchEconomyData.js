// fetchEconomy.js
export async function fetchEconomyData(countryCode) {
  const indicators = [
    "NY.GDP.MKTP.CD", // Total GDP (current US dollars)
    "NY.GDP.PCAP.CD", // GDP per capita (current US dollars)
    "NY.GDP.MKTP.KD.ZG", // GDP growth (annual %)
    "FP.CPI.TOTL.ZG", // Inflation rate (Consumer Price Index, annual %)
    "BX.KLT.DINV.CD.WD", // Foreign direct investment, net inflows (BoP, current US dollars)
    "DT.DOD.DECT.CD", //"External debt stocks, total (DOD, current US$)"
  ];

  const values = [];

  for (const code of indicators) {
    const res = await fetch(
      `https://api.worldbank.org/v2/country/${countryCode}/indicator/${code}?format=json`
    );
    const data = await res.json();
    values.push(data[1]?.[1]?.value);
  }

  return values;
}

export async function fetcchPopulationData(countryCode) {
  const indicators = [
    "SP.POP.TOTL", // Total population
    "SP.POP.GROW", // Population growth (annual %)
    "EN.POP.DNST", // Population density (people per sq. km of land area)
    "SP.URB.TOTL.IN.ZS", // Urban population (% of total)
  ];
  const values = [];
  for (const code of indicators) {
    const res = await fetch(
      `https://api.worldbank.org/v2/country/${countryCode}/indicator/${code}?format=json`
    );
    const data = await res.json();
    values.push(data[1]?.[1]?.value);
  }
  return values;
}

export async function fetchTechnologyData(countryCode) {
  const indicators = [
    "SP.POP.SCIE.RD.P6", // Researchers in R&D (per million people)
    "GB.XPD.RSDV.GD.ZS", // R&D expenditure (% of GDP)
  ];
  const values = [];
  for (const code of indicators) {
    const res = await fetch(
      `https://api.worldbank.org/v2/country/${countryCode}/indicator/${code}?format=json`
    );
    const data = await res.json();
    values.push(data[1]?.[1]?.value);
  }
  return values;
}
