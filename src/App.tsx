import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Companies from "./pages/Companies";
import CompanyProfile from "./pages/CompanyProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Professionals from "./pages/Professionals";
import ProfessionalsByRegion from "./pages/ProfessionalsByRegion";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:id" element={<CompanyProfile />} />
          <Route path="/professionals" element={<Professionals />} />
          <Route path="/professionals/:region" element={<ProfessionalsByRegion />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;