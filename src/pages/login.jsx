
import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = e => {
    e.preventDefault();
    Cookies.set("token", "dummy_token");
    router.push("/");
  };

  return (
    <form
      onSubmit={handleLogin}
      style={{ maxWidth: 400, margin: "50px auto", display: "flex", flexDirection: "column", gap: 10 }}
    >
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit" style={{ padding: 10, background: "#333", color: "#fff", border: "none", borderRadius: 5 }}>
        Login
      </button>
    </form>
  );
}

