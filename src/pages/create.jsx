import React from "react";
import Navbar from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRoute";
import BlogForm from "../components/BlogForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      // Here we use a placeholder API, replace with your backend later
      await axios.post("https://jsonplaceholder.typicode.com/posts", data);
      navigate("/"); // redirect to home after successful submission
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <ProtectedRoute>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Create Blog</h1>
      <BlogForm onSubmit={handleSubmit} />
    </ProtectedRoute>
  );
};

export default Create;
