import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  activo: boolean;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Genera los headers para las solicitudes HTTP, incluyendo el token y control de caché.
 */
const obtenerHeaders = () => {
  const token = sessionStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  };
};

/**
 * Obtiene la lista de servicios desde la API.
 */
export const obtenerServicios = async (): Promise<Servicio[]> => {
  const res = await axios.get(`${API_URL}/servicios/`, {
    headers: obtenerHeaders(),
  });
  return res.data.data; // Se accede al array dentro del campo "data"
};

/**
 * Crea un nuevo servicio en la base de datos.
 * @param nuevo Objeto con los datos del nuevo servicio (sin id)
 */
export const crearServicio = async (
  nuevo: Omit<Servicio, "id">
): Promise<Servicio> => {
  const res = await axios.post(`${API_URL}/servicios/`, nuevo, {
    headers: obtenerHeaders(),
  });
  return res.data.data;
};

const limpiarServicio = (servicio: Servicio): Omit<Servicio, "id" | "createdAt" | "updatedAt"> => {
  const { id, createdAt, updatedAt, ...permitidos } = servicio;
  return permitidos;
};

export const editarServicio = async (
  id: number,
  actualizado: Servicio
): Promise<Servicio> => {
  const limpio = limpiarServicio(actualizado);

  const res = await axios.put(`${API_URL}/servicios/${id}/`, limpio, {
    headers: obtenerHeaders(),
  });

  return res.data.data;
};


/**
 * Elimina un servicio de la base de datos.
 * @param id ID del servicio a eliminar
 */
export const eliminarServicio = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/servicios/${id}/`, {
    headers: obtenerHeaders(),
  });
};
