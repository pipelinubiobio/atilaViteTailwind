import React, { useState, useEffect } from 'react';
import { createServicio, getAllServicios, deleteServicio } from '../services/servicio.service.js';
import '@styles/servicio.css';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="service-modal-overlay" onClick={onClose}>
      <div className="service-modal-content" onClick={e => e.stopPropagation()}>
        <button className="service-modal-close-btn" onClick={onClose} aria-label="Cerrar modal">&times;</button>
        <h2 className="service-modal-title">{title}</h2>
        {children}
      </div>
    </div>
  );
};

const Servicio = () => {
  const [servicioData, setServicioData] = useState({
    nombre: '',
    descripcion: '',
    procedimiento: '',
    precio_aproximado: '',
    activo: true,
  });

  const [servicios, setServicios] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const fetchServicios = async () => {
    try {
      const response = await getAllServicios();
      if (response.status === 'Success') {
        setServicios(response.data);
      } else {
        alert(response.message || 'Error al cargar servicios');
      }
    } catch (error) {
      alert('Error al cargar servicios');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchServicios();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este servicio?')) return;
    try {
      const response = await deleteServicio(id);
      if (response.status === 'Success') {
        alert('Servicio eliminado con éxito');
        fetchServicios();
      } else {
        alert(response.message || 'Error al eliminar servicio');
      }
    } catch (error) {
      alert('Error al eliminar servicio');
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createServicio({
        ...servicioData,
        precio_aproximado: Number(servicioData.precio_aproximado),
      });
      alert(response.message || 'Respuesta del servidor');
      if (response.status === 'Success') {
        setServicioData({
          nombre: '',
          descripcion: '',
          procedimiento: '',
          precio_aproximado: '',
          activo: true,
        });
        setModalOpen(false);
        fetchServicios();
      }
    } catch (error) {
      alert('Error al crear servicio');
      console.error(error);
    }
  };

  return (
    <div className="service-container">
      <div className="service-header">
        <h1 className="service-title">Servicios Registrados</h1>
        <button className="service-add-button" onClick={() => setModalOpen(true)}>
          + Agregar Servicio
        </button>
      </div>

      {servicios.length === 0 ? (
        <p className="service-no-data">No hay servicios registrados.</p>
      ) : (
        <div className="service-card-list">
          {servicios.map(s => (
            <div key={s.id_servicio} className="service-card">
              <h3 className="service-card-name">{s.nombre}</h3>
              <p><strong>Descripción:</strong> {s.descripcion}</p>
              <p><strong>Procedimiento:</strong> {s.procedimiento}</p>
              <p><strong>Precio Aproximado:</strong> ${s.precio_aproximado}</p>
              <p><strong>Activo:</strong> {s.activo ? 'Sí' : 'No'}</p>
              <button className="service-delete-button" onClick={() => handleDelete(s.id_servicio)}>Eliminar</button>
            </div>
          ))}
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Agregar Servicio">
        <form className="service-modal-form" onSubmit={handleSubmit}>
          <label className="service-modal-label" htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            type="text"
            required
            className="service-modal-input"
            value={servicioData.nombre}
            onChange={(e) => setServicioData({ ...servicioData, nombre: e.target.value })}
          />

          <label className="service-modal-label" htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            required
            className="service-modal-textarea"
            value={servicioData.descripcion}
            onChange={(e) => setServicioData({ ...servicioData, descripcion: e.target.value })}
          />

          <label className="service-modal-label" htmlFor="procedimiento">Procedimiento:</label>
          <textarea
            id="procedimiento"
            required
            className="service-modal-textarea"
            value={servicioData.procedimiento}
            onChange={(e) => setServicioData({ ...servicioData, procedimiento: e.target.value })}
          />

          <label className="service-modal-label" htmlFor="precio">Precio Aproximado:</label>
          <input
            id="precio"
            type="number"
            min="0"
            required
            className="service-modal-input"
            value={servicioData.precio_aproximado}
            onChange={(e) => setServicioData({ ...servicioData, precio_aproximado: e.target.value })}
          />

          <label className="service-modal-checkbox-label" htmlFor="activo">
            <input
              id="activo"
              type="checkbox"
              checked={servicioData.activo}
              onChange={(e) => setServicioData({ ...servicioData, activo: e.target.checked })}
              className="service-modal-checkbox"
            />
            Activo
          </label>

          <button type="submit" className="service-modal-submit-btn">Agregar Servicio</button>
        </form>
      </Modal>
    </div>
  );
};

export default Servicio;
