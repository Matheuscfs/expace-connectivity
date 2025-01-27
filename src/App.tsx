import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import ServiceDetails from "@/pages/ServiceDetails";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Professionals from "@/pages/Professionals";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/service-details" element={<ServiceDetails />} />
              <Route path="/professionals" element={<Professionals />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster />
      </ThemeProvider>
    </Router>
  );
}

export default App;