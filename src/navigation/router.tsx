import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
/* Add new pages import here - Please do not remove this line */

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route
      path="/"
      element={<Home />}
    />,
    <Route path="*" element={<NotFound />} />,
    /* Add new pages here - Please do not remove this line */
  ])
);

export default router;