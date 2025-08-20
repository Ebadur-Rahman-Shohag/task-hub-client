import { Link } from 'react-router';
import { FiEdit, FiTrash2, FiEye, FiCalendar, FiDollarSign, FiUsers, FiPlus } from 'react-icons/fi';

const mockUserTasks = [
    {
        id: 1,
        title: "Modern E-commerce Website Development",
        category: "Web Development",
        description: "Looking for an experienced developer to build a modern, responsive e-commerce website...",
        budget: "$1500-$3000",
        deadline: "2024-03-15",
        postedDate: "2024-01-20",
        status: "Active",
        bidsCount: 24,
        viewsCount: 156
    },
    {
        id: 2,
        title: "Mobile App UI/UX Design",
        category: "Design",
        description: "Need a complete UI/UX design for a fitness tracking mobile app...",
        budget: "$1000-$2000",
        deadline: "2024-03-20",
        postedDate: "2024-01-25",
        status: "Active",
        bidsCount: 15,
        viewsCount: 89
    },
    {
        id: 3,
        title: "Content Writing for Tech Blog",
        category: "Writing",
        description: "Looking for a skilled content writer to create engaging blog posts...",
        budget: "$800-$1200",
        deadline: "2024-02-28",
        postedDate: "2024-01-18",
        status: "Completed",
        bidsCount: 31,
        viewsCount: 203
    },
    {
        id: 4,
        title: "Python Data Analysis Script",
        category: "Web Development",
        description: "Need a Python script to analyze sales data from CSV files...",
        budget: "$500-$800",
        deadline: "2024-02-10",
        postedDate: "2024-01-15",
        status: "Expired",
        bidsCount: 22,
        viewsCount: 134
    }
];

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

const getStatusColor = (status) => {
    switch (status) {
        case 'Active':
            return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
        case 'Completed':
            return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
        case 'Expired':
            return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
        default:
            return 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200';
    }
};

const MyPostedTasks = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Posted Tasks</h1>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Manage your posted tasks and track their progress
                        </p>
                    </div>
                    <Link
                        to="/add-task"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
                    >
                        <FiPlus className="mr-2" />
                        Post New Task
                    </Link>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <div className="flex items-center">
                            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                                <FiUsers className="text-blue-600 dark:text-blue-400" size={24} />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-600 dark:text-gray-400">Total Tasks</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">{mockUserTasks.length}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <div className="flex items-center">
                            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                                <FiUsers className="text-green-600 dark:text-green-400" size={24} />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-600 dark:text-gray-400">Active Tasks</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {mockUserTasks.filter(task => task.status === 'Active').length}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <div className="flex items-center">
                            <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                                <FiEye className="text-purple-600 dark:text-purple-400" size={24} />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-600 dark:text-gray-400">Total Bids</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {mockUserTasks.reduce((sum, task) => sum + task.bidsCount, 0)}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <div className="flex items-center">
                            <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-full">
                                <FiEye className="text-yellow-600 dark:text-yellow-400" size={24} />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-600 dark:text-gray-400">Total Views</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {mockUserTasks.reduce((sum, task) => sum + task.viewsCount, 0)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tasks Table */}
                {mockUserTasks.length === 0 ? (
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-12 text-center">
                        <FiUsers className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No tasks posted yet</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Start by posting your first task to connect with talented freelancers
                        </p>
                        <Link
                            to="/add-task"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
                        >
                            <FiPlus className="mr-2" />
                            Post Your First Task
                        </Link>
                    </div>
                ) : (
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        {/* Desktop Table */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Task
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Budget
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Deadline
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Bids
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                    {mockUserTasks.map((task) => (
                                        <tr key={task.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                            <td className="px-6 py-4">
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                        {task.title}
                                                    </div>
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                                        {task.category} • Posted {formatDate(task.postedDate)}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center text-sm text-gray-900 dark:text-white">
                                                    <FiDollarSign className="mr-1 text-green-600 dark:text-green-400" />
                                                    {task.budget}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center text-sm text-gray-900 dark:text-white">
                                                    <FiCalendar className="mr-1 text-blue-600 dark:text-blue-400" />
                                                    {formatDate(task.deadline)}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(task.status)}`}>
                                                    {task.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center text-sm text-gray-900 dark:text-white">
                                                    <FiUsers className="mr-1 text-purple-600 dark:text-purple-400" />
                                                    {task.bidsCount}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <div className="flex space-x-2">
                                                    <Link
                                                        to={`/update-task/${task.id}`}
                                                        className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors"
                                                        title="Update Task"
                                                    >
                                                        <FiEdit size={16} />
                                                    </Link>
                                                    <button
                                                        className="text-green-600 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 transition-colors"
                                                        title="View Bids"
                                                    >
                                                        <FiEye size={16} />
                                                    </button>
                                                    <button
                                                        className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 transition-colors"
                                                        title="Delete Task"
                                                    >
                                                        <FiTrash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Cards */}
                        <div className="md:hidden">
                            {mockUserTasks.map((task) => (
                                <div key={task.id} className="p-6 border-b dark:border-gray-700 last:border-b-0">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {task.title}
                                        </h3>
                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(task.status)}`}>
                                            {task.status}
                                        </span>
                                    </div>

                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{task.category}</p>

                                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                                        <div className="flex items-center text-gray-700 dark:text-gray-300">
                                            <FiDollarSign className="mr-1 text-green-600 dark:text-green-400" />
                                            {task.budget}
                                        </div>
                                        <div className="flex items-center text-gray-700 dark:text-gray-300">
                                            <FiCalendar className="mr-1 text-blue-600 dark:text-blue-400" />
                                            {formatDate(task.deadline)}
                                        </div>
                                        <div className="flex items-center text-gray-700 dark:text-gray-300">
                                            <FiUsers className="mr-1 text-purple-600 dark:text-purple-400" />
                                            {task.bidsCount} bids
                                        </div>
                                        <div className="flex items-center text-gray-700 dark:text-gray-300">
                                            <FiEye className="mr-1 text-yellow-600 dark:text-yellow-400" />
                                            {task.viewsCount} views
                                        </div>
                                    </div>

                                    <div className="flex space-x-3">
                                        <Link
                                            to={`/update-task/${task.id}`}
                                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm font-medium transition-colors text-center"
                                        >
                                            Update
                                        </Link>
                                        <button
                                            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded text-sm font-medium transition-colors"
                                        >
                                            View Bids
                                        </button>
                                        <button
                                            className="bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded text-sm font-medium transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyPostedTasks;