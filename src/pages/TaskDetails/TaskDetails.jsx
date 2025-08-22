import { FiCalendar, FiDollarSign, FiUser, FiClock, FiTag, FiArrowLeft, FiHeart } from 'react-icons/fi';
import { useLoaderData } from 'react-router';

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

const TaskDetails = () => {
    const { task } = useLoaderData();
    // Calculate days left
    const daysLeft = task.deadline ? Math.max(0, Math.ceil((new Date(task.deadline) - new Date()) / (1000 * 60 * 60 * 24))) : null;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <button
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 transition-colors"
                >
                    <FiArrowLeft className="mr-2" />
                    Back to Tasks
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex-1">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                                            {task.category}
                                        </span>
                                        {daysLeft !== null && (
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200`}>
                                                {daysLeft > 0 ? `${daysLeft} days left` : 'Expired'}
                                            </span>
                                        )}
                                    </div>
                                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                        {task.title}
                                    </h1>
                                    {task.postedDate && (
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Posted on {formatDate(task.postedDate)}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Task Info */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div className="flex items-center">
                                    <FiDollarSign className="text-green-600 dark:text-green-400 mr-2" />
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Budget</p>
                                        <p className="font-semibold text-gray-900 dark:text-white">${task.budget}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FiCalendar className="text-blue-600 dark:text-blue-400 mr-2" />
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Deadline</p>
                                        <p className="font-semibold text-gray-900 dark:text-white">{task.deadline ? formatDate(task.deadline) : 'N/A'}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FiUser className="text-purple-600 dark:text-purple-400 mr-2" />
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Posted By</p>
                                        <p className="font-semibold text-gray-900 dark:text-white">{task.name || task.postedBy}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Skills */}
                            {task.skills && task.skills.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Required Skills</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {task.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Description */}
                            {task.description && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Project Description</h3>
                                    <div className="prose dark:prose-invert max-w-none">
                                        <div className="whitespace-pre-line text-gray-700 dark:text-gray-300">
                                            {task.description}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        {/* Poster Info */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">About the Poster</h3>
                            <div className="flex items-center mb-4">
                                <FiUser className="w-12 h-12 rounded-full object-cover mr-3 text-blue-500" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">{task.name || task.postedBy}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDetails;