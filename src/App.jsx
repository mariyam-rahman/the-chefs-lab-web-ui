import React, { useContext } from "react";
import { useState } from "react";

import "./App.css";
import { AuthContext } from "./AuthContext";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/pages/Main";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ChefDetails from "./components/pages/ChefDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;