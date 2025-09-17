import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";


import Root from "./Components/Root.Jsx";
import HomeLayOut from "./Components/HomeLayOut.Jsx";
import BrowseTask from "./Components/BrowseTask";
import AddTask from "./Components/AddTask";
import MyPostedTask from "./Components/MyPostedTask";
import ErrorElement from "./Components/ErrorElement";
import AuthProvider from "./Firebase/AuthProvider";
import Register from "./UserPage.jsx/Register";
import Login from "./UserPage.jsx/Login";
import PrivateRoute from "./Components/PrivateRoute";
import Update from "./Components/Update";
// import TaskDetails from "./Components/TaskDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <HomeLayOut />,
      },
      {
        path: "/BrowseTask",
        loader :()=>fetch('https://210-qav2gpe8y-rakins-projects-4190f75f.vercel.app/jobs'),
        element: <BrowseTask />,
      },
      {path:"/AddTask",
          
    element :(
      <PrivateRoute>
        <AddTask />
      </PrivateRoute>
    )
      },
{
  path: "/PostedTask",
  loader: () => fetch("https://210-qav2gpe8y-rakins-projects-4190f75f.vercel.app/jobs"),
  element: (
    <PrivateRoute>
      <MyPostedTask />
    </PrivateRoute>
  ),
},


      {
        path:'/Register',
        element:<Register />
      },
      {
        path:'/Login',
        element:<Login />
      },
      {
        
  path: "/update/:id",
  loader:({params}) => fetch(`http://localhost:3000/jobs/${params.id}`),
  
  
  element: (
    <PrivateRoute>
      <Update />
    </PrivateRoute>
  ),

      },
      {
        path:'/taskDetails/:id',
        loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`),
        element:<TaskDetails />

      }
      
    ]}])


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
<RouterProvider router={router} />
    </AuthProvider>
    
  </StrictMode>
);
