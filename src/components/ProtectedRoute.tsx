import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "@/utils/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isAuthenticatedState, setIsAuthenticatedState] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    if (isAuthenticated()) {
      setIsAuthenticatedState(true);
    } else {
      setIsAuthenticatedState(false);
      navigate("/admin/login");
    }
  }, [navigate]);

  if (isAuthenticatedState === null) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return isAuthenticatedState ? <>{children}</> : null;
};

export default ProtectedRoute;