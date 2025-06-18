import axios from "axios";

const API_URL = "http://localhost:3000/api/auth"; // cambia esto si usás otro puerto o ruta

export const loginService = async (data: { email: string; password: string }) => {
  try {
    const res = await axios.post(`${API_URL}/login`, data);
    return res.data?.data?.token ? { token: res.data.data.token } : {};
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return {};
  }
};
