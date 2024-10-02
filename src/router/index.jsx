import { createBrowserRouter } from "react-router-dom";
import BasePage from "../components/BasePage";

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
              element: <>about page</>
            }
          ]
        }
    ]
)