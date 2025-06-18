import { useEffect, useState } from "react";

interface Servicio {
  id?: number;
  nombre: string;
  descripcion: string;
  precio: number;
  activo: boolean;
}

interface Props {
  visible: boolean;
  onClose: () => void;
  onSubmit: (servicio: Servicio) => void;
  inicial?: Servicio | null;
}

export default function ServicioFormModal({ visible, onClose, onSubmit, inicial }: Props) {
  const [form, setForm] = useState<Servicio>({
    nombre: "",
    descripcion: "",
    precio: 0,
    activo: true,
  });

  useEffect(() => {
    if (inicial) {
      setForm(inicial);
    } else {
      setForm({ nombre: "", descripcion: "", precio: 0, activo: true });
    }
  }, [inicial]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 relative">
        <h2 className="text-xl font-bold mb-4 text-sky-700">
          {inicial ? "Editar Servicio" : "Nuevo Servicio"}
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(form);
            onClose();
          }}
          className="space-y-3"
        >
          <input
            type="text"
            placeholder="Nombre"
            className="w-full border rounded p-2"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            required
          />
          <textarea
            placeholder="Descripción"
            className="w-full border rounded p-2"
            value={form.descripcion}
            onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Precio"
            className="w-full border rounded p-2"
            value={form.precio}
            onChange={(e) => setForm({ ...form, precio: Number(e.target.value) })}
            required
          />
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={form.activo}
              onChange={(e) => setForm({ ...form, activo: e.target.checked })}
            />
            Servicio activo
          </label>

          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="text-gray-500">
              Cancelar
            </button>
            <button type="submit" className="bg-sky-600 text-white px-4 py-1 rounded">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
