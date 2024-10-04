import { createBrowserRouter } from "react-router-dom";
import BasePage from "../components/BasePage";
import AboutPage from "../pages/about-page";

import HomePage from "../pages/home-page";
import ContactUs from "../pages/contact-us";
import Cart from "../pages/cart";
export const appRouter = createBrowserRouter(
    [
        {
          path: "/",
          element: <BasePage/>,
          children: [
            {
              index: true,
              element:<HomePage/>
            },
            {
              path: "about",
              element: <AboutPage/>
            },
            {
              path: "contact",
              element: <ContactUs/>
            },
            {
              path:"cart",
              element:<Cart/>
              
            }
          
          ]
        }
    ]
)