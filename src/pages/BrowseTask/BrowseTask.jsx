import {
    FiSearch,
    FiFilter,
    FiClock,
    FiDollarSign,
    FiUser,
    FiEye,
} from "react-icons/fi";
import { Link, useLoaderData } from "react-router";

const categories = [
    "All Categories",
    "Web Development",
    "Mobile Development",
    "Design",
    "Writing",
    "Marketing",
    "Data Entry",
    "Translation",
    "Video Editing",
    "Photography",
    "Consulting",
];

const BrowseTasks = () => {
    const taskData = useLoaderData();
    // Use backend data for rendering
    const tasks = Array.isArray(taskData) ? taskData : (taskData.tasks || []);
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Browse Tasks
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Discover exciting opportunities and find the perfect project for
                        your skills
                    </p>
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-gray-600 dark:text-gray-400">
                        Showing {tasks.length} of {tasks.length} tasks
                    </p>
                </div>

                {/* Filters */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Search */}
                        <div className="md:col-span-2">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiSearch className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search tasks, skills, or keywords..."
                                    className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    readOnly
                                />
                            </div>
                        </div>
                        {/* Category Filter */}
                        <div>
                            <select
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                readOnly
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* Sort */}
                        <div>
                            <select
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                readOnly
                            >
                                <option>Sort by Deadline</option>
                                <option>Sort by Budget</option>
                                <option>Sort by Bids</option>
                                <option>Sort by Recent</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Redesigned Tasks Grid */}
                {tasks.length === 0 ? (
                    <div className="text-center py-12">
                        <FiFilter className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                            No tasks found
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Try adjusting your search criteria or filters
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tasks.map((task) => (
                            <div
                                key={task._id || task.id}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-6 flex flex-col justify-between"
                            >
                                {/* Category and Budget */}
                                <div className="flex justify-between items-center mb-4">
                                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">
                                        {task.category}
                                    </span>
                                    <span className="text-green-600 dark:text-green-400 font-bold text-lg">
                                        ${task.budget}
                                    </span>
                                </div>
                                {/* Title */}
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                    {task.title}
                                </h2>
                                {/* Deadline */}
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                                    <FiClock className="mr-1" />
                                    <span>Deadline: {task.deadline ? new Date(task.deadline).toLocaleDateString() : 'N/A'}</span>
                                </div>
                                {/* Poster Info */}
                                <div className="flex items-center mb-4">
                                    <FiUser className="mr-2 text-blue-500" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                                        {task.name || 'Anonymous'}
                                    </span>
                                </div>
                                {/* View Details Button */}
                                <div className="mt-auto">
                                    <Link
                                        to={`/task-details/${task._id || task.id}`}
                                        className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BrowseTasks;
