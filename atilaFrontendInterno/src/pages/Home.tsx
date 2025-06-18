import { useAuth } from "../auth/AuthContext";

export default function Home() {
  const { logout } = useAuth();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-green-100">
      <h1 className="text-3xl font-bold mb-4">Bienvenido al sistema interno</h1>
      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Cerrar sesión
      </button>
    </div>
  );
}
