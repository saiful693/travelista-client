import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../providers/AuthProvider";


const Login = () => {

    const { logIn, logInWithGoogle, logInWithGithub } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(() => {
                toast.success("User login successfully!");
                navigate(location?.state ? location.state : '/')
            })
            .catch((error) => {
                toast.error('Error login user: ' + error.message);
            })
    }


    const handleGoogleLogin = () => {
        logInWithGoogle()
            .then(() => {
                toast.success("User google login successfully!");
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast.error("Error registering user: " + error.message);
            })
    }

    const handleGithubLogin = () => {
        logInWithGithub()
            .then(() => {
                toast.success("User Github login successfully!");
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast.error("Error registering user: " + error.message);
            })
    }



    return (
        <div className="flex items-center justify-center mt-10">
            <div className="w-full max-w-xl p-8 space-y-3 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full  text-white bg-gray-400 px-3 py-2 border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full  text-white bg-gray-400 px-3 py-2 border rounded-md"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">Login</button>
                </form>
                <div className="p-3 mb-4 text-center space-x-2">
                    <button onClick={handleGoogleLogin} className="mb-2 btn border border-blue-200">
                        <FcGoogle />
                        Login with Google
                    </button>
                    <button onClick={handleGithubLogin} className=" btn border border-blue-200">
                        <FaGithub />
                        Login with Github
                    </button>
                </div>
                <p className="text-sm text-center">Do not have any account? <Link to='/register' className="text-blue-500 hover:underline">Register here</Link></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;