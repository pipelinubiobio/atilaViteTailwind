import { useEffect, useState } from 'react'

interface Props {
  titulo: string
  invertir?: boolean
}

function TituloEspecialidad({ titulo, invertir = false }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="relative w-full mb-12">
      <div
        className={`
          w-full py-6 px-10 text-white text-4xl font-extrabold tracking-wide
          rounded-xl shadow-xl backdrop-blur-md bg-sky-500/70 ring-1 ring-white/20
          transition-all duration-1000 ease-out
          ${invertir ? 'text-right' : 'text-left'}
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
        `}
      >
        {titulo}
      </div>
    </div>
  )
}

export default TituloEspecialidad
