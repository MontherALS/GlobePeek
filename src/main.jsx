import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CountryPage from "./Pages/CountryPage.jsx";
import RootLayout from "./Comp/RootLayout.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import SourcesPage from "./Pages/SourcesPage.jsx";
import About from "./Pages/About.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <App /> },
      { path: "/country", element: <CountryPage /> },
      { path: "/source", element: <SourcesPage /> },
      { path: "/about", element: <About /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
