import { createBrowserRouter } from "react-router-dom";
import Main from "../mainLayout/Main";
import Login from "../components/Login";
import Home from "../pages/Home";
import Register from "../components/Register";
import AboutUs from "../pages/AboutUs";
// import Services from "../pages/services/Services";
import Error from "../error/Error";
// import PrivateRoute from "./privateRoute";
// import CommingSoon from "../error/CommingSoon";
import MyCart from "../pages/MyCart";
import AddProduct from "../pages/AddProduct";

import UpdateCosmetics from "../components/UpdateCosmetics";
// import BrandData from "../components/BrandData";
import Brand from "../layout/Brand";
import Avon from "../components/AllBrand/Avon";
import Alcon from "../components/AllBrand/Alcon";
import Dior from "../components/AllBrand/Dior";
import Chanel from "../components/AllBrand/Chanel";
import Loreal from "../components/AllBrand/Loreal";
import BeautyGlazed from "../components/AllBrand/BeautyGlazed";
import EsteLauder from "../components/AllBrand/EsteLauder";
import LuiosVuttion from "../components/AllBrand/LuiosVuttion";
import PrivateRoute from "./privateRoute";

import BrandDetails from "../components/BrandDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "/brand",
        element: <Brand></Brand>,
       
      },
     
      {
        path: "/aboutus",
        element:<AboutUs></AboutUs>,
      },
     
      {
        path: "/estelauder",
        element:<EsteLauder></EsteLauder>,
          loader: () => fetch("https://beauty-server-project-assignment.vercel.app/allproducts")
      },
     
     
      {
        path: "/beautyglazed",
        element:<BeautyGlazed></BeautyGlazed>,
        loader: () => fetch("https://beauty-server-project-assignment.vercel.app/allproducts")
      },
     
      {
        path: "/loreal",
        element:<Loreal></Loreal>,
        loader: () => fetch("https://beauty-server-project-assignment.vercel.app/allproducts")
      },
     
      {
        path: "/chanel",
        element:<Chanel></Chanel>,
        loader: () => fetch("https://beauty-server-project-assignment.vercel.app/allproducts")
      },
      {
        path: "/luiosvuttion",
        element:<LuiosVuttion></LuiosVuttion>,
        loader: () => fetch("https://beauty-server-project-assignment.vercel.app/allproducts")
      },
     
      {
        path: "/dior",
        element:<Dior></Dior>,
        loader: () => fetch("https://beauty-server-project-assignment.vercel.app/allproducts")
      },
     
      {
        path: "/alcon",
        element:<Alcon></Alcon>,
        loader: () => fetch("https://beauty-server-project-assignment.vercel.app/allproducts")
      },
     
      {
        path: "/avon",
        element:<Avon></Avon>,
        loader: () => fetch("https://beauty-server-project-assignment.vercel.app/allproducts")
      },
     
      {
        path: "/aboutus",
        element:<AboutUs></AboutUs>,
      },
      {
        path: "/productdetails/:id",
        element:<BrandDetails></BrandDetails>,
          loader: ({params}) =>fetch(`https://beauty-server-project-assignment.vercel.app/allproducts/${params.id}`)
      },
      // {
      //   path: "/brand/:id",
      //   element:<BrandData></BrandData>,
       
      
      // },
      // {
      //   path: "/commingsoon",
      //   element:<CommingSoon></CommingSoon>,
      // },
      {
        path: "/mycart",
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: async () => {
          const response = await fetch('https://beauty-server-project-assignment.vercel.app/cosmetics');
          const data = await response.json();
          return data;
        }
      },
       {
    path: "/updatecosmetics/:id",
    element:<PrivateRoute><UpdateCosmetics></UpdateCosmetics> </PrivateRoute>,
    loader: ({params}) => fetch(`https://beauty-server-project-assignment.vercel.app/allproducts/${params.id}`)
  },
      {
        path: "/addproduct",
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
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