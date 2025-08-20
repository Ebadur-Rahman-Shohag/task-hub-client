import React from 'react';
import { Link } from 'react-router';
import { FiHome, FiSearch, FiArrowLeft } from 'react-icons/fi';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                {/* 404 Number */}
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-700 mb-4">
                        404
                    </h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Error Message */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        Sorry, the page you are looking for doesn't exist or has been moved.
                    </p>
                </div>



                {/* Action Buttons */}
                <div className="space-y-4">
                    <Link
                        to="/"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
                    >
                        <FiHome className="h-5 w-5" />
                        Go to Homepage
                    </Link>

                    {/* <Link
                        to="/browse-task"
                        className="w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
                    >
                        <FiSearch className="h-5 w-5" />
                        Browse Tasks
                    </Link> */}

                    <button
                        onClick={() => window.history.back()}
                        className="w-full text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 py-3 px-6 font-medium transition-colors inline-flex items-center justify-center gap-2"
                    >
                        <FiArrowLeft className="h-5 w-5" />
                        Go Back
                    </button>
                </div>


            </div>
        </div>
    );
};

export default NotFound;
