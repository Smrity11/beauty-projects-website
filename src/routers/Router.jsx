import { createBrowserRouter } from "react-router-dom";
import Main from "../mainLayout/Main";
import Login from "../components/Login";
import Home from "../pages/Home";
import Register from "../components/Register";
import AboutUs from "../pages/AboutUs";
// import Services from "../pages/services/Services";
import Error from "../error/Error";
// import PrivateRoute from "./privateRoute";
import CommingSoon from "../error/CommingSoon";
import MyCart from "../pages/MyCart";
import AddProduct from "../pages/AddProduct";
import Shop from "../pages/Shop";
import UpdateCosmetics from "../components/UpdateCosmetics";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:() => fetch("services.json")
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      
      {
        path: "/register",
        element: <Register></Register>,
      },
      
     
      {
        path: "/aboutus",
        element:<AboutUs></AboutUs>,
      },
      {
        path: "/commingsoon",
        element:<CommingSoon></CommingSoon>,
      },
      {
        path: "/mycart",
        element:<MyCart></MyCart>,
        loader: async () => {
          const response = await fetch('http://localhost:5000/cosmetics');
          const data = await response.json();
          return data;
        }
      },
       {
    path: "/updatecosmetics/:id",
    element:<UpdateCosmetics></UpdateCosmetics> ,
    loader: ({params}) => fetch(`http://localhost:5000/cosmetics/${params.id}`)
  },
      {
        path: "/addproduct",
        element:<AddProduct></AddProduct>,
      },
      {
        path: "/shop",
        element:<Shop></Shop>,
      },
    
    //   {
    //     path: "/services",
    //     element:<PrivateRoute> <Services></Services></PrivateRoute>,
    //     loader:() => fetch("services.json")
    //   },
      
    ],
  },
]);
export default router;