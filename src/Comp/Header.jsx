import { Link, NavLink } from "react-router-dom";
export default function Header({}) {
  const navLinkStyle =
    "hover:scale-105 hover:text-2xl hover:underline duration-150 text-shadow-2xs cursor-pointer hover:text-blue-800";
  const navLinkStyleActive =
    "underline text-shadow-2xs text-blue-700 font-semibold";
  const navBarStyle =
    "flex flex-wrap justify-center gap-2 p-4 sm:p-6 text-sm sm:text-lg lg:text-xl xl:text-2xl xl:gap-10 rounded-xl bg-white/25 hover:bg-white/55 shadow-xl hover:scale-102 duration-700 max-w-full ";
  const titleStyle = `
        text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl
         font-Open-Sans text-[#000000a6] font-bold rounded-xl 
         p-1 text-shadow-2xs `;
  return (
    <header
      className="flex flex-col items-center w-full lg:flex-row lg:justify-around
    bg-gradient-to-r from-[#646c81] via-[#878688] to-[#24355b] overflow-hidden"
    >
      <div>
        <h1 className={titleStyle}>GlobePeek</h1>
      </div>

      <nav className={navBarStyle}>
        <ul className="flex flex-row gap-10">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? navLinkStyleActive : navLinkStyle
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/source"}
              className={({ isActive }) =>
                isActive ? navLinkStyleActive : navLinkStyle
              }
            >
              Source
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? navLinkStyleActive : navLinkStyle
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
