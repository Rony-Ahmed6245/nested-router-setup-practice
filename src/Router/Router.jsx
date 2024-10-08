import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import DashboardHome from "../Pages/DashboardPages/DashboardHome";
import UserManage from "../Pages/DashboardPages/UserManage";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element: <About></About>
            }
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'dashboard/',
        element:<DashboardHome></DashboardHome>,
        children:[
            {
                path:'usermanage',
                element:<UserManage></UserManage>
            }
        ]
    }

])
export default Router;