
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
import AdvancedSearch from "@/pages/AdvancedSearch";
import UserDashboard from "@/pages/UserDashboard";
import AccountSettings from "@/pages/AccountSettings";
import Reports from "@/pages/Reports";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Resources from "@/pages/Resources";
import Checkout from "@/pages/Checkout";
import Orders from "@/pages/Orders";
import ProfessionalProfile from "@/pages/ProfessionalProfile";
import ProfessionalRegister from "@/pages/ProfessionalRegister";
import Notifications from "@/pages/Notifications";

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
      <Route path="/professional/register" element={<ProfessionalRegister />} />
      <Route path="/professional/:id" element={<ProfessionalProfile />} />
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
      <Route
        path="/notifications"
        element={
          <AuthMiddleware requireAuth>
            <Notifications />
          </AuthMiddleware>
        }
      />
      <Route
        path="/checkout"
        element={
          <AuthMiddleware requireAuth>
            <Checkout />
          </AuthMiddleware>
        }
      />
      <Route
        path="/orders"
        element={
          <AuthMiddleware requireAuth>
            <Orders />
          </AuthMiddleware>
        }
      />
      <Route path="/advanced-search" element={<AdvancedSearch />} />
      <Route
        path="/dashboard"
        element={
          <AuthMiddleware requireAuth>
            <UserDashboard />
          </AuthMiddleware>
        }
      />
      <Route
        path="/settings"
        element={
          <AuthMiddleware requireAuth>
            <AccountSettings />
          </AuthMiddleware>
        }
      />
      <Route
        path="/reports"
        element={
          <AuthMiddleware requireAuth>
            <Reports />
          </AuthMiddleware>
        }
      />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
}
