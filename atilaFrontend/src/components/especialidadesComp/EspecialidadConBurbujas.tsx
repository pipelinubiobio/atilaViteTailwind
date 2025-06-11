// components/EspecialidadConBurbujas.tsx
import TituloEspecialidad from './TituloEspecialidad'
import BurbujaServicio from './BurbujaServicio'

interface Props {
  titulo: string
  imagen: string
  servicios: {
    nombre: string
    descripcion: string
  }[]
  invertir?: boolean
}

function EspecialidadConBurbujas({ titulo, imagen, servicios, invertir = false }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <TituloEspecialidad titulo={titulo} invertir={invertir} />

      <div className={`flex flex-col md:flex-row gap-10 items-center ${invertir ? 'md:flex-row-reverse' : ''}`}>
        {/* Imagen */}
        <div className="w-full md:w-2/4 flex justify-center">
          <img
            src={imagen}
            alt={titulo}
            className="rounded-xl shadow-lg h-[30rem] object-cover"
          />
        </div>

        {/* Burbujas */}
        <div className="w-full md:w-2/4 flex flex-wrap gap-6 justify-center md:justify-start">
          {servicios.map((s, i) => (
            <BurbujaServicio
              key={i}
              nombre={s.nombre}
              descripcion={s.descripcion}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EspecialidadConBurbujas
