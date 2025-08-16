import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";

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
                path: "/login",
                element: <h1>Login</h1>,
            },
        ],
    },
    {
        path: "/about",
        element: <h1>About</h1>
    },
]);

export default router;
