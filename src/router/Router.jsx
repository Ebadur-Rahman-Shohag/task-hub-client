import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import AddTask from "../pages/AddTask/AddTask";
import BrowseTasks from "../pages/BrowseTask/BrowseTask";
import MyPostedTasks from "../pages/MyPostedTask/MyPostedTask";

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
                path: "/add-task",
                element: <AddTask />,
            },
            {
                path: "/browse-task",
                element: <BrowseTasks />,
            },
            {
                path: "/my-posted-task",
                element: <MyPostedTasks />,
            },
            {
                path: "/login",
                element: <h1>Login</h1>,
            },
        ],
    },
    {
        path: "/about",
        element: <h1>About</h1>,
    },
]);

export default router;
