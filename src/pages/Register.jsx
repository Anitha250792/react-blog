import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import Login from "./pages/Login";
import BlogForm from "./components/BlogForm";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/blog/:id" element={<ProtectedRoute><BlogDetails /></ProtectedRoute>} />
      <Route path="/create" element={<ProtectedRoute><BlogForm onSubmit={() => {}} /></ProtectedRoute>} />
    </Routes>
  </Router>
);

export default App;
