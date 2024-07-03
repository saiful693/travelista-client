import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";


const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;