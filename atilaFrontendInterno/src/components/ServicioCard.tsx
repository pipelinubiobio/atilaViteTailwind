import { PencilIcon, TrashIcon } from "lucide-react";

interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  activo: boolean;
}

interface Props {
  servicio: Servicio;
  onEditar: (servicio: Servicio) => void;
  onEliminar: (id: number) => void;
}

export default function ServicioCard({ servicio, onEditar, onEliminar }: Props) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full sm:w-64 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-sky-700">{servicio.nombre}</h2>
      <p className="text-gray-600 text-sm mt-1">{servicio.descripcion}</p>
      <p className="text-green-600 font-bold mt-2">${servicio.precio}</p>
      <p className={`text-sm mt-2 ${servicio.activo ? "text-green-500" : "text-red-500"}`}>
        {servicio.activo ? "Activo" : "Inactivo"}
      </p>

      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={() => onEditar(servicio)}
          className="text-blue-600 hover:text-blue-800"
        >
          <PencilIcon size={20} />
        </button>
        <button
          onClick={() => onEliminar(servicio.id)}
          className="text-red-600 hover:text-red-800"
        >
          <TrashIcon size={20} />
        </button>
      </div>
    </div>
  );
}
