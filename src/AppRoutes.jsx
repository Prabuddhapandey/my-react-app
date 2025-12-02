import React from "react";
import { Routes, Route } from 'react-router-dom';
import MainLayout from "./components/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import PostsTable from "./pages/PostsTable.jsx";
import PostCreate from "./pages/PostCreate.jsx";
import PostEdit from "./pages/PostEdit.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="posts" element={<PostsTable />} />
                <Route path="posts/create" element={<PostCreate />} />
                <Route path="posts/edit/:id" element={<PostEdit />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;