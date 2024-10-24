import {
    createBrowserRouter,
 } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import FoundationWorks from "./FoundationWorks";
import FoundationWorks2 from "./FoundationWorks2";


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
        
        {path: "/foundation2",
          element: <FoundationWorks2></FoundationWorks2>,
        },
      ]
    },
  ]);


  export default router;
