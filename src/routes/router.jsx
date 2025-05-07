import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Bills from "../pages/Bills";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/bills",
        loader: () => fetch("/bills.json"),
        Component: Bills,
      },
      {
        path: "/profile",
        element: <h2>Profile Page</h2>,
      },
    ],
  },
  {
    path: "/*",
    element: <h2>Wrong Url</h2>,
  },
]);

export default router;
