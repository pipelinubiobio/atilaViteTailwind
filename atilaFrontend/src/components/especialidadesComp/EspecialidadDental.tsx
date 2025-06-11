import { useState } from 'react'
import TituloEspecialidad from './TituloEspecialidad'
import BurbujaServicio from './BurbujaServicio'
import BurbujaMadre from './BurbujaMadre'

const categorias = {
  'Odontología general': [
    { nombre: 'Limpieza dental', descripcion: 'Eliminación de placa y sarro mediante profilaxis.' },
    { nombre: 'Restauraciones (tapaduras)', descripcion: 'Reparación de caries con resina estética.' },
    { nombre: 'Aplicación de flúor', descripcion: 'Prevención de caries y fortalecimiento del esmalte.' },
    { nombre: 'Blanqueamientos', descripcion: 'Aclarado dental con agentes blanqueadores.' },
    { nombre: 'Exodoncia simple', descripcion: 'Extracción sin cirugía de piezas dentales.' },
    { nombre: 'Prótesis removibles', descripcion: 'Reemplazo de piezas ausentes con dispositivos móviles.' },
    { nombre: 'Coronas dentales', descripcion: 'Cobertura estética y funcional para dientes dañados.' },
    { nombre: 'Incrustaciones', descripcion: 'Reconstrucciones parciales de dientes posteriores.' },
  ],
  'Endodoncia': [
    { nombre: 'Endodoncia unirradicular', descripcion: 'Tratamiento de conducto en dientes anteriores.' },
    { nombre: 'Endodoncia birradicular', descripcion: 'Tratamiento de conducto en premolares.' },
    { nombre: 'Endodoncia multirradicular', descripcion: 'Tratamiento de conducto en molares.' },
    { nombre: 'Apicectomía', descripcion: 'Cirugía para eliminar infecciones persistentes en la raíz.' },
  ],
  'Rehabilitación oral': [
    { nombre: 'Implantes dentales', descripcion: 'Colocación quirúrgica de raíces artificiales.' },
    { nombre: 'Coronas sobre implantes', descripcion: 'Restauraciones fijas sobre implantes individuales.' },
    { nombre: 'Prótesis sobre implantes', descripcion: 'Estructuras completas soportadas por implantes.' },
  ],
  'Cirugía oral': [
    { nombre: 'Exodoncia compleja', descripcion: 'Extracción quirúrgica con dificultad técnica.' },
    { nombre: 'Terceros molares', descripcion: 'Cirugía para extracción de muelas del juicio.' },
    { nombre: 'Extirpación de mucoceles', descripcion: 'Tratamiento de lesiones benignas en la boca.' },
    { nombre: 'Derivación a patología oral', descripcion: 'Evaluación de lesiones para diagnóstico especializado.' },
  ],
} as const

type CategoriaClave = keyof typeof categorias

function EspecialidadDental() {
  const [activa, setActiva] = useState<CategoriaClave | null>(null)

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <TituloEspecialidad titulo="Odontología" />

      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Imagen */}
        <div className="w-full md:w-2/4 flex justify-center">
          <img
            src="/foto3_54.jpg"
            alt="Odontología"
            className="rounded-xl shadow-lg h-[30rem] object-cover"
          />
        </div>

        {/* Burbujas */}
        <div className="w-full md:w-2/4 flex flex-wrap gap-6 justify-center md:justify-start">
          {!activa &&
            (Object.keys(categorias) as CategoriaClave[]).map((cat) => (
              <BurbujaMadre
                key={cat}
                titulo={cat}
                activa={false}
                onClick={() => setActiva(cat)}
              />
            ))}

          {activa &&
            categorias[activa].map((s, i) => (
              <BurbujaServicio
                key={i}
                nombre={s.nombre}
                descripcion={s.descripcion}
              />
            ))}

          {activa && (
            <button
              className="w-full mt-6 text-sky-600 hover:underline text-center"
              onClick={() => setActiva(null)}
            >
              ← Volver a categorías
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default EspecialidadDental
