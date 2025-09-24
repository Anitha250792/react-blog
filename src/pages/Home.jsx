import Navbar from "../components/Navbar";
import BlogList from "../components/BlogList";
import axios from "axios";

export default function Home({ blogs }) {
  return (
    <div>
      <Navbar />
      <h1>All Blogs</h1>
      <BlogList blogs={blogs} />
    </div>
  );
}

// Server-side rendering
export async function getServerSideProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const blogs = res.data.slice(0, 5);
  return { props: { blogs } };
}
