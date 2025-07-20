import { useRoutes } from "react-router-dom";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Posts from "./pages/posts";
import Users from "./pages/users";
import UserDetails from "./pages/users/UserDetails";

export const BaseUrl = "https://jsonplaceholder.typicode.com";
const App = () => {
  const myRoutes = [
    { path: "/posts", element: <Posts /> },
    { path: "/users", element: <Users /> },
    {path: "/users/:id", element: <UserDetails/>},
  ];
  const element = useRoutes(myRoutes);
  return <>{element}</>;
};
export default App;
