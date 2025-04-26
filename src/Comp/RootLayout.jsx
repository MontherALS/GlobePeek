import { Outlet } from "react-router-dom";
import Header from "./Header";
import { footerStyle } from "../Styles/Style";
export default function RootLayout() {
  return (
    <>
      <Header />

      <Outlet />
      <footer className={footerStyle.container}>
        <p className="text-sm">Made by MontherALS</p>
      </footer>
    </>
  );
}
