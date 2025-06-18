import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex space-x-4">
        <Link to="/home" className="text-sky-700 font-semibold hover:underline">
          Inicio
        </Link>
        <Link to="/servicios" className="text-sky-700 font-semibold hover:underline">
          Servicios
        </Link>
      </div>
      <button
        onClick={logout}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Cerrar sesión
      </button>
    </nav>
  );
}
