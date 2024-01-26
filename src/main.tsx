import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import PostsPage from "./pages/user/PostsPage";
import ConfigPage from "./pages/admin/ConfigPage";
import UserHomePage from "./pages/user/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
