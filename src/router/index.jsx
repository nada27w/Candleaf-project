import { createBrowserRouter } from "react-router-dom";
import BasePage from "../components/BasePage";
import AboutPage from "../pages/about-page";


import HomePage from "../pages/home-page";
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
          
          ]
        }
    ]
)