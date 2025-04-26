export const headerStyle = {
  header:
    "flex flex-col items-center w-full lg:flex-row lg:justify-around bg-gradient-to-r from-[#646c81] via-[#878688] to-[#24355b]  overflow-hidden",
  navLinkStyle:
    "hover:scale-105  sm:text-3xl hover:underline duration-150 text-shadow-2xs cursor-pointer hover:text-blue-800",
  navLinkStyleActive:
    "px-3 py-1 rounded-lg bg-[#4e6f9d] text-white shadow-md shadow-blue-300/30",
  navBarStyle:
    "flex flex-wrap justify-center gap-2 p-4 sm:p-6 text-sm sm:text-lg lg:text-xl xl:text-2xl xl:gap-10 rounded-xl bg-white/25 hover:bg-white/55 shadow-xl hover:scale-102 duration-700 max-w-full ",
  titleStyle: `
  text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl
   font-Open-Sans  text-gray-200  font-bold rounded-xl 
   p-1 text-shadow-lg `,
};

export const continentSelectStyle = {
  navStyle:
    "flex flex-wrap justify-center gap-2 p-4 sm:p-6 text-sm sm:text-lg lg:text-xl xl:text-2xl xl:gap-10 rounded-xl bg-white/25 hover:bg-white/77 shadow-xl hover:scale-102 duration-700 max-w-full ",
  section: "flex flex-col justify-around items-center mt-16",
  button:
    "hover:scale-105 sm:text-[25px] duration-150 text-shadow-2xs cursor-pointer",
};
export const countryTableStyle = {
  container: " mt-3 border-2 w-full border-none",
  headerRow: " bg-gradient-to-l from-gray-300 to-gray-50/22 text-lg",
  headerCell: "cursor-pointer hover:text-blue-950 ",
  bodyCell: " flex  items-center gap-2",
  countryStyle:
    "text-gray-200 transition hover:scale-105 duration-300  bg-gradient-to-br from-[#1c2945]/55 to-[#637481]/22 backdrop-blur-3xl hover:bg-[#d7dbff] text-center ",
  countriesAttributeStyle: " px-3 py-3 md:text-lg text-sm",
  flagimg:
    " m-2   w-10 h-8 sm:w-9 sm:h-5 md:w-10 lg:w-15 lg:h-10 md:h-6 object-cover",
  countryNameSpan: "font-light font-mono text-sm md:text-lg lg:text-2xl",
  linkStyle:
    "px-4 py-1 rounded-lg text-sm font-semibold bg-[#475b77] hover:bg-blue-600 text-white shadow hover:scale-105 transition duration-200",
};
export const footerStyle = {
  container:
    "col-span-2 bg-gray-900 text-white text-center py-4 rounded-xl shadow-md",
};
export const countryDetailsPageStyle = {
  labelStyle: "text-gray-300 font-semibold text-lg",
  valueStyle: "text-xl md:text-2xl text-white font-mono",
  boxStyle:
    "w-full sm:w-[90%] md:w-[80%] lg:w-[75%] bg-gradient-to-bl from-[#cec9d2]/30 to-[#7b7ba4]/20 p-6 rounded-2xl shadow-xl flex flex-col items-center gap-6 backdrop-blur",
  flagImg:
    "w-20 sm:w-28 md:w-55 rounded-xl shadow-lg hover:scale-105 transition duration-500",
  coatOfArmsImg:
    "w-20 sm:w-28 md:w-44 hover:rotate-6 hover:scale-105 transition duration-500 ",
  button:
    "bg-[#1e2941] text-white  text-xl font-semibold px-6 py-3 rounded-xl hover:bg-[#0b162c] transition duration-300 shadow hover:scale-105",
};
export const countryPageStyle = {
  loadingContainer:
    "min-h-screen flex items-center justify-center bg-gray-900 text-white",
  loadingText: "text-2xl font-mono animate-pulse",

  main: "grid grid-cols-1 sm:grid-cols-2 grid-rows-[auto_auto_auto_auto_auto] gap-4 p-6 min-h-screen bg-gray-800",
  economyMapDiv:
    "bg-gradient-to-bl from-[#a2a0c2] to-[#7b7ba4] rounded-2xl shadow-md p-3 text-white",
  populationMapDiv:
    "bg-gradient-to-bl from-[#66ad72] to-[#68688c] rounded-2xl  shadow-md p-3 text-white",
};
export const sourcesPageStyle = {
  container: "min-h-screen bg-gray-800 text-white p-6 sm:p-10 font-sans",
  p: "font-Crimson text-lg sm:text-2xl leading-relaxed text-gray-200",
  h1: "text-3xl sm:text-4xl font-mono text-blue-400 mb-2",
  a: "text-blue-500 hover:text-blue-300 underline duration-300",
};
export const aboutStyle = {
  main: "min-h-screen bg-gray-800 text-white p-6 sm:p-10 font-sans",
  div: "max-w-4xl mx-auto space-y-8",
  h1: "text-4xl sm:text-5xl font-bold text-blue-300 border-b border-blue-500 pb-2",
  h2: "text-2xl font-semibold text-blue-400 mb-2",
  p: "text-lg leading-relaxed text-gray-200",
  ul: "list-disc list-inside text-lg text-gray-300 space-y-1",
};
