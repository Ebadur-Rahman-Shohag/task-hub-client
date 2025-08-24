import React from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../contexts/AuthContext/AuthContext";
import { useContext } from "react";

function AddTask() {
    const { user } = useContext(AuthContext);
    console.log(user);
    const navigate = useNavigate();
    const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:8000";
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const taskData = Object.fromEntries(formData.entries());

        // Map frontend fields to backend model
        taskData.name = taskData.userName;
        taskData.email = taskData.userEmail;
        delete taskData.userName;
        delete taskData.userEmail;

        // Convert budget to number
        taskData.budget = Number(taskData.budget);
        // Ensure deadline is a valid date string
        taskData.deadline = new Date(taskData.deadline).toISOString();

        console.log("Task Data Submitted:", taskData);
        fetch(`${baseUrl}/api/v1/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(taskData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Task created successfully:", data);
                form.reset(); // Reset the form after submission
                navigate("/browse-task");
            })
            .catch((error) => {
                console.error("Error creating task:", error);
            });
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                    <div className="px-6 py-8">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                Post a New Task
                            </h1>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                Describe your project and connect with talented freelancers
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Task Title */}
                            <div>
                                <label
                                    htmlFor="title"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Task Title *
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    placeholder="e.g., Build a responsive website for my business"
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label
                                    htmlFor="category"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Category *
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                >
                                    <option value="">Select a category</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Design">Design</option>
                                    <option value="Writing">Writing</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Description */}
                            <div>
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Description *
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={6}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    placeholder="Provide detailed information about your project requirements, expectations, and any specific skills needed..."
                                />
                                <div className="mt-1 flex justify-between">
                                    <div></div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        0/50 minimum
                                    </p>
                                </div>
                            </div>

                            {/* Deadline and Budget Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Deadline */}
                                <div>
                                    <label
                                        htmlFor="deadline"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Deadline *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            {/* Calendar Icon */}
                                        </div>
                                        <input
                                            type="date"
                                            id="deadline"
                                            name="deadline"
                                            required
                                            className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        />
                                    </div>
                                </div>

                                {/* Budget */}
                                <div>
                                    <label
                                        htmlFor="budget"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Budget *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            {/* Dollar Icon */}
                                        </div>
                                        <input
                                            type="number"
                                            id="budget"
                                            name="budget"
                                            required
                                            className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                            placeholder="e.g., $500-$1000 or Fixed $750"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* User Info (Read-only) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* User Name */}
                                <div>
                                    <label
                                        htmlFor="userName"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Your Name
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            {/* User Icon */}
                                        </div>
                                        <input
                                            type="text"
                                            id="userName"
                                            name="userName"
                                            readOnly
                                            className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-50 dark:bg-gray-600 text-gray-900 dark:text-white cursor-not-allowed"
                                            value={user?.displayName}
                                        />
                                    </div>
                                </div>

                                {/* User Email */}
                                <div>
                                    <label
                                        htmlFor="userEmail"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Your Email
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            {/* Mail Icon */}
                                        </div>
                                        <input
                                            type="email"
                                            id="userEmail"
                                            name="userEmail"
                                            readOnly
                                            className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-50 dark:bg-gray-600 text-gray-900 dark:text-white cursor-not-allowed"
                                            value={user?.email}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end space-x-4 pt-6">
                                <button
                                    type="button"
                                    className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                                >
                                    Post Task
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTask;
