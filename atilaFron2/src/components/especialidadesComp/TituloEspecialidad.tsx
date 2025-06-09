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
          w-full py-6 px-10 text-white text-4xl font-extrabold tracking-wide rounded-md
          bg-gradient-to-r from-sky-700 via-sky-500 to-sky-400 shadow-lg
          transition-opacity duration-1000 ease-out
          ${invertir ? 'text-right bg-gradient-to-l' : 'text-left'}
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
        `}
        style={{
          transform: 'translateY(0)',
        }}
      >
        {titulo}
      </div>
    </div>
  )
}

export default TituloEspecialidad
