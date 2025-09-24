
import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = e => {
    e.preventDefault();
    Cookies.set("token", "dummy_token"); // simple auth
    router.push("/");
  };

  return (
    <form onSubmit={handleRegister} style={{ maxWidth: 400, margin: "50px auto", display: "flex", flexDirection: "column", gap: 10 }}>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit" style={{ padding: 10, background: "#333", color: "#fff", border: "none", borderRadius: 5 }}>Register</button>
    </form>
  );
}

