import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../services/auth.service";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje("");
    setIsSubmitting(true);

    const res = await loginService({ email, password });

    if (res.token) {
      login(res.token);
      navigate("/home");
    } else {
      setMensaje("Credenciales inválidas.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-sky-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md space-y-4 w-80">
        <h2 className="text-xl font-bold text-center">Iniciar sesión</h2>
        {mensaje && <p className="text-red-500 text-sm">{mensaje}</p>}
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-sky-600 text-white p-2 rounded ${isSubmitting ? "opacity-50" : "hover:bg-sky-700"}`}
        >
          {isSubmitting ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </div>
  );
}
