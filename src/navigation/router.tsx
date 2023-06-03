import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../pages/Home";
/* Insert new import here - Please do not remove this line */

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route
            path="/"
            element={<Home />}
        />,
        /* Add new pages here - Please do not remove this line */
    ])
);

export default router;