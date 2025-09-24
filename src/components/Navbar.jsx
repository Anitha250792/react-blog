import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const logout = () => {
    Cookies.remove("token");
    router.push("/login");
  };

  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/create">Create Blog</Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}
