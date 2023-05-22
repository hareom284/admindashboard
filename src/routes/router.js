import {createBrowserRouter} from "react-router-dom";
import Home from "../app/Home/home";
import Login from "../app/Login/login";
import DashBoard from "../app/User/index";
const router = createBrowserRouter([
    {
        path: "/",
        element:<Home/>
    },
    {
        path : "login",
        element:<Login/>
    },
    {
        path : "home",
        element:<DashBoard/>
    }
    
]);


export default router;