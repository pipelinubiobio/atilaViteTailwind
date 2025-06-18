import axios from "axios";

const API_URL = "http://localhost:3000/api/servicios"; // tu endpoint base

const getHeaders = () => {
  const token = sessionStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

export const obtenerServicios = async () => {
  const res = await axios.get(API_URL, {
    headers: getHeaders(),
  });
  return res.data.data;
};

export const crearServicio = async (servicio: any) => {
  const res = await axios.post(API_URL, servicio, {
    headers: getHeaders(),
  });
  return res.data.data;
};

export const editarServicio = async (id: number, servicio: any) => {
  const res = await axios.put(`${API_URL}/${id}`, servicio, {
    headers: getHeaders(),
  });
  return res.data.data;
};

export const eliminarServicio = async (id: number) => {
  const res = await axios.delete(`${API_URL}/${id}`, {
    headers: getHeaders(),
  });
  return res.data;
};
