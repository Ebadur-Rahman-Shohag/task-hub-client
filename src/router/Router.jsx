import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import AddTask from "../pages/AddTask/AddTask";
import BrowseTasks from "../pages/BrowseTask/BrowseTask";
import MyPostedTasks from "../pages/MyPostedTask/MyPostedTask";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import TaskDetails from "../pages/TaskDetails/TaskDetails";
import NotFound from "../pages/NotFound/NotFound";

const baseUrl = import.meta.env.VITE_BASE_URL || "/";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/task-details/:id",
                element: <TaskDetails />,
                loader: async ({ params }) => {
                    const response = await fetch(`${baseUrl}/api/v1/tasks/${params.id}`);
                    if (!response.ok) {
                        throw new Error("Failed to fetch task details");
                    }
                    return response.json();
                },
            },
            {
                path: "/add-task",
                element: <AddTask />,
            },
            {
                path: "/browse-task",
                element: <BrowseTasks />,
                loader: async () => {
                    const response = await fetch(`${baseUrl}/api/v1/tasks`);
                    if (!response.ok) {
                        throw new Error("Failed to fetch tasks");
                    }
                    return response.json();
                },
            },
            {
                path: "/my-posted-task",
                element: <MyPostedTasks />,
                loader: async () => {
                    const response = await fetch(`${baseUrl}/api/v1/tasks/my-tasks`);
                    if (!response.ok) {
                        throw new Error("Failed to fetch tasks");
                    }
                    return response.json();
                },
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
    {
        path: "/about",
        element: <h1>About</h1>,
    },
]);

export default router;
