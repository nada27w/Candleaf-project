import { createBrowserRouter } from "react-router-dom";
import BasePage from "../components/BasePage";
import AboutPage from "../pages/about-page";
import HomePage from "../pages/home-page";
import ContactUs from "../pages/contact-us";
import Cart from "../pages/cart";
import Product from "../pages/product-details"
import AddressPage from "../pages/address-page";
import ConfirmationPage from "../pages/confirmation-page";
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
            },
            {
               //you must enter : to ensure that this is a parameter not a page
              // path:"product/:productName/:price/:image",
              path:"product",
              element:<Product/>
            }
            ,
            {
              path:"address-page",
              element:<AddressPage/>
            },
            {
              path:"confirm",
              element:<ConfirmationPage/>
            }

          ]
        }
    ]
)