export default function Header({}) {
  function handleSelect(e) {
    setSelectedRegion(e.target.name);
    setCountrySelected("");
  }

  return (
    <header
      className="flex flex-col items-center w-full lg:flex-row lg:justify-around
    bg-gradient-to-r from-[#646c81] via-[#cec9d2] to-[#24355b] overflow-hidden"
    >
      <div>
        <h1
          className="
        text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl
         font-Open-Sans text-[#000000a6] font-bold rounded-xl 
         p-1 text-shadow-2xs "
        >
          GlobePeek
        </h1>
      </div>

      <nav
        className="flex flex-wrap justify-center gap-2 p-4 sm:p-6 text-sm sm:text-lg lg:text-xl xl:text-2xl xl:gap-10 rounded-xl 
      bg-white/25 hover:bg-white/55 shadow-xl hover:scale-102 duration-700 max-w-full "
      >
        {["About", "Products", "More infos"].map((region) => (
          <button
            key={region}
            className="hover:scale-105 duration-150 text-shadow-2xs cursor-pointer"
            name={region}
            onClick={handleSelect}
          >
            {region}
          </button>
        ))}
      </nav>
    </header>
  );
}
