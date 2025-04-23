import { Outlet } from "react-router-dom";
import Header from "./Header";
import { footer } from "../Styles/Styles";
export default function RootLayout() {
  return (
    <>
      <Header />

      <Outlet />
      <footer className={footer.container}>
        <p className="text-sm">Made by MontherALS</p>
      </footer>
    </>
  );
}
