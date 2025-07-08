import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const loginService = async (credenciales: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credenciales);
    return response.data;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return {};
  }
};
