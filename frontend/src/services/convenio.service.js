import axios from './root.service.js';

export async function getAllConvenios() {
  try {
    const { data } = await axios.get('/convenio/getConvenios/');
    return data;
  } catch (error) {
    console.error('Error al obtener los convenios:', error);
    return error.response?.data;
  }
}

export async function createConvenio(convenioData) {
  try {
    const { data } = await axios.post('/convenio/crearConvenio/', convenioData);
    return data;
  } catch (error) {
    console.error('Error al crear el convenio:', error);
    return error.response?.data;
  }
}

export async function deleteConvenio(id) {
  try {
    const { data } = await axios.delete(`/convenio/deleteConvenio/${id}/`);
    return data;
  } catch (error) {
    console.error('Error al eliminar el convenio:', error);
    return error.response?.data;
  }
}
