import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Bills from "../pages/Bills";
import Spinner from "../components/Spinner";
import BillDetails from "../pages/BillDetails";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
        hydrateFallbackElement: <Spinner></Spinner>,
        loader: () => fetch("/bills.json"),
        Component: Bills,
      },
      {
        path: "/bill/:id",
        hydrateFallbackElement: <Spinner></Spinner>,
        loader: () => fetch("/bills.json"),
        Component: BillDetails,
      },
      {
        path: "/profile",
        element: <h2>Profile Page</h2>,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },

  {
    path: "/*",
    element: <h2>Wrong Url</h2>,
  },
]);

export default router;
