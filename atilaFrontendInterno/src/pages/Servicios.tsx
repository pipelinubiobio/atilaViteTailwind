import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ServicioCard from "../components/ServicioCard";
import ServicioFormModal from "../components/ServicioFormModal";
import {
  obtenerServicios,
  crearServicio,
  editarServicio,
  eliminarServicio,
} from "../services/servicio.service";

interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  activo: boolean;
}

export default function Servicios() {
  const [servicios, setServicios] = useState<Servicio[] | null>(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [servicioActual, setServicioActual] = useState<Servicio | null>(null);

  const cargarServicios = async () => {
    try {
      const datos = await obtenerServicios();
      setServicios(datos);
    } catch (error) {
      console.error("Error al cargar servicios:", error);
    }
  };

  const manejarCrear = async (nuevo: Omit<Servicio, "id">) => {
    try {
      const creado = await crearServicio(nuevo);
      setServicios((prev) => prev ? [...prev, creado] : [creado]);
    } catch (error) {
      console.error("Error al crear servicio:", error);
    }
  };

const manejarEditar = async (editado: Servicio) => {
  try {
    const actualizado = await editarServicio(editado.id, editado);
    setServicios((prev) =>
      prev ? prev.map((s) => (s.id === editado.id ? actualizado : s)) : [actualizado]
    );
  } catch (error) {
    console.error("Error al editar servicio:", error);
  }
};


  const manejarEliminar = async (id: number) => {
    try {
      await eliminarServicio(id);
      setServicios((prev) => prev?.filter((s) => s.id !== id) || null);
    } catch (error) {
      console.error("Error al eliminar servicio:", error);
    }
  };

  const abrirParaEditar = (servicio: Servicio) => {
    setServicioActual(servicio);
    setModalAbierto(true);
  };

  const abrirParaCrear = () => {
    setServicioActual(null);
    setModalAbierto(true);
  };

  useEffect(() => {
    cargarServicios();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-sky-700">Gestión de Servicios</h1>
          <button
            onClick={abrirParaCrear}
            className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700"
          >
            + Agregar Servicio
          </button>
        </div>

        <div className="flex flex-wrap gap-4">
          {servicios?.map((servicio) => (
            <ServicioCard
              key={servicio.id}
              servicio={servicio}
              onEditar={abrirParaEditar}
              onEliminar={manejarEliminar}
            />
          ))}
        </div>
      </div>

      <ServicioFormModal
        visible={modalAbierto}
        onClose={() => setModalAbierto(false)}
        onSubmit={(data) =>
          servicioActual
            ? manejarEditar({ ...servicioActual, ...data })
            : manejarCrear(data)
        }
        inicial={servicioActual}
      />
    </>
  );
}
