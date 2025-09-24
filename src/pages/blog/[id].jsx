import Navbar from "../../components/Navbar";
import ProtectedRoute from "../../components/ProtectedRoute";
import axios from "axios";

export default function Blog({ blog }) {
  if (!blog) return <p>Blog not found</p>;

  return (
    <ProtectedRoute>
      <Navbar />
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
    </ProtectedRoute>
  );
}

export async function getStaticPaths() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const blogs = res.data.slice(0, 5); // example limit
  const paths = blogs.map(blog => ({ params: { id: blog.id.toString() } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  return { props: { blog: res.data } };
}
