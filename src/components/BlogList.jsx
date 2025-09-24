import Link from "next/link";

export default function BlogList({ blogs }) {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div key={blog.id} className="blog-card">
          <h3>{blog.title}</h3>
          <p>{blog.body.substring(0,100)}...</p>
          <Link href={`/blog/${blog.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}
