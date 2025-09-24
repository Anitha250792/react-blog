import React, { useState } from "react";

const BlogForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "500px", margin: "20px auto" }}>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", minHeight: "100px" }}
      />
      <button type="submit" style={{ padding: "10px", border: "none", borderRadius: "5px", backgroundColor: "#333", color: "#fff", cursor: "pointer" }}>Submit</button>
    </form>
  );
};

export default BlogForm;
