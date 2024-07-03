import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


const Navbar = () => {

    const {user, logOut}=useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleLogOut = () => {
        logOut()
        .then(()=>{
            toast.success("User LogOut successfully!");
            navigate(location?.state ? location.state : '/')

        })
        .catch(()=>{
            toast.error("Error in user LogOut: ");
        })
    }

    const navLinks =
        < >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/all-tourists-spot">All Tourists Spot</NavLink></li>
            <li><NavLink to="/add-tourists-spot">Add Tourists Spot</NavLink></li>
            <li><NavLink to="/add-countries">Add Country</NavLink></li>
            <li><NavLink to="/my-list">My List</NavLink></li>
        </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu space-x-4  menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <a className="flex items-center text-xl md:text-3xl lg:text-4xl font-bold uppercase text-green-500">Travelista</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal space-x-4  px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <div className="flex">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} alt="user-icon" src={user.photoURL} />
                                <Tooltip id="my-tooltip" />
                            </div>
                        </div>
                        <button onClick={handleLogOut} className="btn bg-green-400 text-white lg:text-lg font-semibold">LogOut</button>
                    </div>
                    :
                    <>
                        <Link to="/register">
                            <button className="btn mr-2 hover:bg-green-500 bg-transparent text-white text-lg font-semibold">Register</button>
                        </Link>
                        <Link to="/login">
                            <button className="btn bg-transparent hover:bg-green-500 text-white text-lg font-semibold">Login</button>
                        </Link>

                    </>
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;