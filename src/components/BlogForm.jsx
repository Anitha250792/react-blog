import { useState } from "react";

export default function BlogForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ title, body: content });
    setTitle("");
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: 500, margin: "20px auto", display: "flex", flexDirection: "column", gap: 10 }}
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />
      <button type="submit" style={{ padding: 10, background: "#333", color: "#fff", border: "none", borderRadius: 5 }}>
        Submit
      </button>
    </form>
  );
}
