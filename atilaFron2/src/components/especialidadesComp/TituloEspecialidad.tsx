interface Props {
  titulo: string
  invertir?: boolean
}

function TituloEspecialidad({ titulo, invertir = false }: Props) {
  return (
    <div className={`relative w-full mb-10 ${invertir ? 'text-right' : 'text-left'}`}>
      <div
        className={`
          relative inline-block bg-sky-600 text-white py-3 px-8 text-2xl font-bold shadow-md
          ${invertir ? 'rounded-r-none' : 'rounded-l-none'}
        `}
        style={{
          clipPath: invertir
            ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 20px 50%)'
            : 'polygon(0 0, 100% 0, calc(100% - 20px) 50%, 100% 100%, 0 100%)',
        }}
      >
        {titulo}
      </div>
    </div>
  )
}

export default TituloEspecialidad
