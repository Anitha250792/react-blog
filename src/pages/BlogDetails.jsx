import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = useSelector(state => state.blogs.blogs.find(b => b.id === Number(id)));

  if (!blog) return <p>Blog not found</p>;

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
