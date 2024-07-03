import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const [msg, setMsg] = useState(false);
    const validatePassword = (password) => {
        setMsg(false);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;
        return hasUpperCase && hasLowerCase && isLongEnough;
    };

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        if (!validatePassword(password)) {
            setMsg(true)
            return;
        }

        createUser(email, password)
            .then(() => {
                const user={ user_name:name, user_email:email, photo}
                toast.success("User registered successfully!");
                // send data to the server
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'User added successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                              })
                        }
                    })
                navigate(location?.state ? location.state : '/login')
            })
            .catch(error => {
                toast.error('Error registering user: ' + error.message);
            })



    }

    return (
        <div className="flex items-center justify-center mt-10">
            <div className="w-full max-w-xl p-8 space-y-3 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full text-white bg-gray-400 px-3 py-2 border rounded-md"
                            required
                        />
                    </div>
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
                        <label className="block mb-1 text-sm font-medium">Photo Url</label>
                        <input
                            type="text"
                            name="photo"
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
                    {
                        msg ?
                            <p className="text-red-500">Password must have at least 6 characters, including an uppercase and a lowercase letter.</p> : ''
                    }
                    <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">Register</button>
                </form>
                <p className="text-sm text-center">Already have an account? <Link to='/login' className="text-blue-500 hover:underline">Login here</Link></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;