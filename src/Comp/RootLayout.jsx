import { Outlet } from "react-router-dom";
import Header from "./Header";
export default function RootLayout() {
  return (
    <>
      <Header />

      <Outlet />
      <footer className="col-span-2 bg-gray-900 text-white text-center py-4 rounded-xl shadow-md">
        <p className="text-sm">Made by MontherALS</p>
      </footer>
    </>
  );
}
