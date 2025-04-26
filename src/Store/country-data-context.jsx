import { createContext } from "react";

export const CountriesDataCtx = createContext({
  setAllCountries: () => {},
  setCountrySelected: () => {},
  setSelectedRegion: () => {},
  selectedRegion: "",
  visibleCountries: [],
  countrySelected: "",
});
