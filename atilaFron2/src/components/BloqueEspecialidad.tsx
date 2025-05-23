interface Props {
  titulo: string
  imagen: string
  servicios: string[]
  invertir?: boolean
}

function BloqueEspecialidad({ titulo, imagen, servicios, invertir }: Props) {
  return (
    <div className={`flex flex-col md:flex-row ${invertir ? 'md:flex-row-reverse' : ''} items-center gap-10 max-w-7xl mx-auto`}>
      <div className="w-full md:w-1/3 flex justify-center">
        <img src={imagen} alt={titulo} className="rounded-xl shadow-lg h-[22rem] object-cover" />
      </div>
      <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
        <h2 className="text-3xl font-bold text-sky-700">{titulo}</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {servicios.map((s, i) => (
            <li key={i} className="text-lg">{s}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BloqueEspecialidad
