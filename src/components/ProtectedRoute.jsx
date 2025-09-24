import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const token = Cookies.get("token"); // or localStorage.getItem("token")
    if (!token) {
      router.push("/login");
      setAuthenticated(false);
    } else {
      setAuthenticated(true);
    }
  }, [router]);

  if (!isClient) return <p>Loading...</p>;
  if (!authenticated) return <p>Redirecting to login...</p>;

  return <>{children}</>;
};

export default ProtectedRoute;
