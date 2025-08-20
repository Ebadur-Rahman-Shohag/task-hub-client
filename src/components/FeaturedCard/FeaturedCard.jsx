import React from "react";
import { FiCalendar, FiUsers, FiEye } from "react-icons/fi";
import { Link } from "react-router";

function FeaturedCard() {
    return (
        <div className="bg-[#364153] px-6 py-4 rounded-lg space-y-4">
            {/* category and price */}
            <div className="flex justify-between">
                <p className="bg-[#1C398E] px-3 py-1 rounded-2xl text-center">
                    <span className="text-[#B9D1F0FF] text-base">Web Development</span>
                </p>
                <p className="text-[#05D363] text-base">$500-$1000</p>
            </div>
            {/* details */}
            <div className="space-y-2 text-white">
                <h1 className="text-2xl ">Modern Website Design</h1>
                <p className="text-gray-300">Looking for a modern, responsive website design for my startup...</p>
            </div>
            {/* date and bids with icons */}
            <div className="flex justify-between text-gray-400">
                <p className="flex items-center gap-1">
                    <FiCalendar className="inline-block" />
                    <span>Due: 2/15/2024</span>
                </p>
                <p className="flex items-center gap-1">
                    <FiUsers className="inline-block" />
                    <span>12 bids</span>
                </p>
            </div>
            <div className="w-full bg-[#155DFC] text-center py-2 rounded-xl text-white text-lg">
                <Link to="/task-details" className="flex items-center justify-center gap-2 w-full">
                    <FiEye className="inline-block" />
                    View Details
                </Link>
            </div>
        </div>
    );
}

export default FeaturedCard;