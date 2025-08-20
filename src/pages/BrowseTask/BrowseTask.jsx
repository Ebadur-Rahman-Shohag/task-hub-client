import { FiSearch, FiFilter, FiClock, FiDollarSign, FiUser, FiEye } from 'react-icons/fi';
import { Link } from 'react-router';

const mockTasks = [
    {
        id: 1,
        title: "Modern E-commerce Website Development",
        category: "Web Development",
        description: "Looking for an experienced developer to build a modern, responsive e-commerce website with payment integration, user authentication, and admin panel. The site should be built using React and Node.js with a clean, professional design.",
        budget: "$1500-$3000",
        deadline: "2024-03-15",
        postedBy: "Sarah Johnson",
        postedDate: "2024-01-20",
        bidsCount: 24,
        skills: ["React", "Node.js", "MongoDB", "Payment Integration"]
    },
    {
        id: 2,
        title: "Logo Design for Tech Startup",
        category: "Design",
        description: "Need a professional, modern logo for a new tech startup in the AI space. Looking for something clean, memorable, and scalable. Should work well in both light and dark themes.",
        budget: "$200-$500",
        deadline: "2024-02-28",
        postedBy: "Mike Chen",
        postedDate: "2024-01-18",
        bidsCount: 18,
        skills: ["Logo Design", "Branding", "Adobe Illustrator", "Creative Design"]
    },
    {
        id: 3,
        title: "Content Writing for Tech Blog",
        category: "Writing",
        description: "Looking for a skilled content writer to create engaging blog posts about emerging technologies, AI, and software development. Need 10 articles, 1500-2000 words each.",
        budget: "$800-$1200",
        deadline: "2024-03-10",
        postedBy: "Emily Davis",
        postedDate: "2024-01-22",
        bidsCount: 31,
        skills: ["Content Writing", "SEO", "Tech Writing", "Research"]
    },
    {
        id: 4,
        title: "Mobile App UI/UX Design",
        category: "Design",
        description: "Need a complete UI/UX design for a fitness tracking mobile app. Should include wireframes, user flow, and high-fidelity mockups for both iOS and Android platforms.",
        budget: "$1000-$2000",
        deadline: "2024-03-20",
        postedBy: "Alex Rodriguez",
        postedDate: "2024-01-25",
        bidsCount: 15,
        skills: ["UI/UX Design", "Figma", "Mobile Design", "Prototyping"]
    },
    {
        id: 5,
        title: "Social Media Marketing Campaign",
        category: "Marketing",
        description: "Looking for a social media expert to create and manage a 3-month marketing campaign across Instagram, Facebook, and LinkedIn for a B2B software company.",
        budget: "$2000-$4000",
        deadline: "2024-02-15",
        postedBy: "Jennifer Wilson",
        postedDate: "2024-01-15",
        bidsCount: 12,
        skills: ["Social Media Marketing", "Content Strategy", "Analytics", "B2B Marketing"]
    },
    {
        id: 6,
        title: "Python Data Analysis Script",
        category: "Web Development",
        description: "Need a Python script to analyze sales data from CSV files, generate reports, and create visualizations. Should include data cleaning, statistical analysis, and chart generation.",
        budget: "$500-$800",
        deadline: "2024-02-25",
        postedBy: "David Kim",
        postedDate: "2024-01-28",
        bidsCount: 22,
        skills: ["Python", "Data Analysis", "Pandas", "Matplotlib"]
    },
    {
        id: 7,
        title: "Video Editing for YouTube Channel",
        category: "Video Editing",
        description: "Looking for a video editor to edit weekly YouTube videos for a tech review channel. Need someone who can create engaging content with good pacing, transitions, and graphics.",
        budget: "$300-$600",
        deadline: "2024-03-05",
        postedBy: "Chris Thompson",
        postedDate: "2024-01-30",
        bidsCount: 19,
        skills: ["Video Editing", "After Effects", "Premiere Pro", "Motion Graphics"]
    },
    {
        id: 8,
        title: "WordPress Website Customization",
        category: "Web Development",
        description: "Need to customize an existing WordPress theme for a restaurant website. Includes menu integration, online ordering system, and reservation functionality.",
        budget: "$800-$1500",
        deadline: "2024-03-12",
        postedBy: "Maria Garcia",
        postedDate: "2024-02-01",
        bidsCount: 16,
        skills: ["WordPress", "PHP", "Custom Theme", "WooCommerce"]
    }
];

const categories = [
    'All Categories',
    'Web Development',
    'Mobile Development',
    'Design',
    'Writing',
    'Marketing',
    'Data Entry',
    'Translation',
    'Video Editing',
    'Photography',
    'Consulting'
];

const BrowseTasks = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Browse Tasks
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Discover exciting opportunities and find the perfect project for your skills
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

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-gray-600 dark:text-gray-400">
                        Showing {mockTasks.length} of {mockTasks.length} tasks
                    </p>
                </div>

                {/* Tasks Grid */}
                {mockTasks.length === 0 ? (
                    <div className="text-center py-12">
                        <FiFilter className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No tasks found</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Try adjusting your search criteria or filters
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {mockTasks.map((task) => (
                            <div key={task.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-4">
                                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                                        {task.category}
                                    </span>
                                    <span className="text-green-600 dark:text-green-400 font-semibold text-lg">
                                        {task.budget}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                                    {task.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                    {task.description}
                                </p>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {task.skills.slice(0, 4).map((skill, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                    {task.skills.length > 4 && (
                                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                                            +{task.skills.length - 4} more
                                        </span>
                                    )}
                                </div>

                                {/* Meta Info */}
                                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center">
                                            <FiUser className="mr-1" />
                                            <span>{task.postedBy}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FiEye className="mr-1" />
                                            <span>{task.bidsCount} bids</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <FiClock className="mr-1" />
                                        <span>5 days left</span>
                                    </div>
                                </div>

                                {/* Posted Date */}
                                <div className="text-xs text-gray-400 dark:text-gray-500 mb-4">
                                    Posted on Jan 20, 2024
                                </div>

                                {/* Action Button */}
                                <Link
                                    to={`/task-details/${task.id}`}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
                                >
                                    View Details
                                </Link>
                            </div>
                        ))}
                    </div>
                )}

                {/* Load More Button (for pagination) */}
                {mockTasks.length > 0 && (
                    <div className="text-center mt-12">
                        <button className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-medium transition-colors">
                            Load More Tasks
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BrowseTasks;