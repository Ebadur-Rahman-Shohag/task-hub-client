import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import AddTask from "../pages/AddTask/AddTask";
import BrowseTasks from "../pages/BrowseTask/BrowseTask";
import MyPostedTasks from "../pages/MyPostedTask/MyPostedTask";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
    {
        path: "/about",
        element: <h1>About</h1>,
    },
]);

export default router;
