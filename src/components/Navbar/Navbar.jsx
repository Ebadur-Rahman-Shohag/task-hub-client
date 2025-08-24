import React, { useState, useContext } from "react";
import { NavLink } from "react-router";
import AuthContext from "../../contexts/AuthContext/AuthContext";

function Navbar() {
    const { user, logoutUser } = useContext(AuthContext);
    const [showDropdown, setShowDropdown] = useState(false);


    const handleLogout = () => {
        logoutUser().then(() => {
            console.log("Logout successful");
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <>
            <header className="bg-[#1E2939] flex justify-between items-center px-14 py-5">
                {/* logo */}
                <div>
                    <NavLink className={"font-bold text-2xl text-[#51A2FF]"} to="/">
                        Taskhub
                    </NavLink>
                </div>
                {/* links */}
                <div className="flex items-center gap-14 text-white">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/add-task"}>Add Task</NavLink>
                    <NavLink to={"/browse-task"}>Browse Task</NavLink>
                    <NavLink to={"/my-posted-task"}>My Posted Tasks</NavLink>
                    {user ? (
                        <div
                            className="relative avatar avatar-online"
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <div className="w-12 rounded-full">
                                <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" alt="Profile" />
                            </div>
                            {showDropdown && (
                                <div
                                    className="absolute right-0 mt-4 w-60 bg-[#1E2939] rounded shadow-lg z-10 px-4 flex flex-col items-center"
                                    onMouseEnter={() => setShowDropdown(true)}
                                    onMouseLeave={() => setShowDropdown(false)}
                                >
                                    <h1 className="text-white text-center font-semibold mb-3">John Doe</h1>
                                    <button onClick={handleLogout} className="bg-[#1447E6] text-white px-4 py-2 rounded w-full font-medium">
                                        Sign Out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <NavLink to={"/login"}>Login</NavLink>
                            <NavLink
                                to={"/register"}
                                className={"bg-[#1447E6] px-4 py-2 rounded-md text-base"}
                            >
                                Sign Up
                            </NavLink>
                        </>
                    )}
                </div>
            </header>
        </>
    );
}

export default Navbar;
