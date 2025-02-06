
import { Routes as RouterRoutes, Route } from "react-router-dom";
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

export function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/search-companies" element={<SearchCompanies />} />
      <Route path="/company/:id" element={<CompanyProfile />} />
      <Route
        path="/company/private/:id"
        element={
          <AuthMiddleware requireAuth>
            <CompanyProfilePrivate />
          </AuthMiddleware>
        }
      />
      <Route path="/company/register" element={<CompanyRegister />} />
      <Route path="/company/login" element={<CompanyLogin />} />
      <Route path="/plans" element={<Plans />} />
      <Route
        path="/profile"
        element={
          <AuthMiddleware requireAuth>
            <Profile />
          </AuthMiddleware>
        }
      />
      <Route path="/professionals" element={<Professionals />} />
      <Route path="/expace-partners" element={<ExpacePartners />} />
      <Route path="/service-details" element={<ServiceDetails />} />
      <Route path="/products" element={<ProductListing />} />
      <Route
        path="/admin/dashboard"
        element={
          <AuthMiddleware requireAuth allowedRoles={["admin"]}>
            <AdminDashboard />
          </AuthMiddleware>
        }
      />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
}
