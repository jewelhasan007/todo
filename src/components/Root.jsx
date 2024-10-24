import { Outlet } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Updates from "./Updates";

const Root = () => {
    
    return (
        <div>
        <Updates></Updates>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </div>
    );
};

export default Root;