import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ROUTERS/Home";

import Login from "./ROUTERS/Login";
import Signin from "./ROUTERS/Signin";
import Dashboard from "./ROUTERS/Dashboard";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Login />,
   
  },
  {
    path: "/signin",
    element: <Signin />,
  },         
  {
    path: "/dashboard",
    element: <Dashboard/>,
  }, 
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
