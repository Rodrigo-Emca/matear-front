


import MainLayout from "../Layouts/MainLayout/Mainlayout.jsx"
import Register from "./Register/Register.jsx"
import Login from "./Login/Login.jsx"
// import IndexLayout from "../../src/Layouts/IndexLayout/IndexLayout.jsx"
import Shop from "./Shop/Shop.jsx"
import Details from "./Details/Details.jsx"

import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
    // { path: "/",
    // element: <IndexLayout/>,
    // children: [
    //   // {path: "/", element: <Index/>},
     
      { path: "/signup", element: <Register /> },
      { path: "/signin", element: <Login/> },
      { path: "/shop", element: <Shop/> },
      
    //   { path: "/*", element: <NotFound /> },

    

     



  { path: "/",
    element: <MainLayout/>,
    children: [
      {path: '/signin', element: <Login/>},
      { path: "/details/:id", element: <Details/> },
    ]},
  ])
  
