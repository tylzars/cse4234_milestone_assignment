import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import "./styles/index.css";

// page imports
import Root from "./routes/root";
import CreateNew from "./routes/createNew";
import Detail from "./routes/detail";
import List from "./routes/list";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "createNew",
    element: <CreateNew />,
    errorElement: <ErrorPage />,
  },
  {
    path: "detail",
    element: <Detail />,
    errorElement: <ErrorPage />,
  },
  {
    path: "list",
    element: <List />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);