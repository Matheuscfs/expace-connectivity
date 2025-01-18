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
import { Toaster } from "@/components/ui/toaster";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/companies" element={<Companies />} />
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
      <Toaster />
    </BrowserRouter>
  );
}

export default App;