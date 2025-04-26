import { NavLink, Link } from "react-router-dom";
import { headerStyle } from "../Styles/Style";
export default function Header({}) {
  return (
    <header className={headerStyle.header}>
      <div>
        <h1 className={headerStyle.titleStyle}>
          <Link to={"/"}>GlobePeek</Link>
        </h1>
      </div>

      <nav className={headerStyle.navBarStyle}>
        <ul className="flex flex-row gap-10">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? headerStyle.navLinkStyleActive
                  : headerStyle.navLinkStyle
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/source"}
              className={({ isActive }) =>
                isActive
                  ? headerStyle.navLinkStyleActive
                  : headerStyle.navLinkStyle
              }
            >
              Source
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? headerStyle.navLinkStyleActive
                  : headerStyle.navLinkStyle
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
