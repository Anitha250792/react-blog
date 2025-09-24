<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading

  useEffect(() => {
    const token = Cookies.get("token"); // safe in browser
    if (!token) {
      router.replace("/login"); // redirect
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (isAuthenticated === null) {
    return <p style={{ textAlign: "center", marginTop: 50 }}>Checking authentication...</p>;
  }

  if (!isAuthenticated) return null; // don't render children if not authenticated

  return <>{children}</>;
};

export default ProtectedRoute;
=======
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading

  useEffect(() => {
    const token = Cookies.get("token"); // safe in browser
    if (!token) {
      router.replace("/login"); // redirect
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (isAuthenticated === null) {
    return <p style={{ textAlign: "center", marginTop: 50 }}>Checking authentication...</p>;
  }

  if (!isAuthenticated) return null; // don't render children if not authenticated

  return <>{children}</>;
};

export default ProtectedRoute;
>>>>>>> c856c14a9c831c04ecd30648c86fea9edd501598
