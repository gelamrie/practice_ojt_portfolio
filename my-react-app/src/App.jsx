import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Portfolio from "./pages/Portfolio";
import Dashboard from "./pages/Dashboard";
import EditAbout from "./pages/EditAbout";

import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <Routes>

      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<Login />} />

      <Route path="/portfolio" element={<Portfolio />} />

      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

      <Route path="/dashboard/about" element={<ProtectedRoute><EditAbout /></ProtectedRoute>} />

    </Routes>
  );
}

export default App;