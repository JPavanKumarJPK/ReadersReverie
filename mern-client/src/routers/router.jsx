import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App"
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";
import UploadBook from "../Dashboard/UploadBook";
import MangeBooks from "../Dashboard/ManageBooks";
import Editbooks from "../Dashboard/EditBooks";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path:'/',
            element: <Home/>
        },
        {
            path:"/shop",
            element: <Shop/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/blog",
            element:<Blog/>
        }
        ,
        {
            path:"/book/:id",
            element:<SingleBook/>,
             loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    },
    {
      path:"/admin/dashboard",
      element:<DashboardLayout/>,
      children:[
          {
            path:"/admin/dashboard",
            element:<Dashboard/>
          },
          {
            path:"/admin/dashboard/upload",
            element:<UploadBook/>
          },
          {
            path:"/admin/dashboard/manage",
            element:<MangeBooks/>
          },
          {
            path:"/admin/dashboard/edit-books/:id",
            element:<Editbooks/>,
            loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
          }
      ]
    }
   
  ]);

  export default router;
  