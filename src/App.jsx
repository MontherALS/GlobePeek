import "./App.css";
import HeroSection from "./Comp/HeroSection";
import ContinentsSelect from "./Comp/ContinentsSelect";
import CountryTable from "./Comp/CountryTable";
import CountryDataContextProvider from "./Store/CountryDataContextProvider";
function App() {
  const mainStyle =
    "w-full max-w-screen-lg mx-auto  sm:px-6 md:px-10 flex flex-col items-center justify-center";
  return (
    <CountryDataContextProvider>
      <main className={mainStyle}>
        <HeroSection />
        <ContinentsSelect />
        <CountryTable />
      </main>
    </CountryDataContextProvider>
  );
}

export default App;
