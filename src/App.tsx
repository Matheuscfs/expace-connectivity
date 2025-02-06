
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import { Routes } from "@/routes";
import { Toaster } from "@/components/ui/toaster";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Routes />
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
