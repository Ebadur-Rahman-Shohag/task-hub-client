import { FiCalendar, FiDollarSign, FiUser, FiClock, FiTag, FiArrowLeft, FiHeart } from 'react-icons/fi';

const mockTask = {
    id: 1,
    title: "Modern E-commerce Website Development",
    category: "Web Development",
    description: `Looking for an experienced developer to build a modern, responsive e-commerce website with the following requirements:

**Key Features:**
- User authentication and registration system
- Product catalog with search and filtering
- Shopping cart and checkout process
- Payment integration (Stripe/PayPal)
- Admin panel for product management
- Order tracking system
- Responsive design for all devices

**Technical Requirements:**
- Frontend: React.js with modern UI/UX
- Backend: Node.js with Express
- Database: MongoDB
- Authentication: JWT
- Payment: Stripe integration
- Hosting: AWS or similar cloud platform

**Deliverables:**
- Complete source code
- Documentation
- Deployment guide
- 30 days of post-launch support

**Timeline:**
The project should be completed within 6-8 weeks from the start date.

**Budget:**
$1500-$3000 depending on experience and portfolio quality.

**What I'm Looking For:**
- Proven experience with React and Node.js
- Previous e-commerce development experience
- Strong portfolio with similar projects
- Good communication skills
- Ability to work independently
- Available for regular updates and meetings

Please include in your proposal:
- Your relevant experience
- Timeline estimate
- Portfolio examples
- Any questions about the project`,
    budget: "$1500-$3000",
    deadline: "2024-03-15",
    postedBy: "Sarah Johnson",
    postedDate: "2024-01-20",
    bidsCount: 24,
    skills: ["React", "Node.js", "MongoDB", "Payment Integration", "E-commerce", "AWS"],
    clientInfo: {
        name: "Sarah Johnson",
        memberSince: "2023-05-15",
        totalProjects: 12,
        rating: 4.8,
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
};

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

const TaskDetails = () => {
    const daysLeft = 12;
    const bidCount = mockTask.bidsCount;
    // const hasUserBid = false;

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
                                            {mockTask.category}
                                        </span>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200`}>
                                            {daysLeft > 0 ? `${daysLeft} days left` : 'Expired'}
                                        </span>
                                    </div>
                                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                        {mockTask.title}
                                    </h1>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Posted on {formatDate(mockTask.postedDate)}
                                    </p>
                                </div>
                                <button className="text-gray-400 hover:text-red-500 transition-colors">
                                    <FiHeart size={24} />
                                </button>
                            </div>

                            {/* Task Info */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div className="flex items-center">
                                    <FiDollarSign className="text-green-600 dark:text-green-400 mr-2" />
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Budget</p>
                                        <p className="font-semibold text-gray-900 dark:text-white">{mockTask.budget}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FiCalendar className="text-blue-600 dark:text-blue-400 mr-2" />
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Deadline</p>
                                        <p className="font-semibold text-gray-900 dark:text-white">{formatDate(mockTask.deadline)}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FiUser className="text-purple-600 dark:text-purple-400 mr-2" />
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Bids</p>
                                        <p className="font-semibold text-gray-900 dark:text-white">{bidCount} proposals</p>
                                    </div>
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Required Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {mockTask.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Project Description</h3>
                                <div className="prose dark:prose-invert max-w-none">
                                    <div className="whitespace-pre-line text-gray-700 dark:text-gray-300">
                                        {mockTask.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        {/* Bid Section */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                            <div className="text-center mb-4">
                                <p className="text-gray-600 dark:text-gray-400 mb-2">
                                    You bid for <span className="font-semibold text-blue-600 dark:text-blue-400">{bidCount}</span> opportunities.
                                </p>
                                <button
                                    className="w-full py-3 px-4 rounded-lg font-semibold transition-colors bg-blue-600 hover:bg-blue-700 text-white"
                                >
                                    Place Bid
                                </button>
                            </div>
                        </div>

                        {/* Client Info */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">About the Client</h3>

                            <div className="flex items-center mb-4">
                                <img
                                    src={mockTask.clientInfo.avatar}
                                    alt={mockTask.clientInfo.name}
                                    className="w-12 h-12 rounded-full object-cover mr-3"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">{mockTask.clientInfo.name}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Member since {formatDate(mockTask.clientInfo.memberSince)}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Total Projects:</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">{mockTask.clientInfo.totalProjects}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Rating:</span>
                                    <div className="flex items-center">
                                        <span className="font-semibold text-gray-900 dark:text-white mr-1">{mockTask.clientInfo.rating}</span>
                                        <span className="text-yellow-500">★</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg font-medium transition-colors">
                                View Client Profile
                            </button>
                        </div>

                        {/* Similar Tasks */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Similar Tasks</h3>
                            <div className="space-y-3">
                                <div className="border-b dark:border-gray-700 pb-3">
                                    <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">React Dashboard Development</h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">$800-$1200 • 5 days left</p>
                                </div>
                                <div className="border-b dark:border-gray-700 pb-3">
                                    <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">Node.js API Development</h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">$600-$1000 • 8 days left</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">Full Stack Web App</h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">$2000-$3500 • 12 days left</p>
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