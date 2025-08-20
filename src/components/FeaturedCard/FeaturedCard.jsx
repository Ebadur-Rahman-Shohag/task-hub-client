import React from "react";
import { FiCalendar, FiUsers, FiEye, FiClock, FiUser } from "react-icons/fi";
import { Link } from "react-router";

function FeaturedCard() {
    const skills = ["React", "Node.js", "UI/UX", "Responsive Design"];

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    Web Development
                </span>
                <span className="text-green-600 dark:text-green-400 font-semibold text-lg">
                    $500-$1000
                </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                Modern Website Design
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm dark:text-gray-300 mb-4 line-clamp-3">
                Looking for a modern, responsive website design for my startup. Need clean UI/UX with mobile-first approach and modern technologies.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
                {skills.slice(0, 4).map((skill, index) => (
                    <span
                        key={index}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm"
                    >
                        {skill}
                    </span>
                ))}
            </div>

            {/* Meta Info */}
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                        <FiUser className="mr-1" />
                        <span>Sarah Johnson</span>
                    </div>
                    <div className="flex items-center">
                        <FiEye className="mr-1" />
                        <span>12 bids</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <FiClock className="mr-1" />
                    <span>5 days left</span>
                </div>
            </div>

            {/* Posted Date */}
            <div className="text-xs text-gray-400 dark:text-gray-500 mb-4">
                Posted on Feb 10, 2024
            </div>

            {/* Action Button */}
            <Link
                to={`/task-details/${1}`} // Replace with actual task ID
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
            >
                View Details
            </Link>
        </div>
    );
}

export default FeaturedCard;