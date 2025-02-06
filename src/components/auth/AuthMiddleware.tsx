
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface AuthMiddlewareProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  allowedRoles?: string[];
}

export const AuthMiddleware = ({ 
  children, 
  requireAuth = false,
  allowedRoles = [] 
}: AuthMiddlewareProps) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (requireAuth && !user) {
        navigate("/login", { 
          replace: true,
          state: { from: window.location.pathname } 
        });
      }
      
      if (user && allowedRoles.length > 0) {
        const userRole = user.user_metadata?.role || 'user';
        if (!allowedRoles.includes(userRole)) {
          navigate("/unauthorized", { replace: true });
        }
      }
    }
  }, [user, loading, requireAuth, allowedRoles, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return <>{children}</>;
};
