<<<<<<< HEAD
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
    <nav style={{ display: "flex", gap: 20, padding: 15, background: "#333", color: "white" }}>
      <Link href="/">Home</Link>
      <Link href="/create">Create Blog</Link>
      <button onClick={logout} style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}>
        Logout
      </button>
    </nav>
  );
}
=======
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
    <nav style={{ display: "flex", gap: 20, padding: 15, background: "#333", color: "white" }}>
      <Link href="/">Home</Link>
      <Link href="/create">Create Blog</Link>
      <button onClick={logout} style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}>
        Logout
      </button>
    </nav>
  );
}
>>>>>>> c856c14a9c831c04ecd30648c86fea9edd501598
