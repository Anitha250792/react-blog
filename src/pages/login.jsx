import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Login() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = e => {
    e.preventDefault();
    Cookies.set("token", "dummy_token"); // simple auth
    router.push("/");
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
}
