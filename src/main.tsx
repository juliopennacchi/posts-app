import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import PostsPage from "./pages/user/posts/PostsPage";
import ConfigPage from "./pages/admin/ConfigPage";
import UserHomePage from "./pages/user/home-page/HomePage";
import Login from "./pages/login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
  },
  {
    path: "/admin/config",
    element: <ConfigPage />,
  },
  {
    path: "/user",
    element: <UserHomePage />,
  },
  {
    path: "/posts",
    element: <PostsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
