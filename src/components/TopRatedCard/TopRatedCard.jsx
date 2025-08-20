import React from "react";
import { FiBriefcase, FiStar } from "react-icons/fi";

function TopRatedCard() {
    return (
        <div className="bg-[#364153] px-6 py-6 rounded-lg space-y-4 flex flex-col justify-center items-center">
            {/* person image */}
            <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                </div>
            </div>
            {/* name */}
            <h1 className="text-2xl text-white">John Doe</h1>
            <p className="text-gray-400">Web Developer</p>
            <div className="w-full flex justify-center items-center gap-4 text-white">
                <p className="flex items-center gap-1"><FiBriefcase />127 jobs</p>
                <p className="flex items-center gap-1"><FiStar className="text-yellow-400" />4.9</p>
            </div>
        </div>
    );
}

export default TopRatedCard;