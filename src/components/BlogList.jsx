
import Link from "next/link";

export default function BlogList({ blogs }) {
  return (
    <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 15 }}>
      {blogs.map(blog => (
        <div
          key={blog.id}
          style={{ padding: 15, borderRadius: 5, background: "#fff", boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}
        >
          <h3>{blog.title}</h3>
          <p>{blog.body.substring(0, 100)}...</p>
          <Link href={`/blog/${blog.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

import Link from "next/link";

export default function BlogList({ blogs }) {
  return (
    <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 15 }}>
      {blogs.map(blog => (
        <div
          key={blog.id}
          style={{ padding: 15, borderRadius: 5, background: "#fff", boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}
        >
          <h3>{blog.title}</h3>
          <p>{blog.body.substring(0, 100)}...</p>
          <Link href={`/blog/${blog.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

