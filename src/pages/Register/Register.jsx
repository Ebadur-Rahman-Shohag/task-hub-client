import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi";
import AuthContext from "../../contexts/AuthContext/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import Swal from "sweetalert2";
function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const loading = false;
    const { auth, setUser, registerUser, googleSignIn, updateUserProfile } = useContext(AuthContext);
    // console.log(registerUser);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const userData = Object.fromEntries(formData.entries());

        const email = userData.email;
        const password = userData.password;
        const name = userData.name;
        const photoURL = userData.photoURL;
        if (password.length < 6) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must be at least 6 characters long.",
            });
            return;
        }

        if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must have at least one uppercase letter and one lowercase letter.",
            });
            return;
        }
        // register user
        registerUser(email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                // console.log(user);
                form.reset();
                updateUserProfile(name, photoURL).then(() => {
                    const user = auth.currentUser;
                    setUser(...user, user.displayName = name, user.photoURL = photoURL);
                }).catch((error) => {
                    console.log(error);
                });
                Swal.fire("User registered successfully!");
                navigate("/login");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                        Create your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                        Or{" "}
                        <a
                            href="#"
                            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                            sign in to existing account
                        </a>
                    </p>
                </div>

                <form onSubmit={handleRegister} className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Full Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    {/* Icon */}
                                </div>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter your full name"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Email address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    {/* Icon */}
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="photoURL"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Photo URL (Optional)
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    {/* Icon */}
                                </div>
                                <input
                                    id="photoURL"
                                    name="photoURL"
                                    type="url"
                                    className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter photo URL"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    {/* Icon */}
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiLock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        className="appearance-none relative block w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                        >
                            Create Account
                        </button>
                    </div>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                                    Or continue with
                                </span>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button
                                type="button"
                                onClick={handleGoogleLogin}
                                disabled={loading}
                                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <FcGoogle className="h-5 w-5 mr-2" />
                                Sign up with Google
                            </button>
                        </div>
                    </div>
                </form>
                {/* 
                <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Demo: Registration will work with any valid inputs
                    </p>
                </div> */}
            </div>
        </div>
    );
}

export default Register;
