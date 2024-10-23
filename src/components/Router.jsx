import {
    createBrowserRouter,
 } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import FoundationWorks from "./FoundationWorks";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {path: "/foundation",
          element: <FoundationWorks></FoundationWorks>,
        },
      ]
    },
  ]);


  export default router;
