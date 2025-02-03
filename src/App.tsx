import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Index from "@/pages/Index";
import Checkout from "@/pages/Checkout";
import Caixa from "@/pages/Caixa";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-background font-sans antialiased">
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/caixa" element={<Caixa />} />
          </Routes>
          <Toaster />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;