// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import { ClientProvider } from "./contexts/ClientProvider";
import { NavigationProvider } from "./contexts/NavigationProvider";
import Home from "./pages/Home";
import Zaf from "./pages/zaf/Zaf";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/zaf",
    element: <ClientProvider><NavigationProvider><Zaf/></NavigationProvider></ClientProvider>,
  },
]);

export default router;
