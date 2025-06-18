import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import PrivateRoute from "../auth/PrivateRoute";
import { AuthProvider } from "../auth/AuthContext";

import Servicios from "../pages/Servicios";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="*" element={<Login />} />
          <Route path="/servicios" element={<PrivateRoute><Servicios /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
