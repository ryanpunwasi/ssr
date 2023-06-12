import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import NotFoundPage from "./pages/NotFoundPage";
import App from "./App";

export default [
  {
    ...App,
    routes: [
      {
        path: "/",
        ...HomePage,
        exact: true,
      },
      {
        path: "/users",
        ...UsersListPage,
        exact: true,
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
