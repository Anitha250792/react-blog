import Navbar from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRoute";
import BlogForm from "../components/BlogForm";
import axios from "axios";
import { useRouter } from "next/router";

export default function Create() {
  const router = useRouter();

  const handleSubmit = async data => {
    await axios.post("https://jsonplaceholder.typicode.com/posts", data);
    router.push("/");
  };

  return (
    <ProtectedRoute>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Create Blog</h1>
      <BlogForm onSubmit={handleSubmit} />
    </ProtectedRoute>
  );
}
