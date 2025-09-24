
import Navbar from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRoute";
import BlogList from "../components/BlogList";
import axios from "axios";

export default function Home({ blogs }) {
  return (
    <ProtectedRoute>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>All Blogs</h1>
      <BlogList blogs={blogs} />
    </ProtectedRoute>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const blogs = res.data.slice(0, 5);
  return { props: { blogs } };
}
import Navbar from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRoute";
import BlogList from "../components/BlogList";
import axios from "axios";

export default function Home({ blogs }) {
  return (
    <ProtectedRoute>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>All Blogs</h1>
      <BlogList blogs={blogs} />
    </ProtectedRoute>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const blogs = res.data.slice(0, 5);
  return { props: { blogs } };
}

