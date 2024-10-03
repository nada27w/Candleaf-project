import { createBrowserRouter } from "react-router-dom";
import BasePage from "../components/BasePage";
import AboutPage from "../pages/about-page";


export const appRouter = createBrowserRouter(
    [
        {
          path: "/",
          element: <BasePage/>,
          children: [
            {
              index: true,
              element: <>home page</>
            },
            {
              path: "about",
              element: <AboutPage/>
            },
          
          ]
        }
    ]
)