import { useAuth } from "../auth/AuthContext";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-green-100">
        <h1 className="text-3xl font-bold">Bienvenida al sistema interno de la clínica</h1>
      </div>
    </>
  );
}
