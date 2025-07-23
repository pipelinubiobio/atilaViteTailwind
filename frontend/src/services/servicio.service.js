import axios from './root.service.js';

// Obtener todos los servicios
export async function getAllServicios() {
  try {
    const { data } = await axios.get('/servicio/getServicios/');
    return data;
  } catch (error) {
    console.error('Error al obtener los servicios:', error);
    return error.response?.data || { status: 'error', message: error.message };
  }
}

// Obtener servicio por ID
export async function getServicioById(id) {
  try {
    const { data } = await axios.get(`/servicio/getServicioById/${id}/`);
    return data;
  } catch (error) {
    console.error('Error al obtener el servicio:', error);
    return error.response?.data || { status: 'error', message: error.message };
  }
}

// Crear un nuevo servicio
export async function createServicio(servicioData) {
  try {
    const { data } = await axios.post('/servicio/crearServicio/', servicioData);
    return data;
  } catch (error) {
    console.error('Error al crear el servicio:', error.message);
    return error.response?.data || { status: 'error', message: error.message };
  }
}

// Actualizar un servicio existente
export async function updateServicio(id, servicioData) {
  try {
    const { data } = await axios.put(`/servicio/updateServicio/${id}/`, servicioData);
    return data;
  } catch (error) {
    console.error('Error al actualizar el servicio:', error);
    return error.response?.data || { status: 'error', message: error.message };
  }
}

// Eliminar un servicio
export async function deleteServicio(id) {
  try {
    const { data } = await axios.delete(`/servicio/deleteServicio/${id}/`);
    return data;
  } catch (error) {
    console.error('Error al eliminar el servicio:', error);
    return error.response?.data || { status: 'error', message: error.message };
  }
}
