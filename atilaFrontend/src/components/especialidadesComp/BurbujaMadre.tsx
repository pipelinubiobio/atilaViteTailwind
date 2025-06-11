interface Props {
  titulo: string
  activa: boolean
  onClick: () => void
}

function BurbujaMadre({ titulo, activa, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        flotar
        w-30 h-30 rounded-full flex items-center justify-center
        text-white font-bold text-center p-4 shadow-lg transition-all
        ${activa ? 'bg-sky-700 scale-110' : 'bg-sky-500 hover:bg-sky-600'}
      `}
    >
      {titulo}
    </button>
  )
}

export default BurbujaMadre
