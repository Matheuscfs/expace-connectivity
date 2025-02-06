
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthMiddleware } from "@/components/auth/AuthMiddleware";
import Index from "@/pages/Index";
import Companies from "@/pages/Companies";
import CompanyProfile from "@/pages/CompanyProfile";
import CompanyProfilePrivate from "@/pages/CompanyProfilePrivate";
import CompanyRegister from "@/pages/CompanyRegister";
import CompanyLogin from "@/pages/CompanyLogin";
import Plans from "@/pages/Plans";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Profile from "@/pages/Profile";
import Professionals from "@/pages/Professionals";
import SearchCompanies from "@/pages/SearchCompanies";
import ExpacePartners from "@/pages/ExpacePartners";
import ServiceDetails from "@/pages/ServiceDetails";
import ProductListing from "@/pages/ProductListing";
import AdminDashboard from "@/pages/AdminDashboard";
import NotFound from "@/pages/NotFound";
import Unauthorized from "@/pages/Unauthorized";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/companies",
    element: <Companies />,
  },
  {
    path: "/search-companies",
    element: <SearchCompanies />,
  },
  {
    path: "/company/:id",
    element: <CompanyProfile />,
  },
  {
    path: "/company/private/:id",
    element: (
      <AuthMiddleware requireAuth>
        <CompanyProfilePrivate />
      </AuthMiddleware>
    ),
  },
  {
    path: "/company/register",
    element: <CompanyRegister />,
  },
  {
    path: "/company/login",
    element: <CompanyLogin />,
  },
  {
    path: "/plans",
    element: <Plans />,
  },
  {
    path: "/profile",
    element: (
      <AuthMiddleware requireAuth>
        <Profile />
      </AuthMiddleware>
    ),
  },
  {
    path: "/professionals",
    element: <Professionals />,
  },
  {
    path: "/expace-partners",
    element: <ExpacePartners />,
  },
  {
    path: "/service-details",
    element: <ServiceDetails />,
  },
  {
    path: "/products",
    element: <ProductListing />,
  },
  {
    path: "/admin/dashboard",
    element: (
      <AuthMiddleware requireAuth allowedRoles={["admin"]}>
        <AdminDashboard />
      </AuthMiddleware>
    ),
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export function Routes() {
  return <RouterProvider router={routes} />;
}
