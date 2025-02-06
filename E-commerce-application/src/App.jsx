import Navbar from "./Components/Navbar/Navbar"
import Content from "./Components/Hero_section-content/Content"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoutes from "./Components/ProtectedRoutes";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login-page/Login";
import Home from "./Components/Home";
import Signup from "./Components/Signup-page/Signup";
import CartPage from "./Components/AddToCartPage/cartPage";
import DeliveryForm from "./Components/Delivery-Form/DeliveryForm";
import AboutPage from "./Components/About_Section/AboutPage";
function App() {
  
  const router = createBrowserRouter(
    [
      {
        path:"/", element: <Login/>
      },
      {
        path:"/signup", element: <Signup/>
      },
     
      {
        path: "/home",
        element: <ProtectedRoutes />, // Wrap Home route in ProtectedRoutes
        children: [
          {
            path: "/home",
            element: <Home />, // Render Home only if ProtectedRoutes allows
          },
        ],
      },
      {
        path:"/cartPage", element: <CartPage/>
      },
      {
        path:"/deliveryForm", element: <DeliveryForm/>
      },
      {
        path:"/about", element:<AboutPage/>
      }
      
    ]
  )
  

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
