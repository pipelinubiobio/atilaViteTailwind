import React, { useState, useEffect } from 'react';
import { createConvenio, getAllConvenios, deleteConvenio } from '../services/convenio.service.js';
import '@styles/convenio.css';

const Convenio = () => {
  const [convenioData, setConvenioData] = useState({
    nombre: '',
    descuento_porcentual: '',
    activo: true,
  });

  const [convenios, setConvenios] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const fetchConvenios = async () => {
    try {
      const response = await getAllConvenios();
      if (response.status === 'Success') {
        setConvenios(response.data);
      } else {
        alert(response.message || 'Error al cargar convenios');
      }
    } catch (error) {
      alert('Error al cargar convenios');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchConvenios();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('¿Seguro que quieres eliminar este convenio?')) return;
    try {
      const response = await deleteConvenio(id);
      if (response.status === 'Success') {
        alert('Convenio eliminado con éxito');
        fetchConvenios();
      } else {
        alert(response.message || 'Error al eliminar convenio');
      }
    } catch (error) {
      alert('Error al eliminar convenio');
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createConvenio({
        ...convenioData,
        descuento_porcentual: Number(convenioData.descuento_porcentual),
      });
      alert(response.message || 'Respuesta del servidor');
      if (response.status === 'Success') {
        setConvenioData({ nombre: '', descuento_porcentual: '', activo: true });
        setModalOpen(false);
        fetchConvenios();
      }
    } catch (error) {
      alert('Error al crear convenio');
      console.error(error);
    }
  };

  return (
    <div className="convenio-container">
      <div className="convenio-header">
        <h1 className="convenio-title">Convenios</h1>
        <button className="convenio-add-button" onClick={() => setModalOpen(true)}>Agregar Convenio</button>
      </div>

      {isModalOpen && (
        <div className="convenio-modal-overlay">
          <div className="convenio-modal-content">
            <button className="convenio-modal-close-btn" onClick={() => setModalOpen(false)}>&times;</button>
            <h2 className="convenio-modal-title">Crear Convenio</h2>
            <form onSubmit={handleSubmit} className="convenio-modal-form">
              <label className="convenio-modal-label" htmlFor="nombre">Nombre:</label>
              <input
                id="nombre"
                type="text"
                required
                className="convenio-modal-input"
                value={convenioData.nombre}
                onChange={(e) => setConvenioData({ ...convenioData, nombre: e.target.value })}
              />

              <label className="convenio-modal-label" htmlFor="descuento">Descuento Porcentual:</label>
              <input
                id="descuento"
                type="number"
                min="1"
                max="100"
                required
                className="convenio-modal-input"
                value={convenioData.descuento_porcentual}
                onChange={(e) => setConvenioData({ ...convenioData, descuento_porcentual: e.target.value })}
              />

              <label className="convenio-modal-checkbox-label" htmlFor="activo">
                <input
                  id="activo"
                  type="checkbox"
                  checked={convenioData.activo}
                  onChange={(e) => setConvenioData({ ...convenioData, activo: e.target.checked })}
                  className="convenio-modal-checkbox"
                />
                Activo
              </label>

              <button type="submit" className="convenio-modal-submit-btn">Crear</button>
            </form>
          </div>
        </div>
      )}

      <div className="convenio-card-list">
        {convenios.length === 0 ? (
          <p className="convenio-no-data">No hay convenios registrados.</p>
        ) : (
          convenios.map((c) => (
            <div key={c.id_convenio} className="convenio-card">
              <h3 className="convenio-card-name">{c.nombre}</h3>
              <p>Descuento: {c.descuento_porcentual}%</p>
              <p>Activo: {c.activo ? 'Sí' : 'No'}</p>
              <button className="convenio-delete-button" onClick={() => handleDelete(c.id_convenio)}>Eliminar</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Convenio;
