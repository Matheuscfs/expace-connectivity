import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Companies from "./pages/Companies";
import CompanyProfile from "./pages/CompanyProfile";
import Professionals from "./pages/Professionals";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CompanyRegister from "./pages/CompanyRegister";
import CompanyLogin from "./pages/CompanyLogin";
import Plans from "./pages/Plans";
import { Toaster } from "./components/ui/toaster";
import ChatButton from "./components/ChatButton";

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
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/company-register" element={<CompanyRegister />} />
            <Route path="/company-login" element={<CompanyLogin />} />
            <Route path="/plans" element={<Plans />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <ChatButton />
      <Toaster />
    </Router>
  );
}

export default App;