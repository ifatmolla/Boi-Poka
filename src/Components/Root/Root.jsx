import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <h1>hello world</h1>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;