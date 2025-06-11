import { useState } from 'react'

interface Props {
  nombre: string
  descripcion: string
}

function BurbujaServicio({ nombre, descripcion }: Props) {
  const [abierta, setAbierta] = useState(false)

  return (
    <button
      onClick={() => setAbierta(!abierta)}
      className={`
        flotar
        transition-all duration-300 rounded-full
        text-white px-6 py-4
        ${abierta ? 'w-64 h-64 text-base p-6 bg-sky-600' : 'w-32 h-32 text-sm bg-sky-400'}
        flex items-center justify-center shadow-lg hover:scale-105
      `}
    >
      <div className="text-center">
        <strong>{nombre}</strong>
        {abierta && <p className="mt-2 text-sm">{descripcion}</p>}
      </div>
    </button>
  )
}

export default BurbujaServicio
