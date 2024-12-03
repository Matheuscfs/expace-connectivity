import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Companies from "./pages/Companies";
import CompanyProfile from "./pages/CompanyProfile";
import Professionals from "./pages/Professionals";
import ProfessionalsByRegion from "./pages/ProfessionalsByRegion";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CompanyRegister from "./pages/CompanyRegister";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/company/:id" element={<CompanyProfile />} />
            <Route path="/professionals" element={<Professionals />} />
            <Route path="/professionals/:region" element={<ProfessionalsByRegion />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/company-register" element={<CompanyRegister />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
    </Router>
  );
}

export default App;