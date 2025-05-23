import BurbujaServicio from './BurbujaServicio'

function EspecialidadDental() {
  const servicios = [
    {
      nombre: 'Limpieza dental',
      descripcion: 'Eliminación de sarro y placa con ultrasonido.',
    },
    {
      nombre: 'Ortodoncia invisible',
      descripcion: 'Alineadores transparentes sin brackets metálicos.',
    },
    {
      nombre: 'Implantes dentales',
      descripcion: 'Reposición fija de piezas dentales con titanio.',
    },
    {
      nombre: 'Blanqueamiento',
      descripcion: 'Tratamiento estético para aclarar el color dental.',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Título de la sección */}
      <h2 className="text-4xl font-bold text-sky-700 mb-12 text-center">
        Odontología
      </h2>

      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Imagen */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/foto3.jpg"
            alt="Odontología"
            className="rounded-xl shadow-lg h-[30rem] object-cover"
          />
        </div>

        {/* Burbujas */}
        <div className="w-full md:w-2/3 flex flex-wrap gap-6 justify-center md:justify-start">
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

export default EspecialidadDental
