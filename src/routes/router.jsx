import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <h2>Home</h2>,
      },
      {
        path: "/bills",
        element: <h2>All Bills</h2>,
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
