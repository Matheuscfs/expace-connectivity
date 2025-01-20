import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">
          <Routes>
            <Route index element={<Index />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/search-companies" element={<SearchCompanies />} />
            <Route path="/company/:id" element={<CompanyProfile />} />
            <Route path="/company/private/:id" element={<CompanyProfilePrivate />} />
            <Route path="/company/register" element={<CompanyRegister />} />
            <Route path="/company/login" element={<CompanyLogin />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/professionals" element={<Professionals />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;