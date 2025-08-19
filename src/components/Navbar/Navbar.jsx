import React from "react";
import { NavLink } from "react-router";

function Navbar() {
    return (
        <>
            <header className="bg-[#1E2939] flex justify-between items-center px-14 py-5">
                {/* logo */}
                <div>
                    <NavLink className={"font-bold text-2xl text-[#51A2FF]"} to="/">Taskhub</NavLink>
                </div>
                {/* links */}
                <div className="flex items-center gap-14 text-white">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/add-task"}>Add Task</NavLink>
                    <NavLink to={"/browse-task"}>Browse Task</NavLink>
                    <NavLink to={"/my-posted-task"}>My Posted Tasks</NavLink>
                    <NavLink to={"/login"}>Login</NavLink>
                    <NavLink to={"/register"} className={"bg-[#1447E6] px-4 py-2 rounded-md text-base"}>Sign Up</NavLink>
                </div>
            </header>
        </>
    );
}

export default Navbar;